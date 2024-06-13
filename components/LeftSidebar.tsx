'use client'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

type Props = {}

export const LeftSidebar = (props: Props) => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <section className=" left_sidebar">
      <nav className=" flex flex-col gap-6">
        <Link
          href={'/'}
          className=" flex cursor-pointer items-center gap-2 pb-10 max-lg:justify-center"
        >
          <Image src={'/icons/logo.svg'} alt="Logo" width={23} height={27} />
          <h1 className=" text-24 font-extrabold text-white-1 max-lg:hidden">
            Podcaster
          </h1>
        </Link>
        {sidebarLinks.map(({ route, label, imgURL }) => {
          const isActive =
            pathname === route || pathname.startsWith(`${route}/`)
          return (
            <Link
              href={route}
              key={label}
              className={cn(
                ' flex items-center py-4 gap-3 max-lg:px-4 justify-center lg:justify-start',
                {
                  'bg-nav-focus border-r-4 border-orange-1': isActive
                }
              )}
            >
              <Image src={imgURL} alt={label} width={24} height={24} />
              <p>{label}</p>
            </Link>
          )
        })}
      </nav>
    </section>
  )
}
