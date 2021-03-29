import React, { useEffect, useState, useRef } from 'react'
import {notes} from './notes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'


function Boilerplate(props) {
  return <div></div>
}

function ListGroup(props) {
  const {
    value,
    className,
    onSelect,
    selected,
    selectedLabel = 'selected',
  } = props
  if (Array.isArray(value) && value.length > 0)
    return (
      <div className={`list-group ${className}`}>
        {value.map((e, i) => {
          if (typeof e === 'string' && e.length > 0) {
            if (e.startsWith('h3')) {
              const classNames = [
                'mb-3 py-2 text-xl text-blue-500',
              ]
              if (i > 0) classNames.push('mt-4')
              return <h3 className={classNames.join(' ')}>{e.substr(3)}</h3>
            }
            return (
              <button
                key={i}
                href="#"
                className={`list-group-item bg-dark-600 h-full mb-0 border border-gray-400 w-full py-2 list-group-item-action ${
                  selected === e ? 'active' : ''
                }`}
                onClick={(event) => {
                  //event.preventDefault()
                  if (typeof onSelect == 'function') {
                    onSelect(e)
                  }
                }}
              >
                <div className="inline-flex items-center justify-around w-full mx-1">
                  <div className="text-left col-12 col-md-8">{e}</div>
                  <div className="col-12 col-md-2">
                    <a
                      href={e}
                      title="Open in new tab"
                      target="_blank"
                      className="my-auto text-sm"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
                  </div>
                  <div className="col-12 col-md-2">
                    {selected === e && (
                      <span className="float-right badge badge-pill badge-info">
                        {selectedLabel}
                      </span>
                    )}
                    {/*<button title="Copy" target="_blank" className="btn btn-outline-primary btn-sm">{'\u2750'}{'\u29c9'}</button>*/}
                  </div>
                </div>
              </button>
            )
          }
          return null
        })}
      </div>
    )
  return <p className="text-muted font-italic">Empty</p>
}

const UseRefEx = (props) => {
  const list = notes
  const [view, setView] = useState(false)
  const [value, setValue] = useState('')
  const input = useRef()

  const handleSelect = (value) => {
    if (typeof value === 'string' && value.length > 0) {
      setValue(value)
    }
  }

  useEffect(() => {
    if (typeof value === 'string' && value.length > 0) {
      setView(true)
    }
  }, [value])

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
        selected={value}
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
          value={value}
          className="form-control"
        />
      </div>
    </div>
  )
}

export default UseRefEx;