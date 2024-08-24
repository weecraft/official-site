'use client'

import * as React from 'react'
import Link from 'next/link'
import { Button } from '~/components/ui/button'
import { toast } from '~/components/ui/toast'

interface Contact {
  label: string
  href: string
}

interface PillItemProps {
  contact: Contact
  children: React.ReactNode
}

const contacts: Contact[] = [
  { label: 'Send Me Email', href: 'nyomansunima@gmail.com' },
  { label: 'Github', href: 'https://github.com/weecraft' },
  { label: 'Dribbble', href: 'https://dribbble.com/nyomansunima' },
  { label: 'Layers', href: 'https://layers.to/nyomansunima' },
  { label: 'Twitter', href: 'https://twitter.com/nyomansunima' },
  { label: 'Instagram', href: 'https://instagram.com/nyomansunima' },
  { label: 'Facebook', href: 'https://facebook.com/nyomansunima' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/nyomansunima' },
]

function PillItem({ contact, children }: PillItemProps): React.ReactElement {
  const { href } = contact
  const isEmail = href.includes('@')

  function copyEmailToClipboard(): void {
    const email = href
    navigator.clipboard
      .writeText(email)
      .then(() => {
        toast('Nice, email copied')
      })
      .catch(() => {
        toast('Opps, something wrong')
      })
  }

  return isEmail ? (
    <Button
      variant={'outline'}
      size={'lg'}
      className="h-16 px-7 transition-all duration-500 hover:scale-95 bg-ambient hover:bg-ambient"
      onClick={copyEmailToClipboard}
    >
      {children}
    </Button>
  ) : (
    <Button
      asChild
      variant={'outline'}
      size={'lg'}
      className="h-16 px-7 transition-all duration-500 hover:scale-95 bg-ambient hover:bg-ambient"
    >
      <Link href={href} target="_blank">
        {children}
      </Link>
    </Button>
  )
}

export function ContactList(): React.ReactElement {
  return (
    <div className="flex flex-wrap justify-center items-center mt-16 gap-3 tablet:w-10/12 laptop:w-6/12">
      {contacts.map((con, index) => (
        <PillItem contact={con} key={index}>
          {con.label}
        </PillItem>
      ))}
    </div>
  )
}
