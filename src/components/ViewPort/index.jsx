import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

const Viewport = ({ children }) => {
  return (
    <Helmet>
      {/* To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to your <head> element. */}
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      {children}
    </Helmet>
  )
}

Viewport.PropTypes = {
  children: PropTypes.node,
}

export default Viewport