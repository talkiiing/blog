import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

export default function AuthorLayout({ children, frontMatter }) {
  const {
    name,
    avatar,
    occupation,
    nickname,
    email,
    twitter,
    linkedin,
    github,
    telegram,
    instagram,
  } = frontMatter

  return (
    <>
      <div className="items-start space-y-2 pb-4 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center pt-8 space-x-2">
          <Image
            src={avatar}
            alt="avatar"
            width="120px"
            height="120px"
            className="w-24 h-24 rounded-full"
          />
          <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
          <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
          <div className="text-gray-500 dark:text-gray-400">@{nickname}</div>
          <div className="flex pt-3 space-x-3">
            <SocialIcon kind="mail" href={`mailto:${email}`} />
            <SocialIcon kind="github" href={github} />
            <SocialIcon kind="linkedin" href={linkedin} />
            <SocialIcon kind="twitter" href={twitter} />
            <SocialIcon kind="telegram" href={telegram} />
            <SocialIcon kind="instagram" href={instagram} />
          </div>
        </div>
        <div className="pt-8 pb-4 prose dark:prose-dark text-justify max-w-none xl:col-span-2">
          {children}
        </div>
      </div>
    </>
  )
}
