import React from 'react'

// https://material-ui.com/zh/components/tables/
// import Table from '@material-ui/core/Table'
// import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
// import TableContainer from '@material-ui/core/TableContainer'
// import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
// import Paper from '@material-ui/core/Paper'

import ImageModal from 'components/ImageModal'

const RowData = ({ rows }) => {
  return (
    <>
      <TableRow>
        <TableCell size="small" component="th" scope="row">
          {rows.gsx$name.$t}
        </TableCell>
        <TableCell size="medium" align="center">
          <ImageModal
            url={rows.gsx$url.$t}
            alt={rows.gsx$name.$t}
            description={rows.gsx$note.$t}
          />
        </TableCell>
      </TableRow>
    </>
  )
}

export default RowData
