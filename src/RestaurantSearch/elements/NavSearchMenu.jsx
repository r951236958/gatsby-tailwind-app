import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faQuestion,
  faSearch,
//   faTimes,
} from '@fortawesome/free-solid-svg-icons'

import Avatar from '../components/Avatar'

function NavSearchMenu() {
  return (
    <div className="relative z-50 flex flex-col px-6 bg-white border-b border-gray-300 sm:flex-row sm:h-20">
      <div className="flex items-center justify-between w-full h-20 sm:h-auto">
        <a className="block h-8 no-underline">
          <img
            src="https://gustui.s3.amazonaws.com/gustlogo.png"
            className="h-full"
          />
        </a>
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faQuestion}
            className="text-xl cursor-pointer"
          />
          <Avatar
            image="https://gustui.s3.amazonaws.com/avatar.png"
            className="my-2 ml-6 cursor-pointer"
            status="offline"
            statusBottom
          />
        </div>
      </div>
      <div className="items-center justify-center block w-full mx-auto mt-2 mb-4 sm:mx-0 sm:mb-0 sm:mt-0 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:w-1/2 sm:h-full sm:flex">
        <form className="relative w-full">
          <input
            type="search"
            className="w-full max-w-full py-3 pl-10 pr-4 transition-colors duration-150 ease-in-out border border-gray-300 rounded-sm outline-none focus:border-blue-400"
            placeholder="Search for something..."
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-0 ml-4 text-gray-300 transform -translate-y-1/2 top-1/2"
          />
        </form>
      </div>
    </div>
  )
}

export default NavSearchMenu
