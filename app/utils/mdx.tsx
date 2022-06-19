/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react'
import * as mdxBundler from 'mdx-bundler/client'
import type {LoaderData as RootLoaderData} from '../root'
import type { GitHubFile,MdxListItem, MdxPage} from '~/types'
import {AnchorOrLink, typedBoolean } from '~/utils/misc'
import {
    downloadDirList,
    downloadMdxFileOrDirectory,
  } from '~/utils/github.server'
  import {compileMdx} from '~/utils/compile-mdx.server'
  import {Themed} from './theme-provider'
  import {
    getImageBuilder,
    getImgProps,
    getSocialImageWithPreTitle,
  } from '~/images'


  // type CachifiedOptions = {
  //   forceFresh?: boolean | string
  //   request?: Request
  //   timings?: Timings
  //   maxAge?: number
  //   expires?: Date
  // }

/**
 * This is useful for when you don't want to send all the code for a page to the client.
 */
 function mapFromMdxPageToMdxListItem(page: MdxPage): MdxListItem {
    const {code, ...mdxListItem} = page
    return mdxListItem
  }

  async function downloadMdxFilesCached(
    contentDir: string,
    slug: string
  ) {
    
    const downloaded = await downloadMdxFileOrDirectory(`${contentDir}/${slug}`);
    return downloaded
  }
  

const getDirListKey = (contentDir: string) => `${contentDir}:dir-list`

  async function getMdxDirList(contentDir: string) {
        const fullContentDirPath = `content/${contentDir}`
        const dirList = (await downloadDirList(fullContentDirPath))
          .map(({name, path}) => ({
            name,
            slug: path
              .replace(`${fullContentDirPath}/`, '')
              .replace(/\.mdx$/, ''),
          }))
          .filter(({name}) => name !== 'README.md')
        return dirList
  }

  async function getMdxPage(
    {
      contentDir,
      slug,
    }: {
      contentDir: string
      slug: string
    }
  ): Promise<MdxPage | null | undefined> {
        const pageFiles = await downloadMdxFilesCached(contentDir, slug)
        const compiledPage = await compileMdxCached({
          contentDir,
          slug,
          ...pageFiles
        }).catch(err => {
          console.error(`Failed to get a fresh value for mdx:`, {
            contentDir,
            slug,
          })
          return Promise.reject(err)
        })
        return compiledPage
      }
  
    // if (!page) {
    //   // if there's no page, let's remove it from the cache
    //   void redisCache.del(key)
    // }
    // return page
  

async function getMdxPagesInDirectory(
    contentDir: string
  ) {
    const dirList = await getMdxDirList(contentDir)
    
    // our octokit throttle plugin will make sure we don't hit the rate limit
    const pageDatas = await Promise.all(
      dirList.map(async ({slug}) => {
        return {
          ...(await downloadMdxFilesCached(contentDir, slug)),
          slug,
        }
      }),
    )
    
    const pages = await Promise.all(
      pageDatas.map(pageData =>
        compileMdxCached({contentDir, ...pageData}),
      ),
    )
    
    return  pages.filter(typedBoolean)
  }

  async function compileMdxCached({
    contentDir,
    slug,
    entry,
    files,
  }: {
    contentDir: string
    slug: string
    entry: string
    files: Array<GitHubFile>  
  }) {
    try{
        
        const compiledPage = await compileMdx<MdxPage['frontmatter']>(slug, files)
        if (compiledPage) {
        //   if (
        //     compiledPage.frontmatter.bannerCloudinaryId &&
        //     !compiledPage.frontmatter.bannerBlurDataUrl
        //   ) {
        //     try {
        //       compiledPage.frontmatter.bannerBlurDataUrl = await getBlurDataUrl(
        //         compiledPage.frontmatter.bannerCloudinaryId,
        //       )
        //     } catch (error: unknown) {
        //       console.error(
        //         'oh no, there was an error getting the blur image data url',
        //         error,
        //       )
        //     }
        //   }
        //   if (compiledPage.frontmatter.bannerCredit) {
        //     const credit = await markdownToHtmlUnwrapped(
        //       compiledPage.frontmatter.bannerCredit,
        //     )
        //     compiledPage.frontmatter.bannerCredit = credit
        //     const noHtml = await stripHtml(credit)
        //     if (!compiledPage.frontmatter.bannerAlt) {
        //       compiledPage.frontmatter.bannerAlt = noHtml
        //         .replace(/(photo|image)/i, '')
        //         .trim()
        //     }
        //     if (!compiledPage.frontmatter.bannerTitle) {
        //       compiledPage.frontmatter.bannerTitle = noHtml
        //     }
        //   }
          return {
            ...compiledPage,
            slug,
            editLink: `https://github.com/samuelsunil/sunilsamuel-site/edit/main/${entry}`,
          }
        } else {
          return null
        }
    } catch(err: unknown) {
      console.log("compileMdxCached", err)
    }
        
  }
  


function getBannerAltProp(frontmatter: MdxPage['frontmatter']) {
  return (
    frontmatter.bannerAlt ??
    frontmatter.bannerTitle ??
    frontmatter.bannerCredit ??
    frontmatter.title ??
    'Post banner'
  )
}


function mdxPageMeta({
  data,
  parentsData,
}: {
  data: {page: MdxPage | null} | null
  parentsData: {root: RootLoaderData}
}) {
  const {requestInfo} = parentsData.root
  if (data?.page) {
    const {keywords = [], ...extraMeta} = data.page.frontmatter.meta ?? {}
    let title = data.page.frontmatter.title
    const isDraft = data.page.frontmatter.draft
    if (isDraft) title = `(DRAFT) ${title ?? ''}`
    return {
      ...(isDraft ? {robots: 'noindex'} : null),
      // ...getSocialMetas({
      //   origin: requestInfo.origin,
      //   title,
      //   description: data.page.frontmatter.description,
      //   keywords: keywords.join(', '),
      //   //url: // getUrl(requestInfo),
      //   // image: getSocialImageWithPreTitle({
      //   //   origin: requestInfo.origin,
      //   //   url: getDisplayUrl(requestInfo),
      //   //   featuredImage:
      //   //     data.page.frontmatter.bannerCloudinaryId ??
      //   //     'kentcdodds.com/illustrations/kody-flying_blue',
      //   //   title:
      //   //     data.page.frontmatter.socialImageTitle ??
      //   //     data.page.frontmatter.title ??
      //   //     'Untitled',
      //   //   preTitle:
      //   //     data.page.frontmatter.socialImagePreTitle ??
      //   //     `Check out this article`,
      //   // }),
      // }),
      ...extraMeta,
    }
  } else {
    return {
      title: 'Not found',
      description:
        'You landed on a page that Sunil  could not find 😢',
    }
  }
}


function getBannerTitleProp(frontmatter: MdxPage['frontmatter']) {
  return (
    frontmatter.bannerTitle ?? frontmatter.bannerAlt ?? frontmatter.bannerCredit
  )
}

async function getBlogMdxListItems() {
        let pages = await getMdxPagesInDirectory('blog')
        // pages = pages.sort((a, z) => {
        //   const aTime = new Date(a.frontmatter.date ?? '').getTime()
        //   const zTime = new Date(z.frontmatter.date ?? '').getTime()
        //   return aTime > zTime ? -1 : aTime === zTime ? 0 : 1
        // })

        return pages.map(mapFromMdxPageToMdxListItem)
  }



function BlogImage({
  cloudinaryId,
  imgProps,
}: {
  cloudinaryId: string
  imgProps: JSX.IntrinsicElements['img']
}) {
  return (
    <img
      className="w-full rounded-lg object-cover py-8"
      {...getImgProps(getImageBuilder(cloudinaryId, imgProps.alt), {
        widths: [350, 550, 700, 845, 1250, 1700, 2550],
        sizes: [
          '(max-width:1023px) 80vw',
          '(min-width:1024px) and (max-width:1620px) 50vw',
          '850px',
        ],
        transformations: {background: 'rgb:e6e9ee'},
      })}
      {...imgProps}
    />
  )
}

  function ThemedBlogImage({
    darkCloudinaryId,
    lightCloudinaryId,
    imgProps,
  }: {
    darkCloudinaryId: string
    lightCloudinaryId: string
    imgProps: JSX.IntrinsicElements['img']
  }) {
    return (
      <Themed
        light={<BlogImage cloudinaryId={lightCloudinaryId} imgProps={imgProps} />}
        dark={<BlogImage cloudinaryId={darkCloudinaryId} imgProps={imgProps} />}
      />
    )
  }
  

const mdxComponents = {
  a: AnchorOrLink,
  Themed,
  ThemedBlogImage,
  BlogImage,
}

  /**
 * This should be rendered within a useMemo
 * @param code the code to get the component from
 * @returns the component
 */
function getMdxComponent(code: string) {
  const Component = mdxBundler.getMDXComponent(code)
  function SVSMdxComponent({
    components,
    ...rest
  }: Parameters<typeof Component>['0']) {
    return (
      // @ts-expect-error the types are wrong here
      <Component components={{...mdxComponents, ...components}} {...rest} />
    )
  }
  return SVSMdxComponent
}

  function useMdxComponent(code: string) {
    console.table(code)
    return React.useMemo(() => getMdxComponent(code), [code])
  }
  

export {

    getMdxDirList, 
    getMdxPage,
    mdxPageMeta,
    useMdxComponent,
    getMdxPagesInDirectory,
    mapFromMdxPageToMdxListItem,
    getBlogMdxListItems,
    getBannerTitleProp,
    getBannerAltProp,
  }
  