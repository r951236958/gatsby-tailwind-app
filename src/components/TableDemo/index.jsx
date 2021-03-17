import React, { useMemo } from 'react'
import items from '../../../data'
import { useTable } from 'react-table'

const TableDemo = () => {
  const data = useMemo(() => items)
  const columns = useMemo(() => [
    { Header: '藝術品', accessor: '藝術品' },
    { Header: '只有真品', accessor: '只有真品' },
    { Header: 'Real', accessor: 'Real' },
    { Header: 'Fake', accessor: 'Fake' },
    { Header: '備註', accessor: '備註' },
  ])

  const tableInstance = useTable({ columns, data })
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance
  return (
    <>
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
