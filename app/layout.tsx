import * as React from 'react'
import type { Metadata } from 'next'
import '~/globals.css'
import { config } from '~/lib/config'
import { dmMonoFont, dmSansFont } from '~/fonts'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '~/components/theme-provider'
import { AnimationProvider } from '~/components/animation-provider'
import Header from '~/components/header'
import { Toaster } from '~/components/ui/toast'
import Footer from '~/components/footer'

interface RootLayoutProps {
  children: React.ReactNode
}

// default metadata for the site
export const metadata: Metadata = {
  applicationName: 'Weecraft',
  keywords: ['Resources', 'UI UX Library', 'Themes', 'Utils', 'Helper'],
  authors: [{ name: 'Weecraft' }],
  publisher: 'Weecraft',
  creator: 'Weecraft',
  metadataBase: new URL(config.app.host),
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>): React.ReactElement {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSansFont.variable} ${dmMonoFont.variable}`}
    >
      <body className={''}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <AnimationProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <Toaster />
          </AnimationProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
