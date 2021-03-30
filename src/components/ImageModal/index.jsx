import React, { useRef, useState, useEffect } from 'react'

import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

import ModalContainer from './ModalContainer'

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`

// const Overlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.3);
// `

// const ModalContainer = styled.div`
//   width: 50%;
//   height: 50%;
//   background-color: white;
//   position: absolute; // ----.
//   top: 50%; //     |positioning the container
//   left: 50%; //     |in the middle
//   transform: translate(-50%, -50%); //  ----.
//   border-radius: 12px;
// `

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

const ImageModal = ({ handleClose, isOpen, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial={'initial'}
          animate={'isOpen'}
          exit={'exit'}
          variants={modalVariant}
          onClick={handleClose}
        >
          <ModalContainer handleClose={handleClose} isOpen={isOpen}>
            {children}
          </ModalContainer>
        </Overlay>
      )}
    </AnimatePresence>
  )
}

export default ImageModal
