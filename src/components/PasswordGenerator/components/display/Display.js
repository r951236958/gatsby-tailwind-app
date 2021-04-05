import React, { useState, useRef } from 'react'

import { PwdContainer } from '../PwdContainer'
import Tooltip from 'components/Tooltip'
// import SliderBar from 'components/SliderBar'
import PwdTypes from 'components/PwdTypes'
import PwdStrong from 'components/PwdStrong'
import { generatePassword, copyToClipBoard } from 'utils/Helper'
// import styled from 'styled-components'

// const Pane = styled('div')({
//   padding: '1rem 2rem 1rem 1rem',
//   backgroundColor: 'var(--bg)',
//   borderRadius: '5px',
//   border: '1px solid var(--border-color)',
//   display: 'flex',
//   justifyContent: 'space-between',
//   position: 'relative',
//   fontFamily: 'sans-serif',
//   fontSize: '16px',
// })

// const StyledDiv = styled('div')({
//   maxWidth: '360px',
//   margin: '100px auto',
// })

// const Tooltip = styled('div')({
//   backgroundColor: '#111111',
//   color: '#ffffff',
//   position: 'absolute',
//   top: '-25px',
//   right: '-10px',
//   fontWeight: 600,
//   fontSize: '12px',
//   padding: '4px 5px',
//   '&:after': {
//     content: "''",
//     position: 'absolute',
//     width: '0',
//     height: '0',
//     border: '5px solid transparent',
//     borderTopColor: '#111111',
//     bottom: '-10px',
//     left: '50%',
//     transform: 'translateX(-50%)',
//   },
// })

// const selectTagStyle = {
//   backgroundColor: 'inherit',
//   // color: '#506175',
//   width: '20%',
//   height: 'auto',
//   marginLeft: '-4px',
// }

const Display = () => {
  // const [displayTooltip, setDisplayTooltip] = useState(false)
  const [showPasswordField, setShowPasswordField] = useState(true)
  const [password, setPassword] = useState('')
  const [rangeValue, setRange] = useState()
  const [passwordProps, setPasswordProps] = useState()
  const [tooltip, setTooltip] = useState(false)
  // const [type, setType] = useState('password')
  const passwordRef = useRef(null)
  let pwdDescription = ''

  const generateNewPassword = () => {
    const pwd =
      rangeValue > 3
        ? generatePassword(passwordProps, rangeValue)
        : generatePassword(passwordProps, 3)
    setPassword(pwd)
  }

  const copyClipBoard = (e) => {
    e.preventDefault()
    copyToClipBoard(passwordRef.current)
    setTooltip(true)
    setTimeout(() => {
      setTooltip(false)
    }, 2000)
  }

  const setBackgroundColor = (password) => {
    if (password && password.length === 1 && password.length <= 5) {
      pwdDescription = 'Bad password'
      return '#cb473e'
    } else if (password && password.length >= 6 && password.length <= 10) {
      pwdDescription = 'Weak password'
      return '#f07d58'
    } else if (password && password.length > 10) {
      pwdDescription = 'Strong password'
      return '#55a95d'
    } else {
      pwdDescription = 'Bad password'
      return '#cb473e'
    }
  }

  const handleEyeClick = () => {
    setShowPasswordField(!showPasswordField)
  }

  return (
    <>
      <PwdTypes />

      <div className="grid-container">
        <div
          className="relative flex h-40 max-w-6xl mx-auto mt-0 mb-3 border border-gray-400 rounded-md PwdInput col-12"
          style={{ backgroundColor: setBackgroundColor(password) }}
        >
          <div className="flex items-center w-full flex-nowrap">
            <div className="w-full p-1 text-2xl leading-normal text-left border border-white rounded-md h-2/3">
              <div className="relative flex items-center mb-2 justify-arround row">
                <input
                  ref={passwordRef}
                  type={showPasswordField ? 'password' : 'text'}
                  value={password}
                  className="w-full font-bold bg-transparent border-none outline-none h-1/2"
                  readOnly
                />

                <div className="PwdButton">
                  <div className="absolute w-auto h-auto p-0 -mr-4 space-x-4 transform -translate-y-1/2 top-full right-8">
                    <button
                      className="text-2xl border-none outline-none bg-none"
                      onClick={handleEyeClick}
                    >
                      <i
                        id="eye-icon"
                        className={
                          showPasswordField
                            ? 'mdi mdi-eye-outline'
                            : 'mdi mdi-eye-off-outline'
                        }
                      />
                    </button>
                    <button
                      className="text-2xl border-none outline-none bg-none"
                      onClick={copyClipBoard}
                    >
                      <Tooltip
                        displayTooltip={tooltip}
                        position="top"
                        tooltipContent="Copied!!"
                      >
                        <i className="far fa-copy" />
                      </Tooltip>
                    </button>
                    <button
                      className="text-2xl border-none outline-none bg-none"
                      onClick={() => generateNewPassword()}
                    >
                      <i className="fas fa-sync-alt" />
                    </button>
                  </div>
                </div>
              </div>
              <PwdStrong password={password} />
            </div>
          </div>
        </div>

        <PwdContainer
          // type={type}
          setPassword={setPassword}
          setRange={setRange}
          setPasswordProps={setPasswordProps}
          passwordRef={passwordRef}
        />
      </div>
    </>
  )
}

export default Display
