import React, { useState } from 'react'
import acnhData from './acnhData.json'
import styled from 'styled-components'
import ImageModal from 'components/ImageModal'

const StyledTable = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;

      :first-child {
        padding: 0.375rem;
      }

      :last-child {
        border-right: 0;
      }
    }
  }
`

const ImageList = ({ OnSubmit, visibility }) => {
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
    <>
      <form
        id="acnh-data"
        onSubmit={formSubmit}
        className="flex justify-center"
      >
        <div className="relative inline-flex items-center justify-center w-full sm:w-2/4 md:w-2/5 lg:w-2/5 xl:w-2/5">
          <input
            id="input"
            className="w-10/12 p-2 my-4 leading-tight placeholder-gray-600 duration-500 ease-out bg-transparent border rounded-full shadow outline-none appearance-none border-cyan-500 dark:placeholder-gray-400 focus:ouline-none"
            type="search"
            placeholder="Search..."
            value={term}
            required
            onChange={(e) => setTerm(e.target.value)}
          />
          <button
            className="absolute inline-flex items-center justify-center flex-shrink w-1/6 max-w-lg p-2 my-4 text-white border border-blue-500 rounded-full shadow right-8 hover:border-blue-400 bg-cyan-500 hover:bg-cyan-400 focus:shadow-outline focus:outline-none"
            type="submit"
          >
            <span className="w-5 h-5 text-gray-100">
              <i className="mdi mdi-magnify" />
            </span>
          </button>
        </div>
      </form>
      <StyledTable>
        <table className="w-2/3 border border-gray-700 rounded-md table-auto dark:border-gray-100">
          <thead>
            <tr className="divide-gray-700 dark:divide-gray-100 divide-x-1">
              <th className="w-4/12">Name</th>
              <th className="w-8/12">Image</th>
            </tr>
          </thead>
          <tbody className="divide-gray-700 dark:divide-gray-100 divide-y-1">
            {acnhData.map((items, i) => (
              <tr
                className="border-gray-700 divide-gray-700 dark:border-gray-100 border-t-1 divide-x-1 dark:divide-gray-100 "
                key={i}
              >
                <td>{items.name}</td>
                <td>
                  <ImageModal
                    url={items.img}
                    alt={items.name}
                    description={items.note}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </StyledTable>
    </>
  )
}

export default ImageList
