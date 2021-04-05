import React from 'react'

const Toggle3 = ({ toggled, onClick }) => {
    return (
      <div className="ddt">
        <div
          onClick={onClick}
          className={`h-10 w-100 dark-mode--toggle${toggled ? ' night' : ''}`}
        >
          <div
            className={`w-8 h-8 rounded-full notch ${
              toggled ? 'transform translate-x-full' : null
            }`}
          >
            <div className="shadow-lg w- text- crater" />
            <div className="shadow-2xl crater" />
          </div>
          <div>
            <div
              className={`shape sm ${
                toggled ? 'transform -translate-x-80' : null
              }`}
            />
            <div
              className={`shape sm ${
                toggled ? 'transform -translate-x-40' : null
              }`}
            />
            <div
              className={`shape md ${
                toggled ? 'transform -translate-x-10' : null
              }`}
            />
            <div
              className={`shape lg ${
                toggled ? 'transform -translate-x-10' : null
              }`}
            />
          </div>
        </div>
      </div>
    )
}

export default Toggle3
