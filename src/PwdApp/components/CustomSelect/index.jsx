import React, {useState} from 'react'
import { Transition } from '@headlessui/react'

const CustomSelect = () => {
    const [isOpen, setIsOpen] = useState(false)
    // const [itemSelected, setItemSelected] = useState(false)
    return (
      <>
        <div>
          <label
            id="listbox-label"
            className="block text-sm font-medium text-gray-700"
          >
            Assigned to
          </label>
          <div className="relative mt-1">
            <button
              type="button"
              className="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              aria-haspopup="listbox"
              aria-expanded="true"
              aria-labelledby="listbox-label"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  className="flex-shrink-0 w-6 h-6 rounded-full"
                />
                <span className="block ml-3 truncate">Tom Cook</span>
              </span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 ml-3 pointer-events-none">
                {/* Heroicon name: solid/selector */}
                <svg
                  className="w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>

            {/*
            Select popover, show/hide based on select state.
        
            For animated transitions, import { Transition } from '@headlessui/react' and wrap the next tag in this component:
            */}
            <Transition
              show={isOpen}
              enter=""
              enterFrom=""
              enterTo=""
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <ul
                className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                tabIndex={-1}
                role="listbox"
                aria-labelledby="listbox-label"
                aria-activedescendant="listbox-option-3"
              >
                {/*
                    Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.
            
                    Highlighted: "text-white bg-indigo-600", Not Highlighted: "text-gray-900"
                */}
                <li
                  className="relative py-2 pl-3 text-gray-900 cursor-default select-none pr-9"
                  id="listbox-option-0"
                  role="option"
                >
                  <div className="flex items-center">
                    <img
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                      className="flex-shrink-0 w-6 h-6 rounded-full"
                    />
                    {/* Selected: "font-semibold", Not Selected: "font-normal" */}
                    <span className="block ml-3 font-normal truncate">
                      Wade Cooper
                    </span>
                  </div>

                  {/*
                Checkmark, only display for selected option.
        
                Highlighted: "text-white", Not Highlighted: "text-indigo-600"
                */}
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                    {/* Heroicon name: solid/check */}
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </li>
              </ul>
            </Transition>
          </div>
        </div>
      </>
    )
}

export default CustomSelect
