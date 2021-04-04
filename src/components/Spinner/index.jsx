import React, {  useState} from 'react'
import styled from 'styled-components'

const SpinnerOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
`

const Spinner = () => {
  return (
    <>
      <SpinnerOverlay>
        <section
          id="spinner1"
          className="flex items-center w-11/12 mx-auto space-y-10 h-400"
        >
          <div className="spinner-fading-circle">
            <div className="spinner-circle spinner-circle--1"></div>
            <div className="spinner-circle spinner-circle--2"></div>
            <div className="spinner-circle spinner-circle--3"></div>
            <div className="spinner-circle spinner-circle--4"></div>
            <div className="spinner-circle spinner-circle--5"></div>
            <div className="spinner-circle spinner-circle--6"></div>
            <div className="spinner-circle spinner-circle--7"></div>
            <div className="spinner-circle spinner-circle--8"></div>
            <div className="spinner-circle spinner-circle--9"></div>
            <div className="spinner-circle spinner-circle--10"></div>
            <div className="spinner-circle spinner-circle--11"></div>
            <div className="spinner-circle spinner-circle--12"></div>
          </div>
          <div className="w-full font-medium text-center h-100 text-cyan-700 sm:text-lg md:text-lg lg:text-xl xl:text-2xl">
            <span role="img" aria-label="bear image">
              🐻
            </span>{' '}
            Loading...
          </div>
        </section>
      </SpinnerOverlay>
    </>
  )
}

export default Spinner
