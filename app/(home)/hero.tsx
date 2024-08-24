import * as React from 'react'

export function HeroSection(): React.ReactElement {
  return (
    <section className="flex flex-col w-full tablet:w-10/12 laptop:w-7/12 mx-auto pt-20 pb-10 laptop:pt-36 laptop:pb-20 gap-10">
      <h2 className="text-2xl laptop:text-3xl font-medium !leading-normal">
        <span className="text-foreground/60">Hello'</span>
        <br />
        "Tiny resources for better experience on code"
      </h2>

      <h2 className="text-2xl laptop:text-3xl font-medium !leading-normal">
        We start from{' '}
        <span className="text-fuchsia-600 cursor-pointer">research</span>,
        <span className="text-orange-600 cursor-pointer"> design</span>, and{' '}
        <span className="text-blue-600 cursor-pointer"> develop</span> small
        projects, templates, utility, and helper for long way journey.
      </h2>
    </section>
  )
}
