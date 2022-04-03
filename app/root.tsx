import * as React from 'react'
import {
  Links,
  LiveReload,
  LoaderFunction,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useCatch,
  useLocation,
  json
} from "remix";
import {
  getDisplayUrl,
  getDomainUrl,
  getUrl,
  removeTrailingSlash,
} from './utils/misc'
import {Spacer} from './components/spacer'
import type {LinksFunction, MetaFunction} from "remix";
import clsx from 'clsx'
import {
  useTheme,
  ThemeProvider,
  // NonFlashOfWrongThemeEls,
  Theme,
} from './utils/theme-provider'
import {getEnv} from './utils/env.server'
import tailwindStyles from '~/styles/tailwind.css'
import vendorStyles from '~/styles/vendors.css'
import appStyles from '~/styles/app.css'
import proseStyles from '~/styles/prose.css'
// import noScriptStyles from './styles/no-script.css'
import {ErrorPage} from './components/errors'
import {Navbar} from './components/navbar'
import type { SVSHandle, } from '~/types'
import {ArrowLink} from './components/arrow-button'
import {getThemeSession} from './utils/theme.server'

export const handle: SVSHandle & {id: string} = {
  id: 'root',
}


export type LoaderData = {
 // user: User | null
  ENV: ReturnType<typeof getEnv>
  requestInfo: {
    origin: string
    path: string
    session: {
      email: string | undefined
      magicLinkVerified: boolean | undefined
      theme: Theme | null
    }
  }
}


export const meta: MetaFunction = ({data}) => {
  const requestInfo = (data as LoaderData | undefined)?.requestInfo
  const title = 'Sunil Samuel'
  const description =
    'Come check out how Sunil Samuel can help you level up your career as a Software Engineer.'
  return {
    viewport: 'width=device-width,initial-scale=1,viewport-fit=cover',
    'theme-color': '#A9ADC1',
  }
}




export const loader: LoaderFunction = async ({request}) => {
  // because this is called for every route, we'll do an early return for anything
  // that has a other route setup. The response will be handled there.
  // if (pathedRoutes[new URL(request.url).pathname]) {
  //   return new Response()
  // }

  //const timings: Timings = {}
  //const session = await getSession(request)
  const themeSession = await getThemeSession(request)
  //const clientSession = await getClientSession(request)
  //const loginInfoSession = await getLoginInfoSession(request)

  // const user = await time({
  //   name: 'getUser in root loader',
  //   type: 'postgres read',
  //   timings,
  //   fn: () => session.getUser(),
  // })

  // const randomFooterImageKeys = Object.keys(illustrationImages)
  // const randomFooterImageKey = randomFooterImageKeys[
  //   Math.floor(Math.random() * randomFooterImageKeys.length)
  // ] as keyof typeof illustrationImages
  const data: LoaderData = {
    // user,
    // userInfo: user
    //   ? await time({
    //       name: 'getUserInfo in root loader',
    //       type: 'convertkit and discord read',
    //       timings,
    //       fn: () => getUserInfo(user, {request, timings}),
    //     })
    //   : null,
    ENV: getEnv(),  
    requestInfo: {
      origin: getDomainUrl(request),
      path: new URL(request.url).pathname,
      session: {
         email: 'sunilvsamuel@gmail.com', //loginInfoSession.getEmail(),
         magicLinkVerified: undefined ,//loginInfoSession.getMagicLinkVerified(),
        theme: themeSession.getTheme(),
      },
    },
  }

  const headers: HeadersInit = new Headers()
  // headers.append('Server-Timing', getServerTimeHeader(timings))
  // this can lead to race conditions if a child route is also trying to commit
  // the cookie as well. This is a bug in remix that will hopefully be fixed.
  // we reduce the likelihood of a problem by only committing if the value is
  // different.
  // await session.getHeaders(headers)
  // await clientSession.getHeaders(headers)
  // await loginInfoSession.getHeaders(headers)

  return json(data, {headers})
}


export const links: LinksFunction = () => {
  return [
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/Matter-Medium.woff2',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/Matter-Regular.woff2',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/favicons/apple-touch-icon.png',
    },
    // {
    //   rel: 'icon',
    //   type: 'image/png',
    //   sizes: '32x32',
    //   href: '/favicons/favicon-32x32.png',
    // },
    // {
    //   rel: 'icon',
    //   type: 'image/png',
    //   sizes: '16x16',
    //   href: '/favicons/favicon-16x16.png',
    // },
    // {rel: 'manifest', href: '/site.webmanifest'},
    {rel: 'icon', href: '/favicon.ico'},
    {rel: 'stylesheet', href: vendorStyles},
    {rel: 'stylesheet', href: tailwindStyles},
    {rel: 'stylesheet', href: proseStyles},
    {rel: 'stylesheet', href: appStyles},
  ]
}



export  function App() {
  const [theme] = useTheme();

  return (
    <html lang="en"   className={clsx(theme, `set-color-team-current-blue`)} >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <script
          crossOrigin="anonymous"
          src="https://polyfill.io/v3/polyfill.min.js?features=Intl%2CIntl.ListFormat"
        />
      </head>
      <body className="dark:bg-gray-900 bg-dark transition duration-500">
        <Navbar />
        <Outlet />
        <Spacer size="base" />
        <ScrollRestoration />
        <Scripts />
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.ENV)};`,
          }}
        /> */}
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}



export default function AppWithProviders() {
  const data = useLoaderData<LoaderData>()
  
  return (
      <ThemeProvider specifiedTheme={data.requestInfo.session.theme}>
        <App />
      </ThemeProvider>
  )
}








// best effort, last ditch error boundary. This should only catch root errors
// all other errors should be caught by the index route which will include
// the footer and stuff, which is much better.
export function ErrorBoundary({error}: {error: Error}) {
  console.error(error)
  const location = useLocation()
  return (
    <html lang="en" className="dark">
      <head>
        <title>Oh no...</title>
        <Links />
      </head>
      <body className="dark:bg-gray-900 bg-white transition duration-500">
        <ErrorPage
          heroProps={{
            title: '500 - Oh no, something did not go well.',
            subtitle: `"${location.pathname}" is currently not working. So sorry.`,
            //image: <Grimmacing className="rounded-lg" aspectRatio="3:4" />,
            action: <ArrowLink href="/">Go home</ArrowLink>,
          }}
        />
        <Scripts />
      </body>
    </html>
  )
}




export function CatchBoundary() {
  const caught = useCatch()
  const location = useLocation()
  console.error('CatchBoundary', caught)
  if (caught.status === 404) {
    return (
      <html lang="en" className="dark">
        <head>
          <title>Oh no...</title>
          <Links />
        </head>
        <body className="dark:bg-gray-900 bg-white transition duration-500">
          <ErrorPage
            heroProps={{
              title: "404 - Oh no, you found a page that's missing stuff.",
              subtitle: `"${location.pathname}" is not a page on sunilvsamuel.com. So sorry.`,
             // image: (
           //     <MissingSomething className="rounded-lg" aspectRatio="3:4" />
            //  ),
              action: <ArrowLink href="/">Go home</ArrowLink>,
            }}
          />
          <Scripts />
        </body>
      </html>
    )
  }
  throw new Error(`Unhandled error: ${caught.status}`)
}