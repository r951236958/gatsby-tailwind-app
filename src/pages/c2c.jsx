import React, { useEffect, useState, useRef } from 'react'
import { userNames } from 'components/ListGroup/items'
import ListGroup from 'components/ListGroup'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
// import C2CDemo from '../components/C2CDemo'
// import UseRefEx from 'components/UseRefEx'

function C2CPage() {
  const title = 'Clipboard Page'
  const listitems = userNames
  const [view, setView] = useState(false)
  const [inputValue, setInputValues] = useState('')

  const inputRef = useRef()


  const handleSelect = (value) => {
    if (typeof value === 'string' && value.length > 0) {
      setInputValues(value)
    }
  }

  useEffect(() => {
    if (typeof value === 'string' && inputValue.length > 0) {
      setView(true)
    }
  }, [inputValue])


  useEffect(() => {
    if (view) {
      const { current } = inputRef
      if (typeof current === 'object' && current !== null) {
        current.select()
        //current.setSelectionRange(0,value.length)
        document.execCommand('copy')
        setView(false)
      }
    }
  }, [view])

  return (
    <Layout title={title}>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title={title}
      />

      <div className="w-full">
        <span className="text-center text-blue-400">List Group</span>
        <ListGroup
          listValue={listitems}
          className="mb-5"
          onSelect={handleSelect}
          selectedLabel="Copied"
          selected={inputValue}
        />
      </div>
      <div className="w-full divide-y-2 divide-gray-400" />

      <div className="mb-5">
        <p className="py-4 leading-4 text-md">
          Try to paste something below to see what value has been copied
        </p>
        <textarea className="w-full bg-transparent border border-gray-400 rounded-md form-control" />
      </div>

      <div className={view ? '' : 'invisible'}>
        <textarea
          readOnly
          ref={inputRef}
          type="text"
          value={inputValue}
          className="form-control"
        />
      </div>
    </Layout>
  )
}

export default C2CPage
