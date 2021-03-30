import React from 'react'

const ModalDemo = ({ children, shown, close }) => {
  return shown ? (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-2"
      onClick={() => {
        // close modal when outside of modal is clicked
        close()
      }}
    >
      <div
        className="absolute w-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-lg top-1/2 left-1/2 h-1/2 min-h-200 shaow-lg"
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
        <div className="flex items-center w-full h-full p-6">
          {children}
        </div>
      </div>
    </div>
  ) : null
}

export default ModalDemo
