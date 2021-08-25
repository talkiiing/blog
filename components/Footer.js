import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { useAmp } from 'next/amp'
import Tag from '@/components/Tag'

export default function Footer() {
  const isAmp = useAmp()
  return (
    <footer>
      <div className="flex flex-col items-center mt-16">
        {!isAmp && (
          <>
            <div className="mb-3">
              <Link
                className="text-sm font-medium cursor-pointer text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                href="/tags"
              >
                Статьи по тегам
              </Link>
            </div>
            <div className="flex mb-2 space-x-4">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
              <SocialIcon kind="github" href={siteMetadata.github} />
              <SocialIcon kind="facebook" href={siteMetadata.facebook} />
              <SocialIcon kind="youtube" href={siteMetadata.youtube} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} />
            </div>
            <div className="flex mt-1 mb-8 space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <Link href="https://talkiiing.ru">
                <div>{siteMetadata.author}</div>
              </Link>
              <div>{` • `}</div>
              <div>{`© ${new Date().getFullYear()}`}</div>
            </div>
          </>
        )}
      </div>
    </footer>
  )
}
