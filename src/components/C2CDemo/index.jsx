import React, { useEffect, useCallback, useRef, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
// import {copyToClipBoard} from 'utils/Helper'
const usernameList = [
  { username: 'nick.l@sconsults.net' },
  { username: 'nick.l@auxworld.net' },
  { username: 'r951236958@gmail.com' },
]

const InputText = React.forwardRef((props, inputRef) => (
  <input
    className="py-1 pr-6 bg-transparent border-none focus:ring-transparent focus:outline-none"
    type="text"
    readOnly
    ref={inputRef}
    {...props}
  />
))

const C2CDemo = () => {
  const [inputs, setInputs] = useState(usernameList)
  const [copied, setCopied] = useState(false)
    const [inputValue, setInputValue] = useState('')
    let usernameRefs = useRef([])
    
    const inputRef = useRef()
    const textInputRef = useRef(null)

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }
    
    // const onChangeForField = useCallback(({ event }) =>
    //   setInputs(
    //     (state) => ({ ...state, [event.target.name]: event.target.value }),
    //     []
    //   )
    // )
    

    const handleOnCopy = () => {
      setCopied(!copied, { text: inputRef.current,  })
      
    }
    

  return (
    <>
      <form className="flex flex-col p-5 mx-auto my-4 rounded-lg shadow-lg bg-paper-600">
        <div className="mb-4 text-xl font-bold text-red-400">
          Input Value: {inputValue}
        </div>
        <label htmlFor="clipboard-test" className="flex flex-col">
          Input Label
          <input
            className="mt-2 bg-transparent rounded-md"
            type="text"
            name="clipboard"
            id="clipboard-test"
            ref={textInputRef}
            value={inputValue}
            onChange={handleInputChange}
          />
          <div>
            {usernameList.map((items, i) => (
              <div
                className="relative flex flex-wrap items-center my-2 border border-gray-400 rounded-md col-md-4"
                key={i}
              >
                <InputText
                  id={`user-${i}`}
                  name={items.username}
                  ref={usernameRefs.current[items]}
                  value={items.username}
                />
                <CopyToClipboard text={items.username} onCopy={handleOnCopy}>
                  <button className="absolute mb-0 focus:outline-none right-4">
                    <span className="py-1 material-icons">content_copy</span>
                  </button>
                </CopyToClipboard>
              </div>
            ))}
          </div>
        </label>
      </form>
    </>
  )
}

export default C2CDemo
