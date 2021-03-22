import React, { useRef, useState } from "react"
import { copyToClipBoard, generatePassword } from "../../../utils/Helper"
import Button from "../Container/Button"
import { Container } from "../Container/Container"
import Tooltip from "../Container/Tooltip"
import "./Display.css"

const Display = () => {
  const [password, setPassword] = useState("")
  const [rangeValue, setRange] = useState()
  const [passwordProps, setPasswordProps] = useState()
  const [tooltip, setTooltip] = useState(false)
  const [type, setType] = useState("password")
  const passwordRef = useRef(null)
  let pwdDescription = ""

  const generateNewPassword = () => {
    const pwd =
      rangeValue > 3
        ? generatePassword(passwordProps, rangeValue)
        : generatePassword(passwordProps, 3)
    setPassword(pwd)
  }

  const copyClipBoard = e => {
    e.preventDefault()
    copyToClipBoard(passwordRef.current)
    setTooltip(true)
    setTimeout(() => {
      setTooltip(false)
    }, 2000)
  }

  const onSelectTag = e => {
    setType(e.target.value)
  }

  const setBackgroundColor = password => {
    if (password && password.length === 1 && password.length <= 5) {
      pwdDescription = "Bad password"
      return "#cb473e"
    } else if (password && password.length >= 6 && password.length <= 10) {
      pwdDescription = "Weak password"
      return "#f07d58"
    } else if (password && password.length > 10) {
      pwdDescription = "Strong password"
      return "#55a95d"
    } else {
      pwdDescription = "Bad password"
      return "#cb473e"
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center max-w-full space-y-4 bg-gray-700">
        <div className="flex flex-wrap p-5 ">
          <div className="flex flex-wrap w-full pr-0 md:w-1/3 md:pr-4">
            <label className="block w-full mb-2 text-base text-gray-200">
              Password Type
            </label>
            <div className="relative w-full border-none">
              <select
                name="type"
                value={type}
                onChange={onSelectTag}
                className="inline-block w-full py-3 pl-3 pr-8 leading-tight text-gray-200 bg-gray-600 border-none rounded appearance-none"
              >
                <option className="pt-6" value="password">
                  Random Password
                </option>
                <option value="pin">PIN</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <i className="text-gray-400 fas fa-chevron-down" />
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 row">
          <div
            className="col-12 password-display-container"
            style={{ backgroundColor: setBackgroundColor(password) }}
          >
            <div style={{ width: "100%" }}>
              <div className="flex flex-wrap content-center password-display">
                <input
                  ref={passwordRef}
                  type="text"
                  value={password}
                  className="password-display-input"
                  readOnly
                />
              </div>

              <div className="ml-2 -mt-10 text-base font-semibold password-description opacity-70">
                {password && password.length > 10 ? (
                  <span>
                    <i className="fas fa-check-circle" /> {pwdDescription}
                  </span>
                ) : (
                  <sapn>
                    <i className="fas fa-exclamation-circle" /> {pwdDescription}
                  </sapn>
                )}
              </div>
            </div>

            <div className="flex items-center content-center space-x-4 password-display-icons">
              <Button
                className="my-auto copy-btn"
                iconClass="far fa-copy"
                handleClick={copyClipBoard}
              />
              <Button
                className="my-auto generate-btn"
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
//   backgroundColor: "inherit",
//   color: "#506175",
//   width: "20%",
//   height: "auto",
//   marginLeft: "-4px",
// }

export default Display
