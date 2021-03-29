import React from 'react'

const PwdStrong = ({ password }) => {
  let pwdDescription = ''

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
    <div className="PwdStrong">
      <div
        className="ml-1 -mb-10 text-base text-white opacity-70"
        style={{ backgroundColor: setBackgroundColor(password) }}
      >
        {password && password.length > 10 ? (
          <>
            <i className="fas fa-check-circle"></i> {pwdDescription}
          </>
        ) : (
          <>
            <i className="fas fa-exclamation-circle"></i> {pwdDescription}
          </>
        )}
      </div>
    </div>
  )
}

export default PwdStrong
