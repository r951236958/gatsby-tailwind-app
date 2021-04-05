import React, { 
  // useState, 
  useMemo 
} from 'react'
import { useTable, useFilters, useGlobalFilter } from 'react-table'
import { matchSorter } from 'match-sorter'

// import EditableCell from './EditableCell'
import DefaultColumnFilter from './DefaultColumnFilter'
import GlobalFilter from './GlobalFilter'
// import SelectColumnFilter from './SelectColumnFilter'

// const defaultColumn = {
//   Cell: EditableCell,
// }

function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [(row) => row.values[id]] })
}

const Table2 = ({
  columns,
  data,
  updateMyData,
  skipPageReset,
  // renderRowSubComponent,
}) => {
  const filterTypes = useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id]
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true
        })
      },
    }),
    []
  )

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  )
  const {
    state,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
    // page,
    // canPreviousPage,
    // canNextPage,
    // pageOptions,
    // pageCount,
    // gotoPage,
    // nextPage,
    // previousPage,
    // setPageSize,
    // setFilter,
    // state: { pageIndex, pageSize },
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      autoResetPage: !skipPageReset,
      updateMyData,
      filterTypes,
    },
    useFilters,
    useGlobalFilter
  )

  const firstPageRows = rows.slice(0, 30)

  return (
    <>
      <table id="acnh-art" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <tr key={`thead-tr-${i}`} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, i) => (
                <th key={`th-column-${i}`} {...column.getHeaderProps()}>
                  {column.render('Header')}
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </th>
              ))}
            </tr>
          ))}
          <tr>
            <th
              colSpan={visibleColumns.length}
              style={{
                textAlign: 'left',
              }}
            >
              <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
            </th>
          </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row, i) => {
            prepareRow(row)
            return (
              <tr key={`tbody-tr-${i}`} {...row.getRowProps()}>
                {row.cells.map((cell, i) => {
                  return (
                    <td key={`tbody-column-${i}`} {...cell.getCellProps()}>
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

export default Table2
