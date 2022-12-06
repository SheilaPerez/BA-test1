import React from 'react'
import PropTypes from 'prop-types'

function Circle({ size, color }) {
  return (
    <div>
      <svg width={size} height={size} fill={color}>
        <circle cx={size / 2} cy={size / 2} r={size / 2} />
      </svg>
    </div>
  )
}

Circle.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
}

export default Circle
