import * as React from 'react'
import {Link, useSearchParams} from 'remix'
import {getImgProps, images} from '~/images'
import {H2, H3} from '../typography'
import {ArrowLink} from '../arrow-button'
import {Grid} from '../grid'

function IntroductionSection() {
  const [searchParams] = useSearchParams()
  return (
    <Grid>
      <div className="col-span-full lg:col-span-4">
        
      </div>
      <div className="col-span-full mt-12 lg:col-span-6 lg:col-start-6 lg:mt-0">
        <H2 id="intro">
          {`Hi, I'm Sunil Samuel. I help people make the world better through quality software.`}
        </H2>
        <H3 variant="secondary" as="p" className="mt-12">
          {`
            I'm also a big extreme sports enthusiast. When I'm not hanging out
            with my family or at the computer you can find me cruising around on
            my onewheel or hitting the slopes on my snowboard when it's cold.
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
