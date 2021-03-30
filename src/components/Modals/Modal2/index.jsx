import React, { useEffect, useState } from 'react'
// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faCheck,
//   faExclamation,
//   faTimes,
// } from '@fortawesome/free-solid-svg-icons'

import Transition from './Transition'
import Button from './Button'

const Modal = (props) => {
  const {
    children,
    shown,
    close,
    className,
    title,
    text,
    type,
    reverseButtons,
    onClose,
    ...newProps
  } = props

  return shown ? (
    <>
      <div
        className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen origin-center bg-blue-800 bg-opacity-75"
        onClick={() => {
          // close modal when outside of modal is clicked
          close()
        }}
      >
        <div
          className={`${className} absolute w-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white max-w-md text-center pt-10 rounded-sm shadow-lg`}
          {...newProps}
          onClick={(e) => {
            // do not close modal if anything inside modal content is clicked
            e.stopPropagation()
          }}
        >
          <button
            className="absolute w-6 h-6 text-xl text-gray-800 focus:outline-none right-6 top-6"
            onClick={close}
          >
            <span className="mdi mdi-close" />
          </button>
          {title || text ? (
            <div className="px-4 mb-4">
              {title && (
                <h2 className="text-3xl font-medium text-gray-800">{title}</h2>
              )}
              {text && (
                <p className="w-10/12 max-w-full mx-auto mt-2 text-base text-gray-800">
                  {text}
                </p>
              )}
            </div>
          ) : (
            <div className="flex items-center w-full h-full p-6">
              {children}
            </div>
          )}
          <div
            className={`flex mt-10 justify-center py-4 px-4 border-t border-gray-300 ${
              reverseButtons && ' flex-row-reverse'
            }`}
          >
            <Button
              onClick={close}
              text="Cancel"
              className="mx-4"
              type="danger"
            />

            <Button
              text="Confirm"
              className="w-full mx-4"
              type="primary"
            />
          </div>
        </div>
      </div>
    </>
  ) : null
}

export default Modal
