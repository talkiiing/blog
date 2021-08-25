import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { LightBulbIcon, MoonIcon } from '@heroicons/react/solid'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="w-8 h-8 p-1 ml-1 mr-1 rounded sm:ml-4 focus:outline-none"
      onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
        <MoonIcon className="w-6 h-6" />
      ) : (
        <LightBulbIcon className="w-6 h-6" />
      )}
    </button>
  )
}

export default ThemeSwitch
