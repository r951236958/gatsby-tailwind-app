import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faClipboard,
  // faClipboardCheck,
} from '@fortawesome/free-solid-svg-icons'
// import Tooltip from 'components/Tooltip'

const ListGroup = (props) => {
  const {
    value,
    className,
    onSelect,
    selected,
    selectedLabel = 'selected',
  } = props

const [tooltip, setTooltip] = useState(false)

  if (Array.isArray(value) && value.length > 0)
    return (
      <div className={`list-group w-1/3 max-w-full ${className}`}>
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
                  setTooltip(true)
                  setTimeout(() => {
                    setTooltip(false)
                  }, 2000)
                }
                }
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
                      {/* <FontAwesomeIcon icon={faExternalLinkAlt} /> */}
                    </a>
                  </div>
                  <div className="col-12 col-md-2">
                      <span className="tooltip">
                    {selected === e && tooltip === true && (
                        <span
                          className="tooltip-message on-right"
                          style={{
                            color: '#ffffff',
                            backgroundColor: '#171616',
                          }}
                        >
                          {selectedLabel}
                        </span>
                    )}
                        <FontAwesomeIcon icon={faClipboard} />
                      </span>
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

export default ListGroup