import VisuallyHidden from "@reach/visually-hidden"
import { Link, navigate } from "gatsby"
import firebase from "gatsby-plugin-firebase"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { menuList } from "../../config"
import { getUser, isLoggedIn, logout } from "../../utils/auth"
import ThemeToggle from "../ThemeToggle"

export default function TopBar({ siteTitle }) {
  const [isOpen, setIsOpen] = useState(false)

  const [menuOpen, setMenuOpen] = useState(false)
  const user = getUser()

  useEffect(() => {
    setMenuOpen(false)
  }, [])

  const handleMenuOpen = () => {
    setIsOpen(!isOpen)
  }

  function handleMobileMenuOpen() {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <nav className="bg-cyan-600 dark:bg-gray-700">
        <div className="px-2 mx-auto max-w-7xl md:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
              {/* Mobile menu button */}
              <button
                className="inline-flex items-center justify-center p-2 text-gray-300 rounded-md hover:text-white hover:bg-gray-700 hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded="false"
                aria-controls="mobile-menu"
                onClick={handleMobileMenuOpen}
              >
                <VisuallyHidden>Open main menu</VisuallyHidden>
                {/* Icon when menu is closed. */}
                {/*
                    Heroicon name: menu
        
                    Menu open: "hidden", Menu closed: "block"
                */}
                <svg
                  width="27"
                  height="27"
                  className={(!menuOpen ? "block" : "hidden") + " h-6 w-6"}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/*
                  Heroicon name: x
    
                  Menu open: "block", Menu closed: "hidden"
                */}
                <svg
                  width="27"
                  height="27"
                  className={
                    (menuOpen ? "block md:hidden" : "hidden") + " h-6 w-6"
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-center flex-1 md:items-stretch md:justify-start">
              <div className="flex items-center flex-shrink-0">
                <VisuallyHidden>{siteTitle}</VisuallyHidden>
                <Link to="/">
                  <svg
                    className="block w-8 h-8 fill-current lg:hidden"
                    viewBox="0 0 28 28"
                  >
                    <circle cx="14" cy="14" r="14" fill="#639" />
                    <path
                      fill="#fff"
                      d="M6.2 21.8C4.1 19.7 3 16.9 3 14.2L13.9 25c-2.8-.1-5.6-1.1-7.7-3.2zm10.2 2.9L3.3 11.6C4.4 6.7 8.8 3 14 3c3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3C19.7 6.5 17 5 14 5c-3.9 0-7.2 2.5-8.5 6L17 22.5c2.9-1 5.1-3.5 5.8-6.5H18v-2h7c0 5.2-3.7 9.6-8.6 10.7z"
                    />
                  </svg>
                  <svg
                    width="136"
                    height="36"
                    className="hidden w-auto h-8 lg:block"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 106 28"
                  >
                    <path
                      fill="#fff"
                      d="M62.9 12h2.8v10h-2.8v-1.3c-1 1.5-2.3 1.6-3.1 1.6-3.1 0-5.1-2.4-5.1-5.3 0-3 2-5.3 4.9-5.3.8 0 2.3.1 3.2 1.6V12zm-5.2 5c0 1.6 1.1 2.8 2.8 2.8 1.6 0 2.8-1.2 2.8-2.8 0-1.6-1.1-2.8-2.8-2.8-1.6 0-2.8 1.2-2.8 2.8zm13.5-2.6V22h-2.8v-7.6h-1.1V12h1.1V8.6h2.8V12h1.9v2.4h-1.9zm8.5 0c-.7-.6-1.3-.7-1.6-.7-.7 0-1.1.3-1.1.8 0 .3.1.6.9.9l.7.2c.8.3 2 .6 2.5 1.4.3.4.5 1 .5 1.7 0 .9-.3 1.8-1.1 2.5s-1.8 1.1-3 1.1c-2.1 0-3.2-1-3.9-1.7l1.5-1.7c.6.6 1.4 1.2 2.2 1.2.8 0 1.4-.4 1.4-1.1 0-.6-.5-.9-.9-1l-.6-.2c-.7-.3-1.5-.6-2.1-1.2-.5-.5-.8-1.1-.8-1.9 0-1 .5-1.8 1-2.3.8-.6 1.8-.7 2.6-.7.7 0 1.9.1 3.2 1.1l-1.4 1.6zm6.1-1.1c1-1.4 2.4-1.6 3.2-1.6 2.9 0 4.9 2.3 4.9 5.3s-2 5.3-5 5.3c-.6 0-2.1-.1-3.2-1.6V22H83V5.2h2.8v8.1zm-.3 3.7c0 1.6 1.1 2.8 2.8 2.8 1.6 0 2.8-1.2 2.8-2.8 0-1.6-1.1-2.8-2.8-2.8-1.7 0-2.8 1.2-2.8 2.8zm13 3.5L93.7 12H97l3.1 5.7 2.8-5.7h3.2l-8 15.3h-3.2l3.6-6.8zM54 13.7h-7v2.8h3.7c-.6 1.9-2 3.2-4.6 3.2-2.9 0-5-2.4-5-5.3S43.1 9 46 9c1.6 0 3.2.8 4.2 2.1l2.3-1.5C51 7.5 48.6 6.3 46 6.3c-4.4 0-8 3.6-8 8.1s3.4 8.1 8 8.1 8-3.6 8-8.1c.1-.3 0-.5 0-.7z"
                    />
                    <path
                      fill="#fff"
                      d="M25 14h-7v2h4.8c-.7 3-2.9 5.5-5.8 6.5L5.5 11c1.2-3.5 4.6-6 8.5-6 3 0 5.7 1.5 7.4 3.8l1.5-1.3C20.9 4.8 17.7 3 14 3 8.8 3 4.4 6.7 3.3 11.6l13.2 13.2C21.3 23.6 25 19.2 25 14zm-22 .1c0 2.8 1.1 5.5 3.2 7.6 2.1 2.1 4.9 3.2 7.6 3.2L3 14.1z"
                    />
                    <path
                      d="M14 0C6.3 0 0 6.3 0 14s6.3 14 14 14 14-6.3 14-14S21.7 0 14 0zM6.2 21.8C4.1 19.7 3 16.9 3 14.2L13.9 25c-2.8-.1-5.6-1.1-7.7-3.2zm10.2 2.9L3.3 11.6C4.4 6.7 8.8 3 14 3c3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3C19.7 6.5 17 5 14 5c-3.9 0-7.2 2.5-8.5 6L17 22.5c2.9-1 5.1-3.5 5.8-6.5H18v-2h7c0 5.2-3.7 9.6-8.6 10.7z"
                      fill="#639"
                    />
                  </svg>
                </Link>
              </div>
              <div className="hidden md:block md:ml-6">
                <div className="flex space-x-4">
                  {/* Navbar Links */}
                  {menuList.map((items, i) => (
                    <Link
                      key={`navlink-${i}`}
                      activeClassName="active"
                      activeStyle={{ color: "#f3e37" }}
                      className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-900 active:bg-gray-900 hover:bg-opacity-40 active:bg-opacity-40 hover:text-white active:text-white hover:no-underline"
                      to={items.link}
                    >
                      {items.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center justify-center pr-2 space-x-3 md:static md:inset-auto md:ml-6 md:pr-0">
              <div className="relative mx-3">
                <div className="space-x-4">
                  <button
                    className="p-1 text-gray-300 rounded-full hover:text-white focus:outline-none"
                    id="user-menu"
                    aria-haspopup="true"
                    onClick={handleMenuOpen}
                  >
                    <VisuallyHidden>Open user menu</VisuallyHidden>

                    <svg className="w-6 h-6 fill-current" viewBox="0 0 16 16">
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                    </svg>
                  </button>
                </div>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state. */}
        <div
          className={menuOpen ? "block md:hidden" : "hidden"}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Mobile Menu Items */}
            {menuList.map((items, i) => (
              <Link
                key={`mobile-menulink-${i}`}
                activeClassName="active"
                className="block px-3 py-2 text-base font-medium text-gray-300 bg-gray-700 rounded-md hover:no-underline hover:bg-gray-800 active:bg-gray-800 hover:text-white active:text-white"
                to={items.link}
              >
                {items.name}
              </Link>
            ))}
          </div>

          {isLoggedIn() && (
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-gray-300 rounded-full fill-current"
                    viewBox="0 0 496 512"
                  >
                    <path d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">
                    {user.displayName}
                  </div>
                  <div className="text-sm font-medium leading-none text-gray-400">
                    {user.email}
                  </div>
                </div>

                <button
                  className="flex-shrink-0 p-1 ml-auto text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  onClick={async event => {
                    event.preventDefault()
                    await logout(firebase).then(() => navigate(`/app/login`))
                  }}
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    aria-label="sign-out"
                    viewBox="0 0 512 512"
                  >
                    <path d="M160 217.1c0-8.8 7.2-16 16-16h144v-93.9c0-7.1 8.6-10.7 13.6-5.7l141.6 143.1c6.3 6.3 6.3 16.4 0 22.7L333.6 410.4c-5 5-13.6 1.5-13.6-5.7v-93.9H176c-8.8 0-16-7.2-16-16v-77.7m-32 0v77.7c0 26.5 21.5 48 48 48h112v61.9c0 35.5 43 53.5 68.2 28.3l141.7-143c18.8-18.8 18.8-49.2 0-68L356.2 78.9c-25.1-25.1-68.2-7.3-68.2 28.3v61.9H176c-26.5 0-48 21.6-48 48zM0 112v288c0 26.5 21.5 48 48 48h132c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12H48c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h132c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12H48C21.5 64 0 85.5 0 112z" />
                  </svg>
                </button>
              </div>
              <div className="px-2 mt-3 space-y-1">
                <Link
                  to="/app/"
                  className="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:no-underline hover:text-white hover:bg-gray-700"
                >
                  App
                </Link>

                <Link
                  to="/app/profile/"
                  className="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:no-underline hover:text-white hover:bg-gray-700"
                >
                  Profile
                </Link>

                <button
                  className="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:no-underline hover:text-white hover:bg-gray-700"
                  onClick={async event => {
                    event.preventDefault()
                    await logout(firebase).then(() => navigate(`/app/login`))
                  }}
                >
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

TopBar.propTypes = {
  siteTitle: PropTypes.string,
}

TopBar.defaultProps = {
  siteTitle: ``,
}
