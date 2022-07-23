import * as React from 'react'
import {externalLinks} from '../external-links'
import {AnchorOrLink} from '~/utils/misc'

import {H4, H6} from './typography'
import {GithubIcon} from './icons/github-icon'
import {TwitterIcon} from './icons/twitter-icon'
import {Signature} from './signature'

import type {ImageBuilder} from '~/images'
import {getImgProps} from '~/images'
import {IconLink} from './icon-link'


function ContactSection() {
  return (
    <div>
      <H6 as="div">Contact</H6>
      <ul className="mt-4">
        <FooterLink name="Email Sammy" href="/contact" />
      </ul>
    </div>
  )
}
function GeneralSection() {
  return (
    <div>
      <H6 as="div">General</H6>
      <ul className="mt-4">
        <FooterLink name="My Mission" href="/transparency" />
        <FooterLink name="Privacy policy" href="/transparency#privacy" />
        <FooterLink name="Terms of use" href="/transparency#terms" />
        <FooterLink name="Code of conduct" href="/conduct" />
      </ul>
    </div>
  )
}

function SitemapSection() {
  return (
    <div>
      <H6 as="div">Sitemap</H6>
      <ul className="mt-4">
        <FooterLink name="Home" href="/" />
        <FooterLink name="Blog" href="/blog" />
        <FooterLink name="Courses" href="/courses" />
        <FooterLink name="Mentorship" href="/mentorship" />
        <FooterLink name="Talks" href="/talks" />
        <FooterLink name="About" href="/about" />
        <FooterLink name="Sitemap.xml" reload href="/sitemap.xml" />
      </ul>
    </div>
  )
}

function AboutSection() {
  return (
    <div>
      <H4 as="div">Sunil Samuel</H4> <H6 as="div"> a.k.a. Sammy</H6>

      <p className="text-secondary mt-6 max-w-md text-xl">
        Engineering Manager and Mentor
      </p>

      <div className="text-secondary mt-6 flex items-center justify-between gap-4 xl:flex-col xl:items-start">
        <div className="flex gap-4">
          <IconLink href={externalLinks.github}>
            <GithubIcon size={32} />
          </IconLink>

          <IconLink href={externalLinks.twitter}>
            <TwitterIcon size={32} />
          </IconLink>

        </div>

        <div className="text-secondary relative flex w-24 items-center xl:mt-20 xl:w-32">
       
          <Signature className="absolute block w-full" />
        </div>
      </div>
    </div>
  )
}

function FooterLink({
  name,
  href,
  reload,
}: {
  name: string
  href: string
  reload?: boolean
}) {
  return (
    <li className="py-1">
      <AnchorOrLink
        prefetch={href.startsWith('http') ? undefined : 'intent'}
        href={href}
        className="text-secondary underlined focus:outline-none inline-block whitespace-nowrap text-lg hover:text-team-current focus:text-team-current"
        reload={reload}
      >
        {name}
      </AnchorOrLink>
    </li>
  )
}

function Footer() {
 
  return (
    <footer className="border-t border-gray-200 pb-16 pt-48 dark:border-gray-600">
      <div className="relative mx-10vw">
        <div className="relative mx-auto grid max-w-7xl grid-cols-4 grid-rows-max-content gap-x-4 md:grid-cols-8 xl:grid-cols-12 xl:gap-x-6">
          <div className="col-span-full md:col-span-3 xl:row-span-2">
            <AboutSection />
          </div>


          <div className="col-span-2 mt-20 md:col-start-5 md:row-start-1 md:mt-0">
            <ContactSection />
          </div>

          <div className="col-span-2 mt-20 md:col-start-7 md:row-start-1 md:mt-0 xl:col-start-5 xl:row-start-2 xl:mt-16">
            <GeneralSection />
          </div>

          <div className="col-span-full mt-20 md:col-span-2 md:col-start-7 xl:col-start-5 xl:row-span-2 xl:row-start-1 xl:ml-56 xl:mt-0">
            <SitemapSection />
          </div>

        

          <div className="col-span-full mt-24 text-lg text-gray-500 dark:text-blueGray-500 md:mt-44">
            <span>All rights reserved</span>{' '}
            <span className="block md:inline">{`© WithSammy ${new Date().getFullYear()}`}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export {Footer}
