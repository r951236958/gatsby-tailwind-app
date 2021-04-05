import React from 'react'
// import { useGlobalFilter, useAsyncDebounce } from 'react-table'

const DefaultColumnFilter = ({
  column: { filterValue, preFilteredRows, setFilter },
}) => {
  const count = preFilteredRows.length

  return (
    <>
      <input
        style={{
          backgroundColor: '#252830',
          boxShadow: '-4px -3px 45px 21px rgba(0,0,0,0.35)',
          border: '1px solid rgba(209, 213, 219, 0.4)',
          borderRadius: '0.375rem',
          padding: '0.5rem',
        }}
        value={filterValue || ''}
        onChange={(e) => {
          setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
        }}
        placeholder={`Search ${count} records...`}
      />
    </>
  )
}

export default DefaultColumnFilter
