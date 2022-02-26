import * as React from 'react'
import type {LoaderFunction, HeadersFunction, MetaFunction} from 'remix'
import {Link, json, useLoaderData, useSearchParams} from 'remix'
import {MixedCheckbox} from '@reach/checkbox'
import clsx from 'clsx'
import {H2, H3, H6, Paragraph} from '~/components/typography'
import {SearchIcon} from '~/components/icons/search-icon'
import {ArticleCard} from '~/components/article-card'
import {ArrowLink} from '~/components/arrow-button'
import {useRootData} from '~/utils/use-root-data'
import {
    // formatAbbreviatedNumber,
    // formatDate,
    // formatNumber,
    // getDisplayUrl,
    // getUrl,
    // isTeam,
    // reuseUsefulLoaderHeaders,
    useUpdateQueryStringValueWithoutNavigation,
  } from '~/utils/misc'
  //import {filterPosts} from '~/utils/blog'
  import {ServerError} from '~/components/errors'



// should be divisible by 3 and 2 (large screen, and medium screen).
const PAGE_SIZE = 12
const initialIndexToShow = PAGE_SIZE

const specialQueryRegex = /(?<not>!)?leader:(?<team>\w+)(\s|$)?/g


function BlogHome() {
    //const {requestInfo} = useRootData()
    const [searchParams] = useSearchParams()
    const searchInputRef = React.useRef<HTMLInputElement>(null)

    const resultsRef = React.useRef<HTMLDivElement>(null)
    /**
   * This is here to make sure that a user doesn't hit "enter" on the search
   * button, which focuses the input and then keyup the enter on the input
   * which will trigger the scroll down. We should *only* scroll when the
   * "enter" keypress and keyup happen on the input.
   */
  const ignoreInputKeyUp = React.useRef<boolean>(false)
  const [queryValue, setQuery] = React.useState<string>(() => {
    return searchParams.get('q') ?? ''
  })
  const query = queryValue.trim()

  useUpdateQueryStringValueWithoutNavigation('q', query)

  const regularQuery = query.replace(specialQueryRegex, '').trim()

  const matchingPosts = React.useMemo(() => {
    const r = new RegExp(specialQueryRegex)
    let match = r.exec(query)
    while (match) {
      match = r.exec(query)
    }

    //const filteredPosts = allPosts

    // filteredPosts =
    //   userReadsState === 'unset'
    //     ? filteredPosts
    //     : filteredPosts.filter(post => {
    //         const isRead = userReads.includes(post.slug)
    //         if (userReadsState === 'read' && !isRead) return false
    //         if (userReadsState === 'unread' && isRead) return false
    //         return true
    //       })

    // filteredPosts =
    //   leaders.length || nonLeaders.length
    //     ? filteredPosts.filter(post => {
    //         const leader = getLeadingTeamForSlug(post.slug)
    //         if (leaders.length && leader && leaders.includes(leader)) {
    //           return true
    //         }
    //         if (
    //           nonLeaders.length &&
    //           (!leader || !nonLeaders.includes(leader))
    //         ) {
    //           return true
    //         }
    //         return false
    //       })
    //     : filteredPosts

    return null //filterPosts(filteredPosts, regularQuery)
  }, [query])

  const [indexToShow, setIndexToShow] = React.useState(initialIndexToShow)
  // when the query changes, we want to reset the index
  React.useEffect(() => {
    setIndexToShow(initialIndexToShow)
  }, [query])


  // this bit is very similar to what's on the blogs page.
  // Next time we need to do work in here, let's make an abstraction for them

//   function toggleTag(tag: string) {
//     setQuery(q => {
//       // create a regexp so that we can replace multiple occurrences (`react node react`)
//       const expression = new RegExp(tag, 'ig')

//       const newQuery = expression.test(q)
//         ? q.replace(expression, '')
//         : `${q} ${tag}`

//       // trim and remove subsequent spaces (`react   node ` => `react node`)
//       return newQuery.replace(/\s+/g, ' ').trim()
//     })
//   }

  const isSearching = query.length > 0

//   const posts = isSearching
//     ? matchingPosts.slice(0, indexToShow)
//     : matchingPosts
//         .filter(p => p.slug !== data.recommended?.slug)
//         .slice(0, indexToShow)

//   const hasMorePosts = isSearching
//     ? indexToShow < matchingPosts.length
//     : indexToShow < matchingPosts.length - 1

//   const visibleTags = isSearching
//     ? new Set(
//         matchingPosts
//           .flatMap(post => post.frontmatter.categories)
//           .filter(Boolean),
//       )
//     : new Set(data.tags)

//   const recommendedPermalink = data.recommended
//     ? `${requestInfo.origin}/blog/${data.recommended.slug}`
//     : undefined

      return (
        <div
          className="set-color-team-current-blue)}"
        >
            
            
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
                  placeholder="Search posts...."
                  className="appearance-none text-primary bg-primary border-secondary focus:bg-secondary focus:outline-none w-full rounded-full border py-6 pl-14 pr-6 text-lg font-medium hover:border-team-current focus:border-team-current md:pr-24"
                />
                <div className="absolute right-6 top-0 hidden h-full w-14 items-center justify-between text-lg font-medium text-blueGray-500 md:flex">
                  <div className="flex-1" />
                  {/* {matchingPosts.length} */}
                </div>
              </div>
            </form>
          </div>
            
            
             </div> )
}



export default BlogHome

export function ErrorBoundary({error}: {error: Error}) {
  console.error(error)
  return <ServerError />
}



/*
eslint
  complexity: "off",
*/
