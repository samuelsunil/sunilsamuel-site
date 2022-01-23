import * as React from 'react'
import {
  Links,
  LiveReload,
  LoaderFunction,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLocation,
} from "remix";
import {Spacer} from './components/spacer'
import type {LinksFunction, MetaFunction} from "remix";
import clsx from 'clsx'
import {
  useTheme,
  ThemeProvider,
  NonFlashOfWrongThemeEls,
  Theme,
} from './utils/theme-provider'
import tailwindStyles from '../styles/tailwind.css'
import vendorStyles from '../styles/vendors.css'
import appStyles from '../styles/app.css'
import proseStyles from '../styles/prose.css'
// import noScriptStyles from './styles/no-script.css'
import {ErrorPage} from './components/errors'
import type {Await, SVSHandle, User } from '~/types'
import {ArrowLink} from './components/arrow-button'

export const handle: SVSHandle & {id: string} = {
  id: 'root',
}
enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
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
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicons/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicons/favicon-16x16.png',
    },
    {rel: 'manifest', href: '/site.webmanifest'},
    {rel: 'icon', href: '/favicon.ico'},
    {rel: 'stylesheet', href: vendorStyles},
    {rel: 'stylesheet', href: tailwindStyles},
    {rel: 'stylesheet', href: proseStyles},
    {rel: 'stylesheet', href: appStyles},
  ]
}

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};


export  function App() {
  const [theme] = useTheme()
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
      <body className="dark:bg-gray-900 bg-white transition duration-500">
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
 // const data = useLoaderData<LoaderData>()
  return (
      <ThemeProvider specifiedTheme={Theme.DARK}>
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
              subtitle: `"${location.pathname}" is not a page on sunil-samuel.com. So sorry.`,
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