// import IconButton from "@material-ui/core/IconButton"
import { Link } from 'gatsby'
import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="px-6 py-12 text-gray-300 bg-gray-800 lg:px-8">
        <div className="max-w-screen-xl mx-auto mb-6 lg:mb-12 ">
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
        <div className="max-w-screen-xl mx-auto ">
          <div className="grid grid-cols-6 divide-y-2 divide-gray-700 md:grid-cols-9 lg:grid-cols-96 md:divide-x-2 md:divide-y-0 md:-mx-8">
            <div className="col-span-8 py-4 md:col-span-3 lg:col-span-2 md:px-8 md:py-0">
              <h5 className="text-xl font-semibold text-white">Company</h5>
              <nav className="mt-4">
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-base font-normal"
                    >
                      Landingpages
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base font-normal"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base font-normal"
                    >
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
                    <Link
                      href="#"
                      className="text-base font-normal"
                    >
                      Employment
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="#"
                      className="text-base font-normal"
                    >
                      Company
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="#"
                      className="text-base font-normal"
                    >
                      Childcare
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="#"
                      className="text-base font-normal"
                    >
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
                      className="inline-flex items-center justify-center text-base font-normal text-gray-300 hover:text-gray-400"
                      href="/"
                    >
                      <svg
                        className="w-6 h-6 mr-2 fill-current"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>

                      <span>Twitter</span>
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="inline-flex items-center justify-center text-base font-normal text-gray-300 hover:text-gray-400"
                      href="/"
                    >
                      <svg
                        className="w-6 h-6 mr-2 fill-current"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Instagram</span>
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="/"
                      className="inline-flex items-center justify-center text-base font-normal text-gray-300 hover:text-gray-400"
                    >
                      <svg
                        className="w-6 h-6 mr-2 fill-current"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span>Facebook</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="container items-center justify-center max-w-screen-xl px-4 pt-8 mx-auto mt-8 border-t-2 border-gray-700 lg:justify-bettwn md:space-y-6 lg:mt-12">
          <nav className="flex items-center justify-center space-x-6 inlin-flex">
            <div className="w-full px-4 lg:w-6/12">
              <div className="left-0 text-sm text-white">
                Built with{' '}
                <Link
                  className="text-sm font-semibold"
                  href="https://www.gatsbyjs.com"
                >
                  Gatsby
                </Link>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <p className="right-0 text-sm text-center md:text-right">
                &copy; {new Date().getFullYear()} Company. All rights reserved.
                | All rights reserved
              </p>
            </div>
          </nav>
        </div>
      </footer>
    </>
  )
}
