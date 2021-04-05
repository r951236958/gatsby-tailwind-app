import React, { useState } from 'react'
import { 
  // useGlobalFilter, 
  useAsyncDebounce 
} from 'react-table'

const GlobalFilter = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) => {

    const count = preGlobalFilteredRows.length
    const [value, setValue] = useState(globalFilter)
    const onChange = useAsyncDebounce((value) => {
      setGlobalFilter(value || undefined)
    }, 200)

  return (
    <>
      <span>
        Search:{' '}
        <input
          value={value || ''}
          onChange={(e) => {
            setValue(e.target.value)
            onChange(e.target.value)
          }}
          placeholder={`${count} records...`}
          style={{
            fontSize: '1.1rem',
            border: '1px solid rgba(209, 213, 219, 0.4)',
            borderRadius: '0.375rem',

            outline: 'none',
            padding: '0.5rem',
            backgroundColor: '#252830',
            boxShadow:
              '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
          }}
        />
      </span>
    </>
  )
}

export default GlobalFilter
