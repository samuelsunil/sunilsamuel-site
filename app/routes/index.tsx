import * as React from 'react'
import type {HeadersFunction, LoaderFunction} from 'remix'
import {json, useLoaderData} from 'remix'
import type {MdxListItem} from '~/types'
import {AboutSection} from '~/components/sections/about-section'
import {BlogSection} from '~/components/sections/blog-section'
import {IntroductionSection} from '~/components/sections/introduction-section'
import {Spacer} from '~/components/spacer'
import {HeroSection} from '~/components/sections/hero-section'
import {images} from '~/images'
import {ButtonLink} from '~/components/button'
import {ServerError} from '~/components/errors'
import {getBlogMdxListItems} from '~/utils/mdx'
import {
  formatNumber,
  reuseUsefulLoaderHeaders,
} from '~/utils/misc'


type LoaderData = {
   blogPostCount: string
  // totalBlogReaders: string
  // totalBlogReads: string
 // blogRecommendations: Array<MdxListItem>
}

export const loader: LoaderFunction = async ({request}) => {
  const [posts] =
    await Promise.all([
      // getUser(request),
      getBlogMdxListItems({request}),
      // getBlogReadRankings({request}),
      // getReaderCount(request),
      // getBlogRecommendations(request),
    ])

  // const totalBlogReads = blogRankings.reduce(
  //   (total, ranking) => ranking.totalReads + total,
  //   0,
  // )

  const data: LoaderData = {
    blogPostCount: formatNumber(posts.length)
  }
  return json(data, {
    headers: {
      'Cache-Control': 'private, max-age=3600',
      Vary: 'Cookie',
    },
  })
}

export const headers: HeadersFunction = reuseUsefulLoaderHeaders

export default function IndexRoute() {
  // const data = useLoaderData<LoaderData>()
  const heroImage = images.potential
  return (
    <div>
      <HeroSection
        title="Helping people to realize their full potential and contribute to a more positive future for all of us"
        imageBuilder={heroImage}
        imageSize="giant"
        arrowUrl="#intro"
        arrowLabel="Learn more about Sammy"
        action={
          <div className="mr-auto flex flex-col gap-4">
            <ButtonLink to="/blog" variant="primary" prefetch="intent">
              Read the blog
            </ButtonLink>
          </div>
        }
      />

      <main>
        <IntroductionSection />
        <Spacer size="lg" />
       
        {/* <BlogSection
          articles={data.blogRecommendations}
          title="Blog recommendations"
          description="Prepared especially for you."
        /> */}
        <Spacer size="lg" />
        <Spacer size="lg" />
        {/* <AboutSection /> */}
      </main>
    </div>
  )
}

export function ErrorBoundary({error}: {error: Error}) {
  console.error(error)
  return <ServerError />
}
