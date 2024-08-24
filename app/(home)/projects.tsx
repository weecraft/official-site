import Link from 'next/link'
import * as React from 'react'

interface Project {
  icon: string
  title: string
  publisher: string
  description: string
  href: string
}

interface ProjectItemProps {
  project: Project
}

const projects: Project[] = [
  {
    icon: '🛼',
    title: 'Blaze theme',
    publisher: 'github.com',
    description:
      'Modern, minimal visual studio code theme for better experience code. Enjoy the simplicity and less distraction',
    href: 'https://github.com/weecraft/blaze-theme',
  },
  {
    icon: '⛺️',
    title: 'Boola theme',
    publisher: 'github.com',
    description:
      'The ultimate dark and light vscode theme. Combine the best vscode theme to support your coding workflows',
    href: 'https://github.com/weecraft/boola',
  },
  {
    icon: '💎',
    title: 'Hono helper',
    publisher: 'github.com',
    description:
      'The utility helper to honojs that contain hooks, functions, api',
    href: 'https://github.com/weecraft/hono-helper',
  },
  {
    icon: '💖',
    title: 'Nestjs fauna',
    publisher: 'github.com',
    description:
      'The ultimate Fauna DB Module for NestJs. Support the main fauna db function and type checking',
    href: 'https://github.com/weecraft/nestjs-fauna',
  },
  {
    icon: '🚜',
    title: 'Nestjs resend',
    publisher: 'github.com',
    description: 'NestJS provider for sending emails with resend',
    href: 'https://github.com/weecraft/nestjs-resend',
  },
]

export function ProjectItem({ project }: ProjectItemProps): React.ReactElement {
  const { icon, title, publisher, description, href } = project

  return (
    <Link
      href={href}
      target="_blank"
      className="flex bg-ambient border border-border rounded-2xl p-3 gap-2 relative group transition-all duration-300 hover:scale-95"
    >
      <div className="flex justify-center items-center h-12 w-12 rounded-xl bg-secondary/35">
        {icon}
      </div>

      <div className="flex flex-col flex-1">
        <span className="font-medium">{title}</span>
        <span className="text-sm text-orange-600">{publisher}</span>
        <p className="text-sm text-foreground/60 mt-3">{description}</p>
      </div>

      <div className="flex justify-center items-center absolute h-6 w-6 rounded-lg border border-border bg-ambient right-3 top-3 opacity-0 group-hover:opacity-100 transition-all duration-200">
        <i className="fi fi-rr-arrow-small-right -rotate-45" />
      </div>
    </Link>
  )
}

export function ProjectSection(): React.ReactElement {
  return (
    <section className="flex flex-col w-full tablet:w-10/12 laptop:w-7/12 mx-auto pt-0 pb-20 laptop:pt-0 laptop:pb-36">
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-3">
        {projects.map((project, index) => (
          <ProjectItem project={project} key={index} />
        ))}
      </div>
    </section>
  )
}
