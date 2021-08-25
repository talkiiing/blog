import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import { socialIcons } from '@/components/social-icons'

const TwitterIcon = socialIcons['twitter']
const GitHubIcon = socialIcons['github']

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/blog/${slug}`
  )}`

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { slug, fileName, date, title, tags } = frontMatter

  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-2 xl:pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Опубликован</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div
            className="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <dl className="pt-6 pb-6 xl:pb-10 xl:pt-11 xl:border-b xl:border-gray-200 xl:dark:border-gray-700">
              <dd className="flex flex-col items-center xl:items-start">
                <span className="text-lg xl:text-xl font-bold xl:pl-2 -mt-2" key={'authors_title'}>
                  Автор{(authorDetails.length > 1 && 'ы ') || ' '}статьи
                </span>
                <ul className="flex justify-center mt-4 xl:mt-6 space-x-4 xl:block sm:space-x-12 xl:space-x-0 xl:space-y-8 xl:pl-2">
                  {authorDetails.map((author) => (
                    <li className="flex items-center space-x-2" key={author.name}>
                      {author.avatar && (
                        <Image
                          src={author.avatar}
                          width="38px"
                          height="38px"
                          alt="avatar"
                          className="w-10 h-10 rounded-full"
                        />
                      )}
                      <dl className="text-sm font-medium leading-5 whitespace-nowrap">
                        <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd>
                        <dd>
                          {author.twitter ? (
                            <Link
                              href={author.twitter}
                              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            >
                              {author.twitter.replace('https://twitter.com/', '@')}
                            </Link>
                          ) : (
                            author.instagram && (
                              <Link
                                href={author.instagram}
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                              >
                                {author.instagram.replace('https://instagram.com/', '@')}
                              </Link>
                            )
                          )}
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2">
              <div className="pt-10 pb-8 text-justify prose dark:prose-dark max-w-none">
                {children}
              </div>
              <div className="pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300 flex space-x-3">
                <Link
                  href={discussUrl(slug)}
                  rel="nofollow"
                  className="group flex space-x-4 xl:space-x-2 hover:text-blue-500 dark:hover:text-blue-400 "
                >
                  <TwitterIcon
                    className={`fill-current text-gray-700 dark:text-gray-200 group-hover:text-blue-500 dark:group-hover:text-blue-400 
                    h-10 w-10 xl:h-4 xl:w-4`}
                  />
                  <span>Упоминания в Твиттере</span>
                </Link>
                <span>{` • `}</span>
                <Link
                  href={editUrl(fileName)}
                  className="group flex space-x-4 xl:space-x-2 hover:text-blue-500 dark:hover:text-blue-400 "
                >
                  <span>Статья на Гитхаб</span>
                  <GitHubIcon
                    className={`fill-current text-gray-700 dark:text-gray-200 group-hover:text-blue-500 dark:group-hover:text-blue-400 
                    h-10 w-10 xl:h-4 xl:w-4`}
                  />
                </Link>
              </div>
              <Comments frontMatter={frontMatter} />
            </div>
            <footer>
              <div className="text-sm font-medium pl-2 leading-5 divide-gray-200 xl:divide-y dark:divide-gray-700 xl:col-start-1 xl:row-start-2">
                {tags && (
                  <div className="py-4 xl:py-8">
                    <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                      Теги в статье
                    </h2>
                    <div className="flex flex-wrap mt-2">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {(next || prev) && (
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    {prev && (
                      <div>
                        <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                          Предыдущая статья
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div>
                        <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                          Следующая статья
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/blog/${next.slug}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="pt-4 xl:pt-8">
                <Link
                  href="/blog"
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  &larr; Назад
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
