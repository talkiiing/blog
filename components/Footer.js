import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { useAmp } from 'next/amp'

export default function Footer() {
  const isAmp = useAmp()
  return (
    <footer>
      <div className="flex flex-col items-center mt-16">
        {!isAmp && (
          <>
            <div className="flex mb-3 space-x-4">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
              <SocialIcon kind="github" href={siteMetadata.github} size="6" />
              <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
              <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
            </div>

            <div className="flex pt-2 mb-8 space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <a href="https://talkiiing.ru">
                <div>{siteMetadata.author}</div>
              </a>
              <div>{` • `}</div>
              <div>{`© ${new Date().getFullYear()}`}</div>
            </div>
          </>
        )}
      </div>
    </footer>
  )
}
