import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

export default function DarkModeToggle() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <>
          <label htmlFor="theme-toggle">
            <input
              id="theme-toggle"
              type="checkbox"
              onChange={(e) => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            Switch Dark Mode
          </label>
          <button
            className="flex items-center w-20 h-10 transition duration-300 bg-white rounded-full shadow focus:outline-none"
            onClick="toggleTheme()"
          >
            <div
              id="switch-toggle"
              className="relative w-12 h-12 p-1 text-white transition duration-500 transform -translate-x-2 bg-yellow-500 rounded-full"
            >
              <svg
                className="w-8 h-8 stroke-current stroke-2 md:w-10 md:h-10"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
          </button>

          <button
            className="flex items-center w-20 h-10 transition duration-300 bg-white rounded-full shadow focus:outline-none"
            onClick="toggleTheme()"
          >
            <div
              id="switch-toggle"
              className="relative w-12 h-12 p-1 text-white transition duration-500 transform translate-x-full bg-gray-700 rounded-full"
            >
              <svg
                className="w-8 h-8 stroke-current stroke-2 md:w-10 md:h-10"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </div>
          </button>
          <svg
            className="w-8 h-8 stroke-current stroke-2 md:w-10 md:h-10"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </>
      )}
    </ThemeToggler>
  )
}
