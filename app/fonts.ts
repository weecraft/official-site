import { DM_Sans, DM_Mono } from 'next/font/google'

export const dmSansFont = DM_Sans({
  display: 'swap',
  variable: '--font-dm-sans',
  subsets: ['latin'],
})

export const dmMonoFont = DM_Mono({
  display: 'swap',
  variable: '--font-dm-mono',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
})
