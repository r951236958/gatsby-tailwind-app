import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const ThemeSwitch = () => {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div className="dark-button">
            <input
              className="shadow-inner"
              id="darkModeToggle"
              type="checkbox"
              onChange={(e) => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            <label htmlFor="darkModeToggle">
              
            </label>
          </div>
        )}
      </ThemeToggler>
    )
}

export default ThemeSwitch
