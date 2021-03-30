// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import ListGroup from 'components/ListGroup'
import React, { useEffect, useRef, useState } from 'react'
// import {notes} from './notes'
import { usernames } from './usernames'

const UseRefEx = () => {
  const list = usernames
  const [view, setView] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const input = useRef()

  const handleSelect = (inputValue) => {
    if (typeof inputValue === 'string' && inputValue.length > 0) {
      setInputValue(inputValue)
    }
  }

  useEffect(() => {
    if (typeof inputValue === 'string' && inputValue.length > 0) {
      setView(true)
    }
  }, [inputValue])

  useEffect(() => {
    if (view) {
      const { current } = input
      if (typeof current === 'object' && current !== null) {
        current.select()
        //current.setSelectionRange(0,value.length)
        document.execCommand('copy')
        setView(false)
      }
    }
  }, [view])
  
  return (
    <div className="text-center container-fluid">
      <h1>ReactJS: Copy to clipboard</h1>
      <hr />

      <p>Click any entry in the list below to copy its value</p>
      <ListGroup
        value={list}
        className="mb-5"
        onSelect={handleSelect}
        selectedLabel="Copied"
        selected={inputValue}
      />

      <hr />

      <div className="mb-5">
        <p className="py-4 leading-4 text-md">Try to paste something below to see what value has been copied</p>
        <textarea className="w-full bg-transparent border border-gray-400 rounded-md form-control" />
      </div>

      <div className={view ? '' : 'invisible'}>
        <textarea
          readOnly
          ref={input}
          type="text"
          value={inputValue}
          className="form-control"
        />
      </div>
    </div>
  )
}

export default UseRefEx;