import React from 'react'

const InputFile = (props) => (
  <label
    htmlFor="img-loader-input"
    className="flex flex-col items-center w-64 px-4 py-6 tracking-wide text-gray-100 uppercase bg-transparent border border-teal-500 rounded-lg shadow-lg cursor-pointer hover:bg-gray-200 hover:bg-opacity-10 hover:text-gray-200 "
  >
    <svg
      className="w-8 h-8"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
    </svg>
    <span className="mt-2 text-base leading-normal">Select a file</span>
    <input
      id="img-loader-input"
      className="hidden"
      type="file"
      accept="image/*"
      name="img-loader-input"
      multiple
      {...props}
    />
  </label>
)

export default InputFile
