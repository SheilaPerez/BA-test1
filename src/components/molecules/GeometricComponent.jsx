import './GeometricComponent.css'
import React from 'react'
import PropTypes from 'prop-types'

function GeometricComponent({
  geometricForm,
  color,
  handleChangeColor,
  handleChangeSize,
  size,
  children,
}) {
  return (
    <div>
      <label htmlFor="size" className="label">
        {geometricForm} Size
      </label>
      <input
        type="number"
        value={size}
        onChange={handleChangeSize}
        className="inputName"
      />
      <label htmlFor="color" className="label">
        {geometricForm} color
      </label>
      <input type="color" value={color} onChange={handleChangeColor} />
      {children}
    </div>
  )
}

GeometricComponent.propTypes = {
  geometricForm: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  handleChangeColor: PropTypes.func.isRequired,
  handleChangeSize: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
}

export default GeometricComponent
