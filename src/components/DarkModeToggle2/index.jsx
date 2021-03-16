import React, { useState, useEffect } from 'react'
import Toggle from 'react-toggle'
import { useMediaQuery } from 'react-responsive'

export default function DarkModeToggle() {
  if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
    console.log('🎉 Dark mode is supported')
  }

  const systemPrefersDark = useMediaQuery(
    {
      query: '(prefers-color-scheme: dark)',
    },
    undefined,
    (prefersDark) => {
      setIsDark(prefersDark)
    }
  )

  const [isDark, setIsDark] = useState(systemPrefersDark)

  const [mode, setMode] =
    (useState < 'light') |
    'dark' |
    (undefined >
      (window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'))

  useEffect(() => {
    const modeMe = (e) => {
      setMode(e.matches ? 'dark' : 'light')
    }
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', modeMe)
    return window
      .matchMedia('(prefers-color-scheme: dark)')
      .removeListener(modeMe)
  }, [isDark])

  return (
    <div>
      <Toggle
        className="DarkToggle"
        checked={isDark}
        onChange={(event) => setIsDark(event.target.checked)}
        icons={{ checked: '🌙', unchecked: '🔆' }}
        aria-label="Dark mode"
      />
    </div>
  )
}
