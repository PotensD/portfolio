'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from '~/icons/Logo'

const menuItems = [
  {
    name: 'Home',
    href: '/',
  },
  // {
  //   name: 'My resume',
  //   href: '/my-resume',
  // },
  {
    name: 'Blog',
    href: '/posts',
  },
] as const

export default function Header({ className }: { className?: string }) {
  const pathname = usePathname()

  return (
    <header className={`${className}`}>
      <nav className='flex flex-wrap items-center justify-between gap-8'>
        <Link href='/' className='hidden lg:inline'>
          <Logo className='h-10 w-auto' />
        </Link>

        <ul className='flex flex-1 items-center justify-center gap-6 lg:justify-end '>
          {menuItems.map((item, i) => (
            <li key={i}>
              <Link
                href={item.href}
                className={`${
                  pathname === item.href
                    ? 'text-sky-400'
                    : 'hover:text-slate-200'
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
