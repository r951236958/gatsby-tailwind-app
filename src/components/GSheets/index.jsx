import React from 'react'
import useGoogleSpreadsheet from 'use-google-spreadsheet'
import Loader from 'react-loader-spinner'

const GSheets = () => {
  const API_KEY = process.env.GATSBY_GOOGLE_API_KEY
  const SHEET_ID = process.env.GATSBY_GOOGLE_SHEETS_ID
  const shareUrl = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/edit?usp=sharing`
  const { rows, isFetching } = useGoogleSpreadsheet(shareUrl, API_KEY)

  return isFetching ? (
    <Loader type="Oval" color="#00BFFF" height={80} width={80} />
  ) : rows ? (
    <table>
      <thead>
        <tr>
            <th></th>
          <th>Catalog</th>
          <th>Id</th>
          <th>Art_Name</th>
          <th>Only</th>
          <th>Real</th>
          <th>Fake_1</th>
          <th>Fake_2</th>
          <th>Note</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => {
          return (
            <tr key={i}>
              {Object.keys(row).map((key, i) => (
                <td key={i}>
                  {row[key]}
                  <br />
                </td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  ) : (
    <span>No Data</span>
  )
}

export default GSheets
