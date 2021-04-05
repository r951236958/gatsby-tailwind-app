// import IconButton from "@material-ui/core/IconButton"
import { Link } from 'gatsby'
import React from 'react'
// import FacebookIcon from './FacebookIcon'
// import TwitterIcon from './TwitterIcon'
// import InstagramIcon from './InstagramIcon'
// import GithubIcon from './GithubIcon'

export default function Footer() {
  return (
    <>
      <footer className="px-6 py-12 text-gray-300 bg-gradient-to-t from-gray-600 to-black via-dark-600 lg:px-8">
        <div className="max-w-screen-xl mx-auto mb-1">
          <span className="h-8 text-gray-300 bg-transparent fill-current">
            <svg
              width="36"
              height="36"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path d="M16 .011C7.099.011.011 7.099.011 16S7.099 31.995 16 31.995S31.989 24.902 31.989 16S24.901.011 16 .011zM3.484 16.14l12.38 12.376c-6.817 0-12.38-5.563-12.38-12.376zm15.297 12.1L3.765 13.219C5.016 7.656 10.021 3.484 16 3.484a12.635 12.635 0 0 1 10.151 5.147l-1.807 1.531a10.21 10.21 0 0 0-8.48-4.453a10.081 10.081 0 0 0-9.599 6.819L19.338 25.6c3.197-1.115 5.703-3.896 6.396-7.235h-5.423v-2.364h8.204c0 5.979-4.172 10.989-9.735 12.24z" />
            </svg>
          </span>
        </div>
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-6 divide-y-2 divide-gray-700 dark:divide-gray-600 md:grid-cols-9 lg:grid-cols-96 md:divide-x-2 md:divide-y-0 md:-mx-8">
            <div className="col-span-8 py-4 md:col-span-3 lg:col-span-2 md:px-8 md:py-0">
              <h5 className="text-xl font-semibold text-white">Company</h5>
              <nav className="mt-4">
                <ul className="space-y-2">
                  <li>
                    <Link to="/" className="text-base font-normal">
                      Landingpages
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-base font-normal">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-base font-normal">
                      Download brochure
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-span-8 py-4 md:col-span-3 lg:col-span-3 md:px-8 md:py-0">
              <h5 className="text-xl font-semibold text-white">Industries</h5>
              <nav className="mt-4">
                <ul className="grid lg:grid-cols-2">
                  <li className="mb-2">
                    <Link to="/" className="text-base font-normal">
                      Employment
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/" className="text-base font-normal">
                      Company
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/" className="text-base font-normal">
                      Childcare
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/" className="text-base font-normal">
                      Download brochure
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-span-8 py-4 md:col-span-3 lg:col-span-3 md:px-8 md:py-0">
              <h5 className="text-xl font-semibold text-white">Follow us</h5>
              <nav className="mt-4">
                <ul className="grid justify-start lg:grid-cols-2">
                  <li className="mb-2">
                    <a
                      className="inline-flex items-center justify-center space-x-2 text-base font-normal"
                      href="/"
                    >
                      <i className="fab fa-twitter fa-lg" />

                      <span className="text-white hover:text-gray-200">
                        Twitter
                      </span>
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="inline-flex items-center justify-center space-x-2 text-base font-normal"
                      href="/"
                    >
                      <i className="fab fa-instagram fa-lg" />

                      <span className="text-white hover:text-gray-200">
                        Instagram
                      </span>
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="/"
                      className="inline-flex items-center justify-center space-x-2 text-base font-normal"
                    >
                      <i className="fab fa-facebook-f fa-lg" />
                      <span className="text-white hover:text-gray-200">
                        Facebook
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="items-center justify-center max-w-screen-xl px-0 pt-2 mx-auto mt-1 border-t-2 border-gray-700 lg:pt-1 copyright-container dark:border-gray-500 lg:px-4 lg:justify-bettwn md:space-y-6">
          <div className="flex flex-col items-center justify-center w-full px-4 space-y-2 lg:space-x-6 lg:flex-row lg:inlin-flex">
            <div className="w-full px-4 lg:w-6/12">
              <div className="left-0 text-sm text-center text-white lg:text-left">
                Built with{' '}
                <a
                  className="text-sm font-semibold"
                  href="https://www.gatsbyjs.com"
                >
                  Gatsby
                </a>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <p className="right-0 text-sm text-center lg:text-right">
                &copy; {new Date().getFullYear()} Company. All rights reserved.
                | All rights reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
