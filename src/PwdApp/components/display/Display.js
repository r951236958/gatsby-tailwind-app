import React, { useState, useRef } from 'react'

import './Display.css'
import { Container } from '../container/Container'
import Button from '../container/button/Button'
import Tooltip from '../container/tooltip/Tooltip'
import { generatePassword, copyToClipBoard } from '../../utils/Helper'

const Display = () => {
  const [password, setPassword] = useState('')
  const [rangeValue, setRange] = useState()
  const [passwordProps, setPasswordProps] = useState()
  const [tooltip, setTooltip] = useState(false)
  const [type, setType] = useState('password')
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

  const onSelectTag = (e) => {
    setType(e.target.value)
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

  return (
    <>
      <div className="flex flex-col justify-center max-w-full py-6 space-y-4 bg-gray-700 rounded-md">
        {/* 
        <div className="flex flex-wrap p-5">
          <div className="flex flex-wrap w-full pr-0 md:w-1/3 md:pr-4">
            <div className="relative w-full border-none">
              <label
                htmlFor="password-type"
                className="block w-full mb-2 text-base text-gray-200"
              >
                Password Type
              </label>
              <select
                id="password-type"
                name="type"
                value={type}
                onChange={onSelectTag}
                className="inline-block w-full py-3 pl-3 pr-8 leading-tight text-gray-200 bg-gray-600 border-none rounded appearance-none form-control form-control-sm"
                // style={selectTagStyle}
              >
                <option value="password">Random Password</option>
                <option value="pin">PIN</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <i className="text-gray-400 fas fa-chevron-down" />
              </div>
            </div>
          </div>
        </div>
        */}
        <div className="row">
          <div
            className="col-10 password-display-container"
            style={{ backgroundColor: setBackgroundColor(password) }}
          >
            <div className="w-full">
              <div className="relative flex items-center justify-around password-display">
                <input
                  ref={passwordRef}
                  type="text"
                  value={password}
                  className="password-display-input"
                  readOnly
                />

                <div className="space-x-6 password-display-icons">
                  <Button
                    className="copy-btn"
                    iconClass="far fa-copy"
                    handleClick={copyClipBoard}
                  />
                  <Button
                    className="generate-btn"
                    iconClass="fas fa-sync-alt"
                    handleClick={() => generateNewPassword()}
                  />

                  <Tooltip
                    message="Copied"
                    position="left"
                    displayTooltip={tooltip}
                  />
                </div>
              </div>
              <div className="password-description">
                {password && password.length > 10 ? (
                  <>
                    <i className="fas fa-check-circle"></i> {pwdDescription}
                  </>
                ) : (
                  <>
                    <i className="fas fa-exclamation-circle"></i>{' '}
                    {pwdDescription}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <Container
          type={type}
          setPassword={setPassword}
          setRange={setRange}
          setPasswordProps={setPasswordProps}
          passwordRef={passwordRef}
        />
      </div>
    </>
  )
}

// const selectTagStyle = {
//   backgroundColor: 'inherit',
//   color: '#506175',
//   width: '20%',
//   height: 'auto',
//   marginLeft: '-4px',
// }

export default Display
