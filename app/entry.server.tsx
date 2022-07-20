import * as React from 'react'

import ReactDOMServer from 'react-dom/server'
import { RemixServer as Remix } from "@remix-run/react";
import type { EntryContext } from '@remix-run/node';
import {getEnv} from './utils/env.server'

if (process.env.NODE_ENV === 'development') {
  try {
    require('./refresh.ignored')
  } catch {
    // ignore
  }
}

global.ENV = getEnv()


export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {

  
  const markup = ReactDOMServer.renderToString(
    <Remix context={remixContext} url={request.url} />,
  )

  if (process.env.NODE_ENV !== 'production') {
    responseHeaders.set('Cache-Control', 'no-store')
  }

  const html = `<!DOCTYPE html>${markup}`

  responseHeaders.set('Content-Type', 'text/html')
  responseHeaders.set('Content-Length', String(Buffer.byteLength(html)))

  return new Response(html, {
    status: responseStatusCode,
    headers: responseHeaders,
  })
}