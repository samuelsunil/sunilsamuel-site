import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "remix";
import type {LinksFunction, MetaFunction, HeadersFunction} from "remix";
import {ErrorPage} from './components/errors'
import type {Await, SVSHandle, User} from '~/types'
import {ArrowLink} from './components/arrow-button'

export const handle: SVSHandle & {id: string} = {
  id: 'root',
}

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
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