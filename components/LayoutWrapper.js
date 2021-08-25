import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { useAmp } from 'next/amp'

const LayoutWrapper = ({ children }) => {
  const isAmp = useAmp()
  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <header className="flex items-center justify-between py-6 px-3 xl:px-0">
          <div className="flex flex-row items-center">
            <Link href="/" aria-label="/talkiiing">
              <div className="flex items-center justify-between">
                <div className="">
                  <Logo />
                </div>
              </div>
            </Link>
          </div>
          {!isAmp && (
            <div className="flex items-center text-base leading-5">
              <div className="hidden md:block">
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <ThemeSwitch />
              <MobileNav />
            </div>
          )}
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
