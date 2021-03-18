import React from 'react'
<<<<<<< HEAD
import InstagramIcon from './InstagramIcon'

const Footer3 = () => {
  return (
    <>
      <footer>
        <div className="relative pt-8 pb-6 bg-gradient-to-b from-gray-800 to-gray-300">
          <div
            className="absolute top-0 left-0 right-0 bottom-auto w-full -mt-20 overflow-hidden pointer-events-none"
            style={{ height: '80px', transform: 'translateZ(0)' }}
=======
import InstagramIcon from "./InstagramIcon"
const Footer3 = () => {
  return (
    <>
      <footer className="relative pt-8 pb-6 bg-gradient-to-b from-gray-800 to-gray-300">
        <div
          className="absolute top-0 left-0 right-0 bottom-auto w-full -mt-20 overflow-hidden pointer-events-none"
          style={{ height: "80px", transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
>>>>>>> dd80eca6c4540e9b9290f978bd50702040a3b7a4
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap">
              <div className="w-full px-4 lg:w-6/12">
                <h4 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-pink-400 via-red-400 to-yellow-400">
                  Let&apos;s keep in touch!
                </h4>
                <h5 className="mt-0 mb-2 text-lg text-gray-700">
                  Find us on any of these platforms, we respond 1-2 business
                  days.
                </h5>
                <div className="mt-6">
                  <button
                    className="inline-flex items-center justify-center w-10 h-10 p-3 mr-2 font-normal text-blue-400 bg-white rounded-full shadow-lg outline-none align-center focus:outline-none"
                    type="button"
                  >
                    <svg
                      className="w-4 h-4 fill-current bi bi-twitter"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </button>
                  <button
                    className="inline-flex items-center justify-center w-10 h-10 p-3 mr-2 font-normal text-blue-600 bg-white rounded-full shadow-lg outline-none align-center focus:outline-none"
                    type="button"
                  >
<<<<<<< HEAD
                    <svg
                      className="w-4 h-4 fill-current bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </button>
                  <button
                    className="inline-flex items-center justify-center w-10 h-10 p-3 mr-2 font-normal bg-white rounded-full shadow-lg outline-none align-center focus:outline-none"
                    type="button"
                  >
                    <InstagramIcon className="w-4 h-4 fill-current bi bi-instagram" />
                    
                  </button>
                  <button
                    className="inline-flex items-center justify-center w-10 h-10 p-3 mr-2 font-normal text-gray-900 bg-white rounded-full shadow-lg outline-none align-center focus:outline-none"
                    type="button"
=======
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </button>
                <button
                  className="inline-flex items-center justify-center w-10 h-10 p-3 mr-2 font-normal bg-white rounded-full shadow-lg outline-none align-center focus:outline-none"
                  type="button"
                >
                  <InstagramIcon className="w-4 h-4 fill-current icon-instagram" />
                </button>
                <button
                  className="inline-flex items-center justify-center w-10 h-10 p-3 mr-2 font-normal text-gray-900 bg-white rounded-full shadow-lg outline-none align-center focus:outline-none"
                  type="button"
                >
                  <svg
                    className="w-4 h-4 fill-current bi bi-github"
                    viewBox="0 0 16 16"
>>>>>>> dd80eca6c4540e9b9290f978bd50702040a3b7a4
                  >
                    <svg
                      className="w-4 h-4 fill-current bi bi-github"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="w-full px-4 lg:w-6/12">
                <div className="flex flex-wrap mb-6 items-top">
                  <div className="w-full px-4 ml-auto lg:w-4/12">
                    <span className="block mb-2 text-sm font-semibold text-gray-600 uppercase">
                      Useful Links
                    </span>
                    <ul className="list-unstyled">
                      <li>
                        <a
                          className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                          href="https://www.creative-tim.com/presentation"
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                          href="https://blog.creative-tim.com"
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                          href="https://www.github.com/creativetimofficial"
                        >
                          Github
                        </a>
                      </li>
                      <li>
                        <a
                          className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                          href="https://www.creative-tim.com/bootstrap-themes/free"
                        >
                          Free Products
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full px-4 lg:w-4/12">
                    <span className="block mb-2 text-sm font-semibold text-gray-600 uppercase">
                      Other Resources
                    </span>
                    <ul className="list-unstyled">
                      <li>
                        <a
                          className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                          href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                        >
                          MIT License
                        </a>
                      </li>
                      <li>
                        <a
                          className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                          href="https://creative-tim.com/terms"
                        >
                          Terms & Conditions
                        </a>
                      </li>
                      <li>
                        <a
                          className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                          href="https://creative-tim.com/privacy"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a
                          className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                          href="https://creative-tim.com/contact-us"
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
<<<<<<< HEAD
            <hr className="my-6 border-gray-400" />
            <div className="flex flex-wrap items-center justify-center md:justify-between">
              <div className="w-full px-4 mx-auto text-center md:w-4/12">
                <div className="py-1 text-sm font-semibold text-gray-600">
                  Copyright © {new Date().getFullYear()} Tailwind Starter Kit by{' '}
                  <a
                    href="https://www.creative-tim.com"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Creative Tim
                  </a>
                  .
                </div>
=======
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="w-full px-4 mx-auto text-center md:w-4/12">
              <div className="py-1 text-sm font-semibold text-gray-600">
                Copyright © {new Date().getFullYear()} Tailwind Starter Kit by{" "}
                <a
                  href="https://www.creative-tim.com"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Creative Tim
                </a>
                .
>>>>>>> dd80eca6c4540e9b9290f978bd50702040a3b7a4
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer3
