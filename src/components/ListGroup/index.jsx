import { faClipboard } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { mdiClipboardCheckOutline, mdiClipboardOutline } from "@mdi/js"
import Icon from "@mdi/react"
import React, { useState } from "react"
// import Tooltip from 'components/Tooltip'
import useClipboard from "../../hooks/useClipboard"

const ListGroup = props => {
  const {
    value,
    className,
    onSelect,
    selected,
    selectedLabel = "selected",
  } = props

  const inputValue = value
  const [tooltip, setTooltip] = useState(false)
  const [isCopied, setClipboard] = useClipboard(2000)

  // const handleCopyClick = (text) => {
  //   if (typeof onSelect == "function") {
  //     onSelect(text)
  //   }
  //   setClipboard(text)
  //   setTooltip(true)
  //   setTimeout(() => {
  //     setTooltip(false)
  //   }, 2000)
  // };

  if (Array.isArray(inputValue) && inputValue.length > 0)
    return (
      <div className={`flex flex-col w-full ${className}`}>
        {inputValue.map((text, i) => {
          if (typeof text === "string" && text.length > 0) {
            if (text.startsWith("h3")) {
              const classNames = ["mb-3 py-2 text-xl text-blue-500"]
              if (i > 0) classNames.push("mt-4")
              return <h3 className={classNames.join(" ")}>{text.substr(3)}</h3>
            }
            return (
              <button
                key={i}
                href='#'
                className={`bg-dark-600 h-full mb-0 border border-gray-400 w-full lg:w-1/3 py-2 ${
                  selected === text ? "active" : ""
                }`}
                onClick={() => {
                  if (typeof onSelect == "function") {
                    onSelect(text)
                  }
                  setClipboard(text)
                  setTooltip(true)
                  setTimeout(() => {
                    setTooltip(false)
                  }, 2000)
                }}>
                <div className='flex items-center justify-between w-full mx-1'>
                  <div className='text-left col-md-8'>{text}</div>
                  <div className='col-md-2'>
                    {selected === text && isCopied ? (
                      <Icon
                        path={mdiClipboardCheckOutline}
                        title='Copy Susses'
                      />
                    ) : (
                      <Icon path={mdiClipboardOutline} title='Copy Susses' />
                    )}
                    <a
                      href={text}
                      title='Open in new tab'
                      target='_blank'
                      className='my-auto text-sm'
                      rel='noreferrer'>
                      {/* <FontAwesomeIcon icon={faExternalLinkAlt} /> */}
                    </a>
                  </div>
                  <div className='mr-4 col-md-2'>
                    <span className='tooltip'>
                      {selected === text && tooltip === true && (
                        <span
                          className='tooltip-message on-right'
                          style={{
                            color: "#ffffff",
                            backgroundColor: "#171616",
                          }}>
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
  return <p className='text-base italic'>Empty</p>
}

export default ListGroup
