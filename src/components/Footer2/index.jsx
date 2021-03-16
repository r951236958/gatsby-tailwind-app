import React from 'react'

const Footer2 = () => {
  return (
    <>
      <footer className="pt-10 bg-gray-800 sm:mt-10">
        <div className="flex flex-wrap max-w-6xl m-auto text-gray-800 justify-left">
          {/* Col-1 */}
          <div className="w-1/2 p-5 sm:w-4/12 md:w-3/12">
            {/* Col Title */}
            <div className="mb-6 text-xs font-medium text-gray-400 uppercase">
              Getting Started
            </div>
            {/* Links */}
            <a
              href="#"
              className="block my-3 text-sm font-medium text-gray-300 duration-700 hover:text-gray-100"
            >
              Installation
            </a>
            <a
              href="#"
              className="block my-3 text-sm font-medium text-gray-300 duration-700 hover:text-gray-100"
            >
              Release Notes
            </a>
            <a
              href="#"
              className="block my-3 text-sm font-medium text-gray-300 duration-700 hover:text-gray-100"
            >
              Upgrade Guide
            </a>
            <a
              href="#"
              className="block my-3 text-sm font-medium text-gray-300 duration-700 hover:text-gray-100"
            >
              Using with Preprocessors
            </a>
            <a
              href="#"
              className="block my-3 text-sm font-medium text-gray-300 duration-700 hover:text-gray-100"
            >
              Optimizing for Production
            </a>
            <a
              href="#"
              className="block my-3 text-sm font-medium text-gray-300 duration-700 hover:text-gray-100"
            >
              Browser Support
            </a>
            <a
              href="#"
              className="block my-3 text-sm font-medium text-gray-300 duration-700 hover:text-gray-100"
            >
              IntelliSense
            </a>
          </div>
          {/* Col-2 */}
          <div className="w-1/2 p-5 sm:w-4/12 md:w-3/12">
            {/* Col Title */}
            <div className="mb-6 text-xs font-medium text-gray-400 uppercase">
              Core Concepts
            </div>
            {/* Links */}
            <a
              href="#"
              className="block my-3 text-sm font-medium text-gray-300 duration-700 hover:text-gray-100"
            >
              Utility-First
            </a>
            <a
              href="#"
              className="block my-3 text-sm font-medium text-gray-300 duration-700 hover:text-gray-100"
            >
              Responsive Design
            </a>
            <a
              href="#"
              className="block my-3 text-sm font-medium text-gray-300 duration-700 hover:text-gray-100"
            >
              Hover, Focus, &amp; Other States
            </a>
            <a
              href="#"
              className="block my-3 text-sm font-medium text-gray-300 duration-700 hover:text-gray-100"
            >
              Dark Mode
            </a>
            <a
              href="#"
              className="block my-3 text-sm font-medium text-gray-300 duration-700 hover:text-gray-100"
            >
              Adding Base Styles
            </a>
            <a
              href="#"
              className="block my-3 text-sm font-medium text-gray-300 duration-700 hover:text-gray-100"
            >
              Extracting Components
            </a>
            <a
              href="#"
              className="block my-3 text-sm font-medium text-gray-300 duration-700 hover:text-gray-100"
            >
              Adding New Utilities
            </a>
          </div>
          {/* Col-3 */}
          <div className="w-1/2 p-5 sm:w-4/12 md:w-3/12">
            {/* Col Title */}
            <div className="mb-6 text-xs font-medium text-gray-400 uppercase">
              Customization
            </div>
            {/* Links */}
            <a
              href="#"
              className="block my-3 text-sm font-medium text-gray-300 duration-700 hover:text-gray-100"
            >
              Configuration
            </a>
            <a
              href="#"
              className="block my-3 text-sm font-medium text-gray-300 duration-700 hover:text-gray-100"
            >
              Theme Configuration
            </a>
            <a
              href="#"
              className="block my-3 text-sm font-medium text-gray-300 duration-700 hover:text-gray-100"
            >
              Breakpoints
            </a>
            <a
              href="#"
              className="block my-3 text-sm font-medium text-gray-300 duration-700 hover:text-gray-100"
            >
              Customizing Colors
            </a>
            <a
              href="#"
              className="block my-3 text-sm font-medium text-gray-300 duration-700 hover:text-gray-100"
            >
              Customizing Spacing
            </a>
            <a
              href="#"
              className="block my-3 text-sm font-medium text-gray-300 duration-700 hover:text-gray-100"
            >
              Configuring Variants
            </a>
            <a
              href="#"
              className="block my-3 text-sm font-medium text-gray-300 duration-700 hover:text-gray-100"
            >
              Plugins
            </a>
          </div>
          {/* Col-3 */}
          <div className="w-1/2 p-5 sm:w-4/12 md:w-3/12">
            {/* Col Title */}
            <div className="mb-6 text-xs font-medium text-gray-400 uppercase">
              Community
            </div>
            {/* Links */}
            <a
              href="#"
              className="block my-3 text-sm font-medium text-gray-300 duration-700 hover:text-gray-100"
            >
              GitHub
            </a>
            <a
              href="#"
              className="block my-3 text-sm font-medium text-gray-300 duration-700 hover:text-gray-100"
            >
              Discord
            </a>
            <a
              href="#"
              className="block my-3 text-sm font-medium text-gray-300 duration-700 hover:text-gray-100"
            >
              Twitter
            </a>
            <a
              href="#"
              className="block my-3 text-sm font-medium text-gray-300 duration-700 hover:text-gray-100"
            >
              YouTube
            </a>
          </div>
        </div>
        {/* Copyright Bar */}
        <div className="pt-2">
          <div className="flex flex-col max-w-6xl px-3 pt-5 pb-5 m-auto text-sm text-gray-400 border-t border-gray-500 md:flex-row">
            <div className="mt-2">
              © Copyright 1998-year. All Rights Reserved.
            </div>
            {/* Required Unicons (if you want) */}
            <div className="flex flex-row mt-2 md:flex-auto md:flex-row-reverse">
              <a href="#" className="w-6 mx-1">
                <i className="uil uil-facebook-f" />
              </a>
              <a href="#" className="w-6 mx-1">
                <i className="uil uil-twitter-alt" />
              </a>
              <a href="#" className="w-6 mx-1">
                <i className="uil uil-youtube" />
              </a>
              <a href="#" className="w-6 mx-1">
                <i className="uil uil-linkedin" />
              </a>
              <a href="#" className="w-6 mx-1">
                <i className="uil uil-instagram" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer2
