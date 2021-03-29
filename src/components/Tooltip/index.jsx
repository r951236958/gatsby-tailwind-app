import React from 'react'
import PropTypes from 'prop-types'

const Tooltip = ({
  tooltipContent,
  position,
  color,
  backgroundColor,
  children,
  displayTooltip,
}) => {
  // const [show, setShow] = useState(false)

  // const showTooltip = () => {
  //   setShow(true)
  // }

  // const hideTooltip = () => {
  //   setShow(false)
  // }

  return (
    <span
      className="tooltip"
      // onMouseOver={showTooltip}
      // onMouseLeave={hideTooltip}
    >
      {displayTooltip && tooltipContent && (
        <span
          className={`tooltip-message
 on-${position ? position : 'top'}`}
          dangerouslySetInnerHTML={{ __html: tooltipContent }}
          style={{
            color: color ? color : '#ffffff',
            backgroundColor: backgroundColor ? backgroundColor : '#171616',
          }}
        />
      )}
      {children}
    </span>
  )
}

Tooltip.propTypes = {
  tooltipContent: PropTypes.string,
  position: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
}

export default Tooltip