
import type { MdxListItem, MdxPage} from '~/types'
import { typedBoolean } from '~/utils/misc'
import {
    downloadDirList,
    downloadMdxFileOrDirectory,
  } from '~/utils/github.server'

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
    console.log("DIRLIST----------------", dirList)
    // our octokit throttle plugin will make sure we don't hit the rate limit
    const pageDatas = await Promise.all(
      dirList.map(async ({slug}) => {
        return {
          ...(await downloadMdxFilesCached(contentDir, slug)),
          slug,
        }
      }),
    )
  
    // const pages = await Promise.all(
    //   pageDatas.map(pageData =>
    //     compileMdxCached({contentDir, ...pageData}),
    //   ),
    // )
 
    return pageDatas // pages.filter(typedBoolean)
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
  