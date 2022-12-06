import React from 'react'
import PropTypes from 'prop-types'

function Triangle({ color, size }) {
  return (
    <div>
      <svg width={size} height={size} fill={color}>
        <polygon points={`${size / 2}, 0 0, ${size} ${size},${size} `} />
      </svg>
    </div>
  )
}

Triangle.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
}

export default Triangle
