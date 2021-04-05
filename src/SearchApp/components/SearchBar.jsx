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
          id="search-bar--input"
          className="w-8/12 p-2 my-4 leading-tight placeholder-gray-600 duration-500 ease-out bg-transparent border rounded-full shadow outline-none appearance-none border-cyan-500 dark:placeholder-gray-400 focus:ouline-none"
          type="search"
          placeholder="Search Photos"
          value={term}
          required
          onChange={(e) => setTerm(e.target.value)}
        />
        <button
          className="absolute right-0 flex-shrink max-w-lg px-6 py-2 font-bold text-white rounded-full shadow height-full bg-cyan-500 hover:bg-cyan-400 focus:shadow-outline focus:outline-none"
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
