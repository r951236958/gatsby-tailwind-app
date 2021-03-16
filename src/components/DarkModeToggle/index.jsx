import { ThemeToggler } from "gatsby-plugin-dark-mode"
import React from "react"

export default function DarkModeToggle() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <>
          <div className="dark-button ">
            <input
              className="hidden border rounded-md border-gray-4"
              id="theme-toggle"
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
            />
            <label
              className="relative block overflow-hidden rounded-full p-2 bg-transparent border border-gray-400 cursor-pointer"
              htmlFor="theme-toggle"
            >
              {theme === "dark" ? (
                <svg
                  className="w-6 h-6 text-yellow-400 stroke-current stroke-2"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 stroke-current stroke-2 text-cyan-400"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </label>
          </div>
        </>
      )}
    </ThemeToggler>
  )
}
