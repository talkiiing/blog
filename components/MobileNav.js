import { useState } from 'react'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/outline'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="w-8 h-8 p-1 ml-1 mr-1 rounded focus:outline-none"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        {navShow ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
      </button>
      <div
        className={`fixed w-screen h-screen top-24 right-0 bg-gray-200 dark:bg-gray-800 z-10 transform ease-in-out duration-300 ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          type="button"
          aria-label="toggle modal"
          className="fixed w-full h-full cursor-auto focus:outline-none"
          onClick={onToggleNav}
        ></button>
        <nav className="fixed h-full mt-8">
          {headerNavLinks.map((link) => (
            <div key={link.title} className="px-6 py-4">
              <Link
                href={link.href}
                className="flex space-x-2 items-center text-xl font-normal tracking-widest text-gray-900 dark:text-gray-100 hover:text-primary-500 focus:text-primary-500"
                onClick={onToggleNav}
              >
                <ChevronRightIcon className="w-6 h-6" />
                <span>{link.title}</span>
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default MobileNav
