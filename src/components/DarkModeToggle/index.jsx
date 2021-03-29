import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import React from 'react'
import MoonStarIcon from './MoonStarIcon'
import SunIcon from './SunIcon'
// import useDarkMode from 'use-dark-mode'

export default function DarkToggle() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <>
          <div className="box-border dark-toggle">
            <label
              className={`relative block p-1 overflow-hidden transition duration-500 ease-in-out scale-x-50 bg-transparent rounded-full cursor-pointer checked:transform checked:scale-x-100 ${
                theme === 'dark' ? `bg-blue-300` : `bg-gray-800`
              }`}
              htmlFor="theme-toggle"
            >
              <input
                className="hidden w-10 h-10 rounded-md outline-none"
                id="theme-toggle"
                type="checkbox"
                onChange={(e) =>
                  toggleTheme(e.target.checked ? 'dark' : 'light')
                }
                checked={theme === 'dark'}
              />
              {theme === 'dark' ? (
                <SunIcon className="w-6 h-6 p-1 text-yellow-400 hover:text-yellow-300" />
              ) : (
                <MoonStarIcon className="w-6 h-6 p-1 text-white hover:text-gray-100" />
              )}
            </label>
          </div>
        </>
      )}
    </ThemeToggler>
  )
}
