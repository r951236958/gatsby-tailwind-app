import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 50%;
  height: 50%;
  background-color: white;
  position: absolute; // ----.
  top: 50%; //     |positioning the container
  left: 50%; //     |in the middle
  transform: translate(-50%, -50%); //  ----.
  border-radius: 12px;
`

const CloseButton = styled.svg`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 18px;
  top: 18px;
  cursor: pointer;
`

const modalVariant = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 },
}

const containerVariant = {
  initial: { top: '-50%', transition: { type: 'spring' } },
  isOpen: { top: '50%' },
  exit: { top: '-50%' },
}


const ModalContainer = ({ handleClose, children, isOpen }) => {
    const node = useRef()

    useEffect(() => {
    // add when mounted
    document.addEventListener('mousedown', handleClick)
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return
    }
    handleClose
  }

    return (
      <div ref={node}>
        {isOpen && (
          <div className="absolute w-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-lg top-1/2 left-1/2 h-1/2">
            <button
            className="absolute w-6 h-6 text-xl text-gray-800 focus:outline-none right-6 top-6"
              onClick={handleClose}
              
            >
              <span className="mdi mdi-close" />
            </button>
            {children}
          </div>
        )}
      </div>
    )
}

export default ModalContainer
