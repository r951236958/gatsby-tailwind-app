import axios from 'axios'
import { navigate, Link } from 'gatsby'
import React, { useState } from 'react'
import useGoogleSheets from 'use-google-sheets'
import Spinner from 'components/Spinner'

function rand() {
  return Math.round(Math.random() * 20) - 10
}

function GSheetForm() {
  const [formValue, setFormVale] = useState({
    name: '',
    age: '',
    salary: '',
    hobby: '',
  })

  const { data, loading, error } = useGoogleSheets({
    apiKey: process.env.GATSBY_GOOGLE_API_KEY,
    sheetId: process.env.GATSBY_GOOGLE_SHEETS_ID,
  })

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <div>Error!</div>
  }

  const handleChange = (event) => {
    setFormVale({
      ...formValue,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('data on submit', formValue)

    const connectionURL =
      'https://sheet.best/api/sheets/42627f2d-e682-427a-928a-154ff1e109df'

    axios.post(connectionURL, formValue).then((response) => {
      console.log(response)
      navigate(`/thankyou`)
    })
  }

  return (
    <>
      <div className="p-4 m-4 h-300">
        <pre>
          <code className="language-json">{JSON.stringify(data)}</code>
        </pre>
      </div>
      <div className="flex items-center justify-center w-full mx-auto">
        <div className="container spacing-y-2">
          <div className="space-x-2 rounded-md ">
            <div className="bg-paper-500">
              <div className="my-2">
                <p>
                  點擊前往
                  <Link
                    href="https://docs.google.com/spreadsheets/d/1kDZReOEau2uXPwyFyS4xsKFE_a2aJiZvUNTtOT66uqo/edit?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Google試算表
                  </Link>
                </p>
              </div>
              <form
                className="border border-white"
                method="post"
                data-sheet-best="https://sheet.best/api/sheets/42627f2d-e682-427a-928a-154ff1e109df"
                onSubmit={handleSubmit}
              >
                <label htmlFor="name">
                  Name
                  <input
                    required
                    placeholder="Enter your name"
                    type="text"
                    name="name"
                    id="name"
                    value={formValue.name}
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="age">
                  Age
                  <input
                    required
                    placeholder="Enter your age"
                    type="number"
                    name="age"
                    id="age"
                    value={formValue.age}
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="salary">
                  Salary
                  <input
                    required
                    placeholder="Enter your salary"
                    type="number"
                    name="salary"
                    id="salary"
                    value={formValue.salary}
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="hobby">
                  Hobby
                  <input
                    required
                    placeholder="Enter your hobby"
                    type="text"
                    name="hobby"
                    id="hobby"
                    value={formValue.hobby}
                    onChange={handleChange}
                  />
                </label>
                <button type="submit" className="px-4 py-2 bg-yellow-300">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GSheetForm
