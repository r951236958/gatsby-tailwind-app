import React from "react"
import styled from "styled-components"

const H1Title = styled.h1.attrs({
  className: 'dark:text-white',
})`
  margin: ${props => props.margin};
  font-size: ${props => props.fontSize || "3rem"};
`

const Title = ({ text, children }) => {
  return (
  <>
    <H1Title>{text}{children}</H1Title>
  </>
  )
}

export default Title
