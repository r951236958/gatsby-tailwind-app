import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const ThemeSwitch = () => {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div
            className="flex items-center justify-center rounded-full shadow-inner"
            style={{
              backgroundColor:
                theme === 'dark' ? `rgb(15, 16, 51)` : `rgb(99, 195, 243)`,
            }}
          >
            <input
              className="hidden"
              id="darkModeToggle"
              type="checkbox"
              onChange={(e) => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />
            <label
              className={`block relative w-16 overflow-hidden rounded-full cursor-pointer `}
              htmlFor="darkModeToggle"
            >
              {theme === 'dark' ? (
                <svg
                  className="text-gray-100 transition duration-500 transform stroke-current stroke-2 w-7 h-7 translate-x-9"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              ) : (
                <svg
                  className="text-yellow-300 transition duration-500 transform translate-x-1 stroke-current stroke-2 w-7 h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              )}
            </label>
          </div>
        )}
      </ThemeToggler>
    )
}

export default ThemeSwitch
