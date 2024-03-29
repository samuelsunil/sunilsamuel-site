import * as React from 'react'
import {useLoaderData, useCatch, useParams} from '@remix-run/react'
import type {HeadersFunction} from '@remix-run/node'
import  { json} from '@remix-run/node'
import type {
  SVSAction,
  SVSHandle,
  SVSLoader,
  MdxListItem,
  MdxPage,
} from '~/types'
import {useRootData} from '~/utils/use-root-data'
import {getImageBuilder, getImgProps, images} from '~/images'
import {
  getBlogMdxListItems,
  getMdxPage,
  mdxPageMeta,
  useMdxComponent,
  getBannerTitleProp,
  getBannerAltProp,
} from '~/utils/mdx'
import {H2, H6, Paragraph} from '~/components/typography'
import {Grid} from '~/components/grid'
import {ArrowLink, BackLink} from '~/components/arrow-button'
import {BlogSection} from '~/components/sections/blog-section'
// import {
//   getBlogReadRankings,
//   getTotalPostReads,
//   getBlogRecommendations,
//   ReadRankings,
//   notifyOfOverallTeamLeaderChange,
//   notifyOfTeamLeaderChangeOnPost,
// } from '~/utils/blog.server'
import {FourOhFour, ServerError} from '~/components/errors'
// import {TeamStats} from '~/components/team-stats'
import type {Timings} from '~/utils/metrics.server'
import {getServerTimeHeader} from '~/utils/metrics.server'
import {formatDate, reuseUsefulLoaderHeaders} from '~/utils/misc'
import {BlurrableImage} from '~/components/blurrable-image'
// import {getSession} from '~/utils/session.server'
// // import {addPostRead} from '~/utils/prisma.server'
// import {getClientSession} from '~/utils/client.server'
// import {getRankingLeader} from '~/utils/blog'
// import {externalLinks} from '../external-links'
// import {teamEmoji, useTeam} from '~/utils/team-provider'
// import {getWorkshops} from '~/utils/workshops.server'
// import {
//   getScheduledEvents,
//   WorkshopEvent,
// } from '~/utils/workshop-tickets.server'
// import {WorkshopCard} from '~/components/workshop-card'
import {Spacer} from '~/components/spacer'
import clsx from 'clsx'
// import {HeaderSection} from '~/components/sections/header-section'

const handleId = 'blog-post'
export const handle: SVSHandle = {
  id: handleId,
  getSitemapEntries: async request => {
    const pages = await getBlogMdxListItems({request})
    return pages
      .filter(page => !page.frontmatter.draft)
      .map(page => {
        return {route: `/blog/${page.slug}`, priority: 0.7}
      })
  },
}

export const action: SVSAction<{slug: string}> = async ({params}) => {
  // const {slug} = params
  // const session = await getSession()
  // const user = await session.getUser()
  const headers = new Headers()


  // trigger an update to the ranking cache and notify when the leader changed


  return json({success: true, headers})
}

type CatchData = {
  recommendations: Array<MdxListItem>
  totalReads: string
}
type LoaderData = CatchData &  {
  page: MdxPage
}

export const loader: SVSLoader<{slug: string}> = async ({request, params}) => {
  // the loader won't handle this anyway, we've got this handled in other-routes.server.ts
  if (params.slug === 'rss.xml') return null

  const timings: Timings = {}
  const page = await getMdxPage(
    {
      contentDir: 'blog',
      slug: params.slug,
    },
    {request, timings},
  )

  const headers = {
    'Cache-Control': 'private, max-age=3600',
    Vary: 'Cookie',
    'Server-Timing': getServerTimeHeader(timings),
  }
  if (!page) {
    throw json({}, {status: 404, headers})
  }

  const topics = [
    ...(page.frontmatter.categories ?? []),
    ...(page.frontmatter.meta?.keywords ?? []),
  ]

  const data: LoaderData = {
    page,
  }
  return json(data, {status: 200, headers})
}

export const headers: HeadersFunction = reuseUsefulLoaderHeaders

export const meta = mdxPageMeta

function ArticleFooter({
  editLink,
  permalink,
  title = 'an awesome post',
  isDraft,
}: {
  editLink: string
  permalink: string
  title?: string
  isDraft: boolean
}) {
  
  

  return (
    <Grid>
      <div className="col-span-full mb-12 flex flex-col flex-wrap justify-between gap-2 border-b border-gray-600 pb-12 text-lg font-medium text-blueGray-500 lg:col-span-8 lg:col-start-3 lg:flex-row lg:pb-6">
        <div className="flex space-x-5">
          <a
            className={clsx(
              'underlined focus:outline-none hover:text-black focus:text-black dark:hover:text-white dark:focus:text-white',
              {hidden: isDraft},
            )}
            target="_blank"
            rel="noreferrer noopener"
            href={`https://twitter.com/intent/tweet?${new URLSearchParams({
              url: permalink,
              text: "TWEET 1",
            })}`}
          >
            Tweet this article
          </a>
        </div>

        <div className="flex">
          <a
            className={clsx(
              'underlined focus:outline-none hover:text-black focus:text-black dark:hover:text-white dark:focus:text-white',
              {hidden: isDraft},
            )}
            target="_blank"
            rel="noreferrer noopener"
            href={`https://twitter.com/search?${new URLSearchParams({
              q: permalink,
            })}`}
          >
            Discuss on Twitter
          </a>
          <span className={clsx('mx-3 self-center text-xs', {hidden: isDraft})}>
            •
          </span>
          <a
            className="underlined focus:outline-none hover:text-black focus:text-black dark:hover:text-white dark:focus:text-white"
            target="_blank"
            rel="noreferrer noopener"
            href={editLink}
          >
            Edit on GitHub
          </a>
        </div>
      </div>
      <div className="col-span-full lg:col-span-2 lg:col-start-3">
        <img
          className="mb-8 w-32 rounded-lg"
          {...getImgProps(images.sunilTransparentProfile, {
            widths: [128, 256, 512],
            sizes: ['8rem'],
          })}
        />
      </div>
      <div className="lg:col-start:5 col-span-full lg:col-span-6">
        <H6 as="div">Written by Sunil Samuel</H6>
        <Paragraph className="mb-12 mt-3">
          {`
Sunil Samuel is a JavaScript software engineer and teacher. Sunil's taught hundreds of
people how to make the world a better place with quality software development tools
and practices. He lives with his wife and his son in Bangalore, India.
          `.trim()}
        </Paragraph>
        <ArrowLink to="/about">Learn more about Sunil</ArrowLink>
      </div>
    </Grid>
  )
}

export default function MdxScreen() {
  const data = useLoaderData<LoaderData>()
  const {requestInfo} = useRootData()

  const {code, frontmatter} = data.page
  const params = useParams()

  const {slug} = params
  const Component = useMdxComponent(code)

  const permalink = `${requestInfo.origin}/blog/${slug}`

  
  const isDraft = Boolean(data.page.frontmatter.draft)


  return (
    <div
      key={slug}
      className="set-color-team-current-blue"
      
    >
            <Grid className="mb-10 mt-24 lg:mb-24">
        <div className="col-span-full flex justify-between lg:col-span-8 lg:col-start-3">
          <BackLink to="/blog">Back to overview</BackLink>
        </div>
      </Grid>

      <Grid as="header" className="mb-12">
        <div className="col-span-full lg:col-span-8 lg:col-start-3">
          {isDraft ? (
            <div className="prose prose-light mb-6 max-w-full dark:prose-dark">
              {React.createElement(
                'callout-warning',
                {},
                `This blog post is a draft. Please don't share it in its current state.`,
              )}
            </div>
          ) : null}
          <H2>{frontmatter.title}</H2>
          <H6 as="p" variant="secondary" className="mt-2">
            {frontmatter.date
              ? formatDate(frontmatter.date)
              : 'some day in the past'}{' '}
            — {data.page.readTime?.text ?? 'a quick read'}
          </H6>
        </div>
        {frontmatter.bannerCloudinaryId ? (
          <div className="col-span-full mt-10 lg:col-span-10 lg:col-start-2 lg:mt-16">
            <BlurrableImage
              key={frontmatter.bannerCloudinaryId}
              blurDataUrl={frontmatter.bannerBlurDataUrl}
              className="aspect-h-4 aspect-w-3 md:aspect-w-3 md:aspect-h-2"
              img={
                <img
                  key={frontmatter.bannerCloudinaryId}
                  title={getBannerTitleProp(frontmatter)}
                  className="rounded-lg object-cover object-center"
                  {...getImgProps(
                    getImageBuilder(
                      frontmatter.bannerCloudinaryId,
                      getBannerAltProp(frontmatter),
                    ),
                    {
                      widths: [280, 560, 840, 1100, 1650, 2500, 2100, 3100],
                      sizes: [
                        '(max-width:1023px) 80vw',
                        '(min-width:1024px) and (max-width:1620px) 67vw',
                        '1100px',
                      ],
                      transformations: {
                        background: 'rgb:e6e9ee',
                      },
                    },
                  )}
                />
              }
            />
          </div>
        ) : null}
      </Grid>

      <main >
        <Grid as="main" className="prose prose-light mb-24 dark:prose-dark">
          <Component />
        </Grid>
      </main>

     

      <ArticleFooter
        editLink={data.page.editLink}
        permalink={permalink}
        title={data.page.frontmatter.title}
        isDraft={isDraft}
      />

      <Spacer size="base" />


      <BlogSection
        articles={data.recommendations}
        title="If you found this article helpful."
        description="You will love these ones as well."
        showArrowButton={false}
      />
    </div>
  )
}

export function ErrorBoundary({error}: {error: Error}) {
  console.error(error)
  return <ServerError />
}

export function CatchBoundary() {
  const caught = useCatch()
  console.error('CatchBoundary', caught)
  if (caught.data.recommendations) {
    return <FourOhFour articles={caught.data.recommendations} />
  }
  throw new Error(`Unhandled error: ${caught.status}`)
}
