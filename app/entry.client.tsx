import './bootstrap.client'
import * as React from 'react'
import { hydrate } from "react-dom";
import { RemixBrowser } from '@remix-run/react';

hydrate(<RemixBrowser />, document);
