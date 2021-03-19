import React from 'react'
// import { linkList } from '../../config'

const LinkList = ({ items }) => {
  const { link, icon, name } = items
  // const MenuLink = props => <MenuItemLink {...props} component={RouterLink} />
  return (
    <>
      <div id="LinkList" className="max-w-xl lg:mx-auto lg:max-w-md">
        <div className="group">
          <a
            href={link}
            className="flex items-start px-5 py-3 mt-3 text-base font-medium transition duration-150 ease-in-out border border-gray-700 rounded-lg group-hover:border-cyan-400 group-hover:bg-gray-300 group-hover:bg-opacity-10"
          >
            {icon}
            {name}
            <div className="ml-auto mt-0.5 pl-4">
              <svg
                className="w-5 h-5 text-gray-500 group-hover:text-cyan-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}
export default LinkList
