import React, { useState, useMemo } from 'react'
import items from '../../../data'
import { useTable, useFilters } from 'react-table'

const TableDemo = () => {
  const [filterInput, setFilterInput] = useState('') // 篩選狀態

  const data = useMemo(() => items)
  const columns = useMemo(() => [
    { Header: '藝術品', accessor: 'name' },
    { Header: '只有真品', accessor: 'only' },
    { Header: 'Real', accessor: 'real' },
    { Header: 'Fake', accessor: 'fake' },
    { Header: '備註', accessor: 'note' },
  ])

  const tableInstance = useTable({ columns, data }, useFilters)
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter, // 加入篩選器
  } = tableInstance

  // 當input改變時更新狀態
  const handleFilterChange = (e) => {
    const value = e.target.value || undefined
    setFilter('name', value) // Update the show.name filter. Now our table will filter and show only the rows which have a matching value
    setFilterInput(value)
  }
  return (
    <>
      <input
        value={filterInput}
        onChange={handleFilterChange}
        placeholder={'Search name'}
      />
      <table
        id="acnh"
        className="p-1 border border-gray-900 table-auto dark:border-gray-100"
        style={{ borderSpacing: 0 }}
        {...getTableProps()}
      >
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              key={`thead-tr-${index}`}
            >
              {headerGroup.headers.map((column, id) => (
                <th
                  className="p-1 border border-gray-900 dark:border-gray-100"
                  {...column.getHeaderProps()}
                  key={`thead-th-${index}-${id}`}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()} key={`tbody-tr-${index}`}>
                {row.cells.map((cell, id) => {
                  return (
                    <td
                      className="p-1 border border-gray-900 dark:border-gray-100"
                      {...cell.getCellProps()}
                      key={`tbody-td-${index}-${id}`}
                    >
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default TableDemo
