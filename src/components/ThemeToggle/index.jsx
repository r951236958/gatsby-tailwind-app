import React, { useEffect, useState } from 'react'
import MoonStarIcon from './MoonStarIcon'
import SunIcon from './SunIcon'
// import "./ThemeToggle.css";
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

// const updateTheme = (isDarkEnabled) => {
//   // Get CSS variables for background/foreground
//   const styles = getComputedStyle(document.body)
//   // const black = styles.getPropertyValue("--black");
//   // const white = styles.getPropertyValue("--white");
//   const darkbg = styles.getPropertyValue('--dark')
//   const bluebg = styles.getPropertyValue('--blue')
//   const docEl = document.documentElement

//   if (isDarkEnabled) {
//     docEl.style.setProperty('--background', darkbg)
//     docEl.style.setProperty('--foreground', bluebg)
//     document.querySelector('html').classList.add('darkmode')
//   } else {
//     docEl.style.setProperty('--background', bluebg)
//     docEl.style.setProperty('--foreground', darkbg)
//     document.querySelector('html').classList.remove('darkmode')
//   }
// }

function switchTheme(isDarkmode) {
  if (isDarkmode) {
    document
      .querySelector('#switch-toggle')
      .classList.remove('bg-gray-100', '-translate-x-2')
    document
      .querySelector('#switch-toggle')
      .classList.add('bg-gray-700', 'translate-x-full')
  } else {
    document
      .querySelector('#switch-toggle')
      .classList.add('bg-gray-100', '-translate-x-2')
    document
      .querySelector('#switch-toggle')
      .classList.remove('bg-gray-700', 'translate-x-full')
  }
}

const ThemeToggle = () => {
  const [isEnabled, setIsEnabled] = useState(false)

  const [isDarkmode, setIsDarkmode] = useState(false)

  // useEffect(() => {
  //   updateTheme(isEnabled)
  // }, [isEnabled])

  useEffect(() => {
    switchTheme(isDarkmode)
  }, [isDarkmode])

  const toggleState = () => {
    setIsEnabled((prevState) => !prevState)
    setIsDarkmode((prevState) => !prevState)
    localStorage.setItem('isDarkmode', isDarkmode)
  }

  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div id="themeToggle">
          <label
            htmlFor="toggle"
            className="box-border flex items-center w-20 h-10 transition duration-300 bg-gray-100"
          >
            <div className={`toggle ${isEnabled ? 'enabled' : 'disabled'}`}>
              <span className="hidden toggle-msg">
                {isEnabled ? 'Enable Light Mode' : 'Enable Dark Mode'}
              </span>

              <div
                id="switch-toggle"
                className="relative w-6 h-6 p-1 transition duration-500 transform -translate-x-2 bg-gray-100 rounded-full"
              >
                {isDarkmode ? <MoonStarIcon /> : <SunIcon />}
              </div>

              <input
                className="hidden"
                id="toggle"
                name="toggle"
                type="checkbox"
                checked={(theme === 'dark', isEnabled)}
                onChange={
                  ((e) => toggleTheme(e.target.checked ? 'dark' : 'light'),
                  toggleState)
                }
              />
            </div>
          </label>
        </div>
      )}
    </ThemeToggler>
  )
}

export default ThemeToggle
