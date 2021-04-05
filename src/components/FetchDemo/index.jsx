import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from '@material-ui/core/Table'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import RowData from './RowData'
import { Input } from 'antd'
// import { useTableSearch } from '../../hooks/useTableSearch'
// import TableContainer from '@material-ui/core/TableContainer'
// import Paper from '@material-ui/core/Paper'
// import { Table, Input } from 'antd'
// import { userColumns } from './columns'
import styled from 'styled-components'

const StyledTable = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;

    tr {
      :last-child {
        td {
          max-width: 80%;
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;

      :first-child {
        width: 100px;
        max-width: 150px;
        padding: 0.375rem;
      }

      :last-child {
        width: 400px;
        max-width: 500px;
        border-right: 0;
      }
    }
  }
`

const url =
  'https://spreadsheets.google.com/feeds/list/' +
  process.env.GATSBY_GOOGLE_SPREADSHEET_ID +
  '/1/public/values?alt=json'

// const fetchUsers = async () => {
//   const { data } = await axios.get(
//     'https://jsonplaceholder.typicode.com/users/'
//   )
//   return { data }
// }

const FetchDemo = () => {
  const [data, setData] = useState([])
  // const [colData, setColData] = useState([])
  const [searchVal, setSearchVal] = useState(null)

  const { Search } = Input

  // const { filteredData, loading } = useTableSearch({
  //   searchVal,
  //   retrieve: fetchUsers,
  // })

  useEffect(async () => {
    const response = await axios.get(url)
    setData(response.data.feed.entry)
    // console.table(response.data.feed.entry)
  }, [])

  return (
    <>
      <Search
        onChange={(e) => setSearchVal(e.target.value)}
        placeholder="Search"
        enterButton
        style={{
          position: 'sticky',
          top: '0',
          left: '0',
          width: '200px',
          marginTop: '2vh',
        }}
      />
      <br /> <br />
      <StyledTable>
        <Table className="w-full table-auto lg:w-2/3" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Image</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((rows, i) => (
              <RowData key={i} rows={rows} />
            ))}
          </TableBody>
        </Table>
        {/* <Table
        rowKey="name"
        dataSource={filteredData}
        columns={userColumns}
        loading={loading}
        pagination={false}
      /> */}
      </StyledTable>
      
    </>
  )
}

export default FetchDemo
