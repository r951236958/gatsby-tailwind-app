import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'


export default function DarkModeToggle() {
  
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <label htmlFor="theme-toggle">
          <input
            id="theme-toggle"
            type="checkbox"
            onChange={(e) => toggleTheme(e.target.checked ? 'dark' : 'light')}
            checked={theme === 'dark'}
          />{' '}Switch Dark Mode
        </label>
      )}
    </ThemeToggler>
  )
}
