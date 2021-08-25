import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import { useMemo } from 'react'
import { PageSEO } from '@/components/SEO'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const talk = await getFileBySlug('authors', ['talkenson'])
  const roam = await getFileBySlug('authors', ['roamiiing'])
  return { props: { details: [talk, roam] } }
}

export default function About({ details }) {
  return (
    <>
      <PageSEO
        title={`О команде /talkiiing`}
        description={`/talkiiing - @roamiiing (Виталий Лёвкин) & @talkenson (Виталий Шаталов)`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-4 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Команда
          </h1>
        </div>
        <div className={'divide-y divide-dashed dark:divide-gray-700 divide-gray-300'}>
          {details.map((v, i) => (
            <MDXLayoutRenderer
              key={i}
              layout={v.frontMatter.layout || DEFAULT_LAYOUT}
              mdxSource={v.mdxSource}
              frontMatter={v.frontMatter}
            />
          ))}
        </div>
      </div>
    </>
  )
}
