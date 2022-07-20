import * as React from 'react'
import {Link, useSearchParams} from '@remix-run/react'
import {getImgProps, images} from '~/images'
import {H2, H3} from '../typography'
import {ArrowLink} from '../arrow-button'
import {Grid} from '../grid'

function IntroductionSection() {
  const [searchParams] = useSearchParams()
  return (
    <Grid>
      <div className="col-span-full lg:col-span-4" />
      <div className="col-span-full mt-12 lg:col-span-6 lg:col-start-6 lg:mt-0">
        <H2 id="intro">
          {`Hi, I'm Sunil Samuel. My friends call me Sammy. I am currently an Engineering Leader at Walmart. In addition, I help people realise their full potential and contribute to a more positive future for all of us.`}
        </H2>
        <H3 variant="secondary" as="p" className="mt-12">
          {`
            I'm also a wildlife and travel photographer. When I'm not at the computer you can find me hanging out with my family or reading a book or just traveling
          `}
        </H3>
        <ArrowLink
          to="/about"
          direction="right"
          className="mt-20"
          prefetch="intent"
        >
          Learn more about me
        </ArrowLink>
      </div>
    </Grid>
  )
}

export {IntroductionSection}
