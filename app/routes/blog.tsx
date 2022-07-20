import * as React from "react";
import type {
  HeadersFunction,
  LoaderFunction,
  MetaFunction,
} from '@remix-run/node'
import {json} from '@remix-run/node'
import {Link, useLoaderData, useSearchParams} from '@remix-run/react'
import type {Timings} from '~/utils/metrics.server'

import type {LoaderData as RootLoaderData} from '../root'
import type { Await, SVSHandle, MdxListItem } from "~/types";
import { MixedCheckbox } from "@reach/checkbox";
import clsx from "clsx";
import {
  // getImageBuilder,
  // getImgProps,
  getSocialImageWithPreTitle,
  images,
} from '~/images'
import {HeroSection} from '~/components/sections/hero-section'
import {Tag} from '~/components/tag'
import {Spacer} from '~/components/spacer'
import { H2, H3, H6, Paragraph } from "~/components/typography";
import { SearchIcon } from "~/components/icons/search-icon";
import { ArticleCard } from "~/components/article-card";
import { ArrowLink } from "~/components/arrow-button";
import { useRootData } from "~/utils/use-root-data";
import { Grid } from "~/components/grid";
import { getBlogMdxListItems } from "~/utils/mdx";
import {
  formatAbbreviatedNumber,
  formatDate,
  formatNumber,
  getDisplayUrl,
  getUrl,
  reuseUsefulLoaderHeaders,
  useUpdateQueryStringValueWithoutNavigation,
} from "~/utils/misc";
//import {filterPosts} from '~/utils/blog'
import { ServerError } from "~/components/errors";
import { filterPosts } from "~/utils/blog";
import {getSocialMetas} from '~/utils/seo'


const handleId = "blog";
export const handle: SVSHandle = {
  id: handleId,
  getSitemapEntries: () => [{ route: `/blog`, priority: 0.7 }],
};

// should be divisible by 3 and 2 (large screen, and medium screen).
const PAGE_SIZE = 12;
const initialIndexToShow = PAGE_SIZE;

const specialQueryRegex = /(?<not>!)?leader:(?<team>\w+)(\s|$)?/g;

type LoaderData = {
  posts: Array<MdxListItem>;
  recommended: MdxListItem | undefined
  tags: Array<string>;
};

export const loader: LoaderFunction = async ({ request }) => {
   const timings: Timings = {}

  const [posts] = await Promise.all([
    getBlogMdxListItems({request, timings}).then((allPosts) =>
      allPosts.filter((p) => !p.frontmatter.draft)
    ),
  ]);

  const tags = new Set<string>();
  for (const post of posts) {
    for (const category of post.frontmatter.categories ?? []) {
      tags.add(category);
    }
  }

  const data: LoaderData = {
    posts,
    //recommended,
    tags: Array.from(tags),
  };

  return json(data, {
    headers: {
      "Cache-Control": "private, max-age=3600",
      Vary: "Cookie",
      // 'Server-Timing': getServerTimeHeader(timings),
    },
  });
};

export const headers: HeadersFunction = reuseUsefulLoaderHeaders

export const meta: MetaFunction = ({data, parentsData}) => {
  const {requestInfo} = parentsData.root as RootLoaderData
  

  return {
    ...getSocialMetas({
      origin: requestInfo.origin,
      title: 'Blogging With Sammy',
      description: `Join the 1000+ people who have read Sammy's articles on JavaScript, TypeScript, React, Engineering Management, Career, and more.`,
      keywords:
        'JavaScript, TypeScript, React, Testing, Career, Software Development, Sunil Samuel, With Sammy Blog',
      url: getUrl(requestInfo),
      image: getSocialImageWithPreTitle({
        origin: requestInfo.origin,
        url: getDisplayUrl(requestInfo),
        featuredImage: images.happyTraveler.id,
        preTitle: 'Check out this Blog',
        title: `Priceless insights, ideas, and experiences for your dev work`,
      }),
    }),
  }
}

// should be divisible by 3 and 2 (large screen, and medium screen).
// const PAGE_SIZE = 12
// const initialIndexToShow = PAGE_SIZE


function BlogHome() {
  const {requestInfo} = useRootData()
  const [searchParams] = useSearchParams();
  const searchInputRef = React.useRef<HTMLInputElement>(null);

  const resultsRef = React.useRef<HTMLDivElement>(null);
  /**
   * This is here to make sure that a user doesn't hit "enter" on the search
   * button, which focuses the input and then keyup the enter on the input
   * which will trigger the scroll down. We should *only* scroll when the
   * "enter" keypress and keyup happen on the input.
   */
  const ignoreInputKeyUp = React.useRef<boolean>(false);
  const [queryValue, setQuery] = React.useState<string>(() => {
    return searchParams.get("q") ?? "";
  });
  const query = queryValue.trim();

  useUpdateQueryStringValueWithoutNavigation("q", query);

  const data = useLoaderData<LoaderData>();
  const { posts: allPosts } = data;
  const regularQuery = query.replace(specialQueryRegex, "").trim();


  const matchingPosts = React.useMemo(() => {
    const filteredPosts = allPosts
    return filterPosts(filteredPosts, regularQuery)
  }, [allPosts, regularQuery])


  const [indexToShow, setIndexToShow] = React.useState(initialIndexToShow);
  // when the query changes, we want to reset the index
  React.useEffect(() => {
    setIndexToShow(initialIndexToShow);
  }, [query]);

  // this bit is very similar to what's on the blogs page.
  // Next time we need to do work in here, let's make an abstraction for them

    function toggleTag(tag: string) {
      setQuery(q => {
        // create a regexp so that we can replace multiple occurrences (`react node react`)
        const expression = new RegExp(tag, 'ig')

        const newQuery = expression.test(q)
          ? q.replace(expression, '')
          : `${q} ${tag}`

        // trim and remove subsequent spaces (`react   node ` => `react node`)
        return newQuery.replace(/\s+/g, ' ').trim()
      })
    }

  const isSearching = query.length > 0;

    const posts = isSearching
      ? matchingPosts.slice(0, indexToShow)
      : matchingPosts
          .filter(p => p.slug !== data.recommended?.slug)
          .slice(0, indexToShow)

    const hasMorePosts = isSearching
      ? indexToShow < matchingPosts.length
      : indexToShow < matchingPosts.length - 1

    const visibleTags = isSearching
      ? new Set(
        matchingPosts
            .flatMap(post => post.frontmatter.categories)
            .filter(Boolean),
        )
      : new Set(data.tags)

    // const recommendedPermalink = data.recommended
    //   ? `${requestInfo.origin}/blog/${data.recommended.slug}`
    //   : undefined
 const userReadsState = "unread";

const searchInputPlaceholder = 'Search posts';

  return (
    <div className="set-color-team-current-blue">
      <HeroSection
        title="Learn development with great articles."
         imageBuilder={images.happyTraveler}
        action={
          <div className="w-full">
            <form
              action="/blog"
              method="GET"
              onSubmit={e => e.preventDefault()}
            >
              <div className="relative">
                <button
                  title={query === '' ? 'Search' : 'Clear search'}
                  type="button"
                  onClick={() => {
                    setQuery('')
                    ignoreInputKeyUp.current = true
                    searchInputRef.current?.focus()
                  }}
                  onKeyDown={() => {
                    ignoreInputKeyUp.current = true
                  }}
                  onKeyUp={() => {
                    ignoreInputKeyUp.current = false
                  }}
                  className={clsx(
                    'absolute left-6 top-0 flex h-full items-center justify-center border-none bg-transparent p-0 text-blueGray-500',
                    {
                      'cursor-pointer': query !== '',
                      'cursor-default': query === '',
                    },
                  )}
                >
                  <SearchIcon />
                </button>
                <input
                  ref={searchInputRef}
                  type="search"
                  value={queryValue}
                  onChange={event =>
                   
                    setQuery(event.currentTarget.value.toLowerCase())
                  }
                  onKeyUp={e => {
                    if (!ignoreInputKeyUp.current && e.key === 'Enter') {
                      resultsRef.current
                        ?.querySelector('a')
                        ?.focus({preventScroll: true})
                      resultsRef.current?.scrollIntoView({behavior: 'smooth'})
                    }
                    ignoreInputKeyUp.current = false
                  }}
                  name="q"
                  placeholder={searchInputPlaceholder}
                  className="appearance-none text-primary bg-primary border-secondary focus:bg-secondary focus:outline-none w-full rounded-full border py-6 pl-14 pr-6 text-lg font-medium hover:border-team-current focus:border-team-current md:pr-24"
                />
                <div className="absolute right-6 top-0 hidden h-full w-14 items-center justify-between text-lg font-medium text-blueGray-500 md:flex">
                  <div className="flex-1" />
                  {posts.length}
                </div>
              </div>
            </form>
          </div>
        }
      />
    


      <Grid className="mb-14">
        <Spacer size="xs" className="col-span-full" />

        {data.tags.length > 0 ? (
          <>
            <H6 as="div" className="col-span-full mb-6">
              Search blog by topics
            </H6>
            <div className="col-span-full -mb-4 -mr-4 flex flex-wrap lg:col-span-10">
              {data.tags.map(tag => {
                const selected = regularQuery.includes(tag)
                return (
                  <Tag
                    key={tag}
                    tag={tag}
                    selected={selected}
                    onClick={() => toggleTag(tag)}
                    disabled={!visibleTags.has(tag) && !selected}
                  />
                )
              })}
            </div>
          </>
        ) : null}
      </Grid>

      <Grid className="mb-64" ref={resultsRef}>
        {allPosts.length === 0 ? (
          <div className="col-span-full flex flex-col items-center">
            <img
              className="mt-24 h-auto w-full max-w-lg"
              // {...getImgProps(images.bustedOnewheel, {
              //   widths: [350, 512, 1024, 1536],
              //   sizes: ['(max-width: 639px) 80vw', '512px'],
              // })}
            />
            <H3 as="p" variant="secondary" className="mt-24 max-w-lg">
              {`Couldn't find anything to match your criteria. Sorry.`}
            </H3>
          </div>
        ) : (
          posts.map(article => (
            <div key={article.slug} className="col-span-4 mb-10">
              <ArticleCard
                article={article}
              />
            </div>
          ))
        )}
      </Grid>
    </div>
  );
}

export default BlogHome;

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return <ServerError />;
}

/*
eslint
  complexity: "off",
*/
