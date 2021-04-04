import React, { useState } from 'react'

import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
`

// const Overlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.3);
// `

const ImageHover = styled.div`
  height: 100%;
  
  figure {
    position: relative;
    cursor: pointer;

    > div.likes {
      cursor: pointer;
      opacity: 1;
    }

    &:hover::before {
      -webkit-animation: circle 0.75s;
      animation: circle 1s;
    }

    @keyframes circle {
      0% {
        opacity: 1;
      }
      40% {
        opacity: 1;
      }
      100% {
        width: 110%;
        height: 110%;
        opacity: 0;
      }
    }
    
    &:before {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 2;
      display: block;
      content: '';
      width: 0;
      height: 0;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 2%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      opacity: 0;
    }

    .likes {
      position: absolute;
      bottom: 5px;
      right: 5px;
      transition: 0.3s ease-in-out;
      opacity: 0;
    }
  }
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

// const containerVariant = {
//   initial: { top: '-50%', transition: { type: 'spring' } },
//   isOpen: { top: '50%' },
//   exit: { top: '-50%' },
// }

const ImageModal = ({ url, alt, description }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleShowDialog = () => {
    setIsOpen(!isOpen)
  }
  return (
    <AnimatePresence>
      <div className="flex items-center justify-center w-full h-full max-h-screen">
        <img
          src={url}
          alt={`${alt} with dialog`}
          className="cursor-pointer w-200"
          onClick={handleShowDialog}
        />
        <div className="absolute">
          {isOpen && (
            <Overlay
              initial={'initial'}
              animate={'isOpen'}
              exit={'exit'}
              variants={modalVariant}
              onClick={handleShowDialog}
            >
              <div className="flex items-center justify-end w-full h-12 py-4 bg-black">
                <button
                  className="absolute inline-flex items-center justify-center w-8 h-8 text-2xl text-gray-100 hover:text-white right-2 top-2"
                  onClick={handleShowDialog}
                >
                  <i className="mdi mdi-close" />
                </button>
              </div>
              <ImageHover>
                <dialog
                  className="absolute inset-y-0 flex items-center justify-center max-w-screen-lg p-4 mx-auto my-auto bg-white rounded-md bg-opacity-70"
                  open
                  onClick={handleShowDialog}
                >
                  <figure className="relative">
                    <img src={url} alt={alt} onClick={handleShowDialog} />
                    <div className="absolute px-2 py-2 bg-black bg-opacity-50 likes">
                      <span className="text-2xl text-white">{description}</span>
                    </div>
                  </figure>
                </dialog>
              </ImageHover>
            </Overlay>
          )}
        </div>
      </div>
    </AnimatePresence>
  )
}

export default ImageModal
