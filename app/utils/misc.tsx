import * as React from 'react'
import type {HeadersFunction} from '@remix-run/node'
import {Link, LinkProps} from '@remix-run/react'
import type {NonNullProperties, User} from '~/types'
//import {Team} from '@prisma/client'
import * as dateFns from 'date-fns'
import md5 from 'md5-hash'
import {images} from '../images'
//import type {getEnv} from './env.server'


const defaultAvatarSize = 128
function getAvatar(
  email: string,
  {
    size = defaultAvatarSize,
    fallback = images.sunilProfile({resize: {width: size}}),
    origin,
  }: {size?: number; fallback?: string | null; origin?: string} = {},
) {
  const hash = md5(email)
  const url = new URL(`https://www.gravatar.com/avatar/${hash}`)
  url.searchParams.set('size', String(size))
  if (fallback) {
    if (origin && fallback.startsWith('/')) {
      fallback = `${origin}${fallback}`
    }
    url.searchParams.set('default', fallback)
  }
  return url.toString()
}


function getAvatarForUser(
  {email, team, firstName}: Pick<User, 'email' | 'team' | 'firstName'>,
  {size = defaultAvatarSize, origin}: {size?: number; origin?: string} = {},
) {
  return {
    src: getAvatar(email, {
      //fallback: avatarFallbacks[team](size),
      size,
      origin,
    }),
    alt: firstName,
  }
}



const useSSRLayoutEffect =
  typeof window === 'undefined' ? () => {} : React.useLayoutEffect

type AnchorProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>

const AnchorOrLink = React.forwardRef<
  HTMLAnchorElement,
  AnchorProps & {
    reload?: boolean
    to?: LinkProps['to']
    prefetch?: LinkProps['prefetch']
  }
>(function AnchorOrLink(props, ref) {
  const {
    to,
    href,
    download,
    reload = false,
    prefetch,
    children,
    ...rest
  } = props
  let toUrl = ''
  let shouldUserRegularAnchor = reload || download

  if (!shouldUserRegularAnchor && typeof href === 'string') {
    shouldUserRegularAnchor = href.includes(':') || href.startsWith('#')
  }

  if (!shouldUserRegularAnchor && typeof to === 'string') {
    toUrl = to
    shouldUserRegularAnchor = to.includes(':')
  }

  if (!shouldUserRegularAnchor && typeof to === 'object') {
    toUrl = `${to.pathname ?? ''}${to.hash ? `#${to.hash}` : ''}${
      to.search ? `?${to.search}` : ''
    }`
    shouldUserRegularAnchor = to.pathname?.includes(':')
  }

  if (shouldUserRegularAnchor) {
    return (
      <a {...rest} download={download} href={href ?? toUrl} ref={ref}>
        {children}
      </a>
    )
  } else {
    return (
      <Link prefetch={prefetch} to={to ?? href ?? ''} {...rest} ref={ref}>
        {children}
      </Link>
    )
  }
})

function formatTime(seconds: number) {
  return dateFns.format(dateFns.addSeconds(new Date(0), seconds), 'mm:ss')
}

const formatNumber = (num: number) => new Intl.NumberFormat().format(num)

function formatAbbreviatedNumber(num: number) {
  return num < 1_000
    ? formatNumber(num)
    : num < 1_000_000
    ? `${formatNumber(Number((num / 1_000).toFixed(2)))}k`
    : num < 1_000_000_000
    ? `${formatNumber(Number((num / 1_000_000).toFixed(2)))}m`
    : num < 1_000_000_000_000
    ? `${formatNumber(Number((num / 1_000_000_000).toFixed(2)))}b`
    : 'a lot'
}

function formatDate(dateString: string) {
  return dateFns.format(
    dateFns.add(dateFns.parseISO(dateString), {
      minutes: new Date().getTimezoneOffset(),
    }),
    'PPP',
  )
}

function getErrorMessage(error: unknown) {
  if (typeof error === 'string') return error
  if (error instanceof Error) return error.message
  return 'Unknown Error'
}

function getErrorStack(error: unknown) {
  if (typeof error === 'string') return error
  if (error instanceof Error) return error.stack
  return 'Unknown Error'
}

function getNonNull<Type extends Record<string, null | undefined | unknown>>(
  obj: Type,
): NonNullProperties<Type> {
  for (const [key, val] of Object.entries(obj)) {
    assertNonNull(val, `The value of ${key} is null but it should not be.`)
  }
  return obj as NonNullProperties<Type>
}

function typedBoolean<T>(
  value: T,
): value is Exclude<T, '' | 0 | false | null | undefined> {
  return Boolean(value)
}

function assertNonNull<PossibleNullType>(
  possibleNull: PossibleNullType,
  errorMessage: string,
): asserts possibleNull is Exclude<PossibleNullType, null | undefined> {
  if (possibleNull == null) throw new Error(errorMessage)
}

function getRequiredEnvVarFromObj(
  obj: Record<string, string | undefined>,
  key: string,
  devValue: string = `${key}-dev-value`,
) {

  let value = devValue
  const envVal = obj[key]
  if (envVal) {
    value = envVal
  } else if (obj.NODE_ENV === 'production') {
    throw new Error(`${key} is a required env variable`)
  }
  return value
}

function getRequiredServerEnvVar(key: string, devValue?: string) {
  return getRequiredEnvVarFromObj(process.env, key, devValue)
}

function getRequiredGlobalEnvVar(
  key: keyof ReturnType<typeof getEnv>,
  devValue?: string,
) {
  return getRequiredEnvVarFromObj(ENV, key, devValue)
}

function getDomainUrl(request: Request) {
  const host =
    request.headers.get('X-Forwarded-Host') ?? request.headers.get('host')
  if (!host) {
    throw new Error('Could not determine domain URL.')
  }
  const protocol = host.includes('localhost') ? 'http' : 'https'
  return `${protocol}://${host}`
}

function removeTrailingSlash(s: string) {
  return s.endsWith('/') ? s.slice(0, -1) : s
}

function getDisplayUrl(requestInfo?: {origin: string; path: string}) {
  return getUrl(requestInfo).replace(/^https?:\/\//, '')
}

function getUrl(requestInfo?: {origin: string; path: string}) {
  return removeTrailingSlash(
    `${requestInfo?.origin ?? 'https://sunilvsamuel.com'}${
      requestInfo?.path ?? ''
    }`,
  )
}

function toBase64(string: string) {
  if (typeof window === 'undefined') {
    return Buffer.from(string).toString('base64')
  } else {
    return window.btoa(string)
  }
}

function useUpdateQueryStringValueWithoutNavigation(
  queryKey: string,
  queryValue: string,
) {
  React.useEffect(() => {
    const currentSearchParams = new URLSearchParams(window.location.search)
    const oldQuery = currentSearchParams.get(queryKey) ?? ''
    if (queryValue === oldQuery) return

    if (queryValue) {
      currentSearchParams.set(queryKey, queryValue)
    } else {
      currentSearchParams.delete(queryKey)
    }
    const newUrl = [window.location.pathname, currentSearchParams.toString()]
      .filter(Boolean)
      .join('?')
    // alright, let's talk about this...
    // Normally with remix, you'd update the params via useSearchParams from react-router-dom
    // and updating the search params will trigger the search to update for you.
    // However, it also triggers a navigation to the new url, which will trigger
    // the loader to run which we do not want because all our data is already
    // on the client and we're just doing client-side filtering of data we
    // already have. So we manually call `window.history.pushState` to avoid
    // the router from triggering the loader.
    window.history.replaceState(null, '', newUrl)
  }, [queryKey, queryValue])
}

function debounce<Callback extends (...args: Array<unknown>) => void>(
  fn: Callback,
  delay: number,
) {
  let timer: ReturnType<typeof setTimeout> | null = null
  return (...args: Parameters<Callback>) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

function useDebounce<Callback extends (...args: Array<unknown>) => unknown>(
  callback: Callback,
  delay: number,
) {
  const callbackRef = React.useRef(callback)
  React.useEffect(() => {
    callbackRef.current = callback
  })
  return React.useMemo(
    () => debounce((...args) => callbackRef.current(...args), delay),
    [delay],
  )
}

const reuseUsefulLoaderHeaders: HeadersFunction = ({loaderHeaders}) => {
  const headers = new Headers()
  const usefulHeaders = ['Cache-Control', 'Vary', 'Server-Timing']
  for (const headerName of usefulHeaders) {
    if (loaderHeaders.has(headerName)) {
      headers.set(headerName, loaderHeaders.get(headerName)!)
    }
  }

  return headers
}

function callAll<Args extends Array<unknown>>(
  ...fns: Array<((...args: Args) => unknown) | undefined>
) {
  return (...args: Args) => fns.forEach(fn => fn?.(...args))
}

function useDoubleCheck() {
  const [doubleCheck, setDoubleCheck] = React.useState(false)

  function getButtonProps(props?: JSX.IntrinsicElements['button']) {
    const onBlur: JSX.IntrinsicElements['button']['onBlur'] = () =>
      setDoubleCheck(false)

    const onClick: JSX.IntrinsicElements['button']['onClick'] = doubleCheck
      ? undefined
      : e => {
          e.preventDefault()
          setDoubleCheck(true)
        }

    return {
      ...props,
      onBlur: callAll(onBlur, props?.onBlur),
      onClick: callAll(onClick, props?.onClick),
    }
  }

  return {doubleCheck, getButtonProps}
}

export {
  getAvatar,
  getAvatarForUser,
  AnchorOrLink,
  getErrorMessage,
  getErrorStack,
  getNonNull,
  assertNonNull,
  useUpdateQueryStringValueWithoutNavigation,
  useSSRLayoutEffect,
  useDoubleCheck,
  useDebounce,
  typedBoolean,
  getRequiredServerEnvVar,
  getRequiredGlobalEnvVar,
  getDomainUrl,
  getUrl,
  getDisplayUrl,
  toBase64,
  removeTrailingSlash,
  reuseUsefulLoaderHeaders,

  formatDate,
  formatTime,
  formatNumber,
  formatAbbreviatedNumber,
}
export {listify} from './listify'
