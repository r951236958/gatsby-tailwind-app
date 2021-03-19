import React, { useEffect, useState } from "react"
import MoonStarIcon from "./MoonStarIcon"
import SunIcon from "./SunIcon"
import "./ThemeToggle.css"

const updateTheme = isDarkEnabled => {
  // Get CSS variables for background/foreground
  const styles = getComputedStyle(document.body)
  const black = styles.getPropertyValue("--black")
  const white = styles.getPropertyValue("--white")
  const docEl = document.documentElement

  if (isDarkEnabled) {
    docEl.style.setProperty("--background", black)
    docEl.style.setProperty("--foreground", white)
    document.querySelector("html").classList.add("darkmode")
  } else {
    docEl.style.setProperty("--background", white)
    docEl.style.setProperty("--foreground", black)
    document.querySelector("html").classList.remove("darkmode")
  }
}

const ThemeToggle = () => {
  const [isEnabled, setIsEnabled] = useState(false)

  useEffect(() => {
    updateTheme(isEnabled)
  }, [isEnabled])

  const toggleState = () => {
    setIsEnabled(prevState => !prevState)
  }

  return (
    <>
      <label htmlFor="toggle" className="toggle-wrapper">
        <div className={`toggle ${isEnabled ? "enabled" : "disabled"}`}>
          <span className="hidden-toggle">
            {isEnabled ? "Enable Light Mode" : "Enable Dark Mode"}
          </span>
          <div className="icons">
            <SunIcon />
            <MoonStarIcon />
          </div>
          <input
            id="toggle"
            name="toggle"
            type="checkbox"
            checked={isEnabled}
            onChange={toggleState}
          />
        </div>
      </label>
    </>
  )
}

export default ThemeToggle
