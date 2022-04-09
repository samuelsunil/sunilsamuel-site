
import type { GitHubFile,MdxListItem, MdxPage} from '~/types'
import { typedBoolean } from '~/utils/misc'
import {
    downloadDirList,
    downloadMdxFileOrDirectory,
  } from '~/utils/github.server'
  import {compileMdx} from '~/utils/compile-mdx.server'

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
    console.log("PAGESSSSSSS+=============================", pages )
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
        console.log("TEST+=============================", slug, files )
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
  

async function getBlogMdxListItems() {
        const pages = await getMdxPagesInDirectory('blog')
        // pages = pages.sort((a, z) => {
        //   const aTime = new Date(a.frontmatter.date ?? '').getTime()
        //   const zTime = new Date(z.frontmatter.date ?? '').getTime()
        //   return aTime > zTime ? -1 : aTime === zTime ? 0 : 1
        // })

        return pages.map(mapFromMdxPageToMdxListItem)
  }



export {

    getMdxDirList,
    getMdxPagesInDirectory,
    mapFromMdxPageToMdxListItem,
    getBlogMdxListItems,
   
  }
  