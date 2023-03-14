'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'My resume',
    href: '/my-resume',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
]

export default function Header({ className }: { className?: string }) {
  const pathname = usePathname()

  return (
    <header className={`${className}`}>
      <nav>
        <ul className='flex items-center justify-center gap-6 lg:justify-end '>
          {menuItems.map((item, i) => (
            <li key={i}>
              <Link
                href={item.href}
                className={`${pathname === item.href ? 'text-sky-400' : ''}`}
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
