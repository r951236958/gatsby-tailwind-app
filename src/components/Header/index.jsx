import { Link } from 'gatsby'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { menuList } from '../../config'

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)
  
  const handleMenuToggle = () => {
    toggleExpansion(!isExpanded)
  }

  return (
    <header className="bg-gray-800">
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-8">
        <Link to="/">
          <h1 className="flex items-center text-white no-underline">
            <svg
              className="block w-auto h-8 mr-2 fill-current lg:hidden"
              viewBox="0 0 28 28"
            >
              <circle cx="14" cy="14" r="14" fill="#639" />
              <path
                fill="#fff"
                d="M6.2 21.8C4.1 19.7 3 16.9 3 14.2L13.9 25c-2.8-.1-5.6-1.1-7.7-3.2zm10.2 2.9L3.3 11.6C4.4 6.7 8.8 3 14 3c3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3C19.7 6.5 17 5 14 5c-3.9 0-7.2 2.5-8.5 6L17 22.5c2.9-1 5.1-3.5 5.8-6.5H18v-2h7c0 5.2-3.7 9.6-8.6 10.7z"
              />
            </svg>

            <span className="text-xl font-bold tracking-tight">
              {siteTitle}
            </span>
          </h1>
        </Link>

        <button
          className="items-center block px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={handleMenuToggle}
        >
          {/* Icon Menu */}
          <svg
            className={
              (!isExpanded ? 'block' : 'hidden') +
              ' w-4 h-4 stroke-current stroke-2'
            }
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          {/* Icon X */}
          <svg
            className={
              (isExpanded ? 'block md:hidden' : 'hidden') +
              ' w-4 h-4 stroke-current stroke-2'
            }
            viewBox="0 0 24 24"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:items-center w-full md:w-auto`}
        >
          {menuList.map((link) => (
            <Link
              className="block px-3 py-2 mt-4 text-sm font-medium text-gray-300 no-underline rounded-md active:bg-gray-700 active:text-yellow-400 hover:bg-gray-700 hover:text-white md:inline-block md:mt-0 md:ml-6"
              activeClassName='active'
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
