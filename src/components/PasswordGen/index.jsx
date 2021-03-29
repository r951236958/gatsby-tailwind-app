import React, { useState, useRef } from 'react'
import { generatePassword, copyToClipBoard } from '../../utils/Helper'
import Tooltip from 'components/Tooltip'

const PasswordGen = () => {
    const [password, setPassword] = useState('')
    const [rangeValue, setRange] = useState()
    const [passwordProps, setPasswordProps] = useState()
    // const [type, setType] = useState('password')
    const [tooltip, setTooltip] = useState(false)
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

    // const onSelectTag = (e) => {
    //   setType(e.target.value)
    // }

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
        <div className="row">
          <div
            className="relative flex h-40 max-w-6xl mx-auto mt-0 mb-3 border border-gray-400 rounded-md col-12"
            style={{ backgroundColor: setBackgroundColor(password) }}
          >
            <div className="flex items-center w-full flex-nowrap">
              <div className="w-full pl-1 text-2xl leading-normal text-left border border-white h-2/3">
                <input
                  ref={passwordRef}
                  type="text"
                  value={password}
                  className="w-full font-bold bg-transparent border-none outline-none h-1/2"
                  readOnly
                />

                <div className="ml-1 -mb-10 text-base text-white opacity-70">
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

            <div className="absolute w-auto h-auto p-0 -mr-4 leading-normal transform -translate-y-1/2 top-1/2 right-8">
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
      </>
    )
}

export default PasswordGen
