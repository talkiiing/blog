import Link from '@/components/Link'

export default function Pagination({ totalPages, currentPage }) {
  const prevPage = parseInt(currentPage) - 1 > 0
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages)

  return (
    <div className="mt-3 pt-3 pb-8 space-y-2 md:space-y-5 border-t dark:border-gray-700">
      <nav className="flex justify-between">
        {!prevPage && (
          <button rel="previous" className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Назад
          </button>
        )}
        {prevPage && (
          <Link href={currentPage - 1 === 1 ? `/blog/` : `/blog/page/${currentPage - 1}`}>
            <button rel="previous">Назад</button>
          </Link>
        )}
        <span>
          {currentPage} из {totalPages}
        </span>
        {!nextPage && (
          <button rel="next" className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Дальше
          </button>
        )}
        {nextPage && (
          <Link href={`/blog/page/${currentPage + 1}`}>
            <button rel="next">Дальше</button>
          </Link>
        )}
      </nav>
    </div>
  )
}
