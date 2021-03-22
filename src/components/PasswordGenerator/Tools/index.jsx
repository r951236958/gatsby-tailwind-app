import React from "react"

const Tools = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen px-5 py-5 bg-gray-800 min-w-screen">
        <div
          className="w-full p-5 mx-auto text-gray-800 bg-white rounded-lg shadow"
          style={{ maxWidth: 500 }}
        >
          <div className="relative mb-2">
            <input
              type="showPasswordField?'password':'text'"
              id="password"
              x-model="password"
              className="w-full py-2 pl-3 pr-10 transition-colors border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Password"
            />
            <button className="absolute block text-xl text-center text-gray-400 transition-colors w-7 h-7 leading-0 top-2 right-2 focus:outline-none hover:text-indigo-500"></button>
          </div>
          <div className="flex -mx-1"></div>
          <hr className="my-5 border border-gray-200" />
          <div className="mb-2">
            <label className="block mb-2 text-xs font-semibold text-gray-500">
              PASSWORD LENGTH
            </label>
            <input
              className="w-full px-3 py-2 mb-1 transition-colors border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Length"
              type="number"
              min={1}
              max={30}
              step={1}
            />
            <input className="w-full" type="range" min={1} max={30} step={1} />
          </div>
          <div className="flex mb-2 -mx-2">
            <div className="w-1/2 px-2">
              <label className="space-x-4" htmlFor="charsLower">
                <input
                  type="checkbox"
                  className="align-middle"
                  id="charsLower"
                />
                <span className="text-xs font-semibold text-gray-500">
                  LOWERCASE
                </span>
              </label>
            </div>
            <div className="w-1/2 px-2">
              <label className="space-x-4" htmlFor="charsUpper">
                <input
                  type="checkbox"
                  className="align-middle"
                  id="charsUpper"
                />
                <span className="text-xs font-semibold text-gray-500">
                  UPPERCASE
                </span>
              </label>
            </div>
          </div>
          <div className="flex -mx-2">
            <div className="w-1/2 px-2">
              <label className="space-x-4" htmlFor="charsNumeric">
                <input
                  type="checkbox"
                  className="align-middle"
                  id="charsNumeric"
                />
                <span className="text-xs font-semibold text-gray-500">
                  NUMBERS
                </span>
              </label>
            </div>
            <div className="w-1/2 px-2">
              <label className="space-x-4" htmlFor="charsSymbols">
                <input
                  type="checkbox"
                  className="align-middle"
                  id="charsSymbols"
                />
                <span className="text-xs font-semibold text-gray-500">
                  SYMBOLS
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tools
