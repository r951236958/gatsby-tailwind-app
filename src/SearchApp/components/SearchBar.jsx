import React, { useState } from 'react'

const SearchBar = ({ OnSubmit, visibility }) => {
  const [term, setTerm] = useState('')

  const formSubmit = (e) => {
    e.preventDefault()
    e.target.getElementsByTagName('input')[0].blur()
    if (!term) return
    if (!term.trim()) return
    OnSubmit(term)
    setTerm('')
  }

  return (
    <form id="frm" onSubmit={formSubmit} className="flex justify-center">
      <div className="relative flex items-center justify-center w-full sm:w-2/4 md:w-2/5 lg:w-2/5 xl:w-2/5">
        <input
          id="input"
          className="outline-none appearance-none w-8/12 ease-out duration-500 bg-transparent rounded-full border shadow border-cyan-500 my-4  placeholder-gray-600 dark:placeholder-gray-400 p-2 leading-tight focus:ouline-none"
          type="search"
          placeholder="Search Photos"
          value={term}
          required
          onChange={(e) => setTerm(e.target.value)}
        />
        <button
          className="absolute flex-shrink height-full right-0 rounded-full shadow bg-cyan-500 hover:bg-cyan-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 max-w-lg"
          type="submit"
        >
          Search{' '}
          <span
            className="fas fa-circle-notch"
            style={{
              animation: '1s linear infinite wheel',
            }}
            hidden={visibility}
          ></span>
        </button>
      </div>
    </form>
  )
}

export default SearchBar
