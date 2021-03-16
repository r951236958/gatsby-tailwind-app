import { ThemeToggler } from "gatsby-plugin-dark-mode"
import React from "react"
import useDarkMode from "use-dark-mode"
import Toggle from "../Toggle"

export default function DarkModeToggle() {
  const darkMode = useDarkMode(false)

  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <>
          <div className="dark-mode-toggle">
            <button type="button" onClick={darkMode.disable}>
              <svg
                className="w-8 h-8 stroke-current stroke-2 md:w-10 md:h-10"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </button>
            <Toggle
              checked={theme === "dark"}
              onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
            />
            <button type="button" onClick={darkMode.enable}>
              <svg
                className="w-8 h-8 stroke-current stroke-2 md:w-10 md:h-10"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </button>
          </div>
        </>
      )}
    </ThemeToggler>
  )
}
