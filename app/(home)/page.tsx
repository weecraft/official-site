import * as React from 'react'
import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '~/shared-metadata'
import { HeroSection } from './hero'
import { ProjectSection } from './projects'

export const metadata: Metadata = {
  title: 'Weecraft',
  description: 'Tiny resources for better experience on code',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'Weecraft',
    description: 'Tiny resources for better experience on code',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title: 'Weecraft',
    description: 'Tiny resources for better experience on code',
  },
}

export default function HomePage(): React.ReactElement {
  return (
    <div className="px-5 laptop:px-0 container mx-auto">
      <HeroSection />
      <ProjectSection />
    </div>
  )
}
