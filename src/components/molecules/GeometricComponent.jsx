import './GeometricComponent.css'
import React from 'react'

function GeometricComponent({
  geometricForm,
  geometricClass,
  colorValue,
  handleChangeColor,
  style,
  handleChangeSize,
  sizeValue,
}) {
  return (
    <div>
      <label htmlFor="sizeValue" className="label">
        {geometricForm} Size
      </label>
      <input
        type="number"
        value={sizeValue}
        onChange={handleChangeSize}
        className="inputName"
      />
      <label htmlFor="colorValue" className="label">
        {geometricForm} color
      </label>
      <input type="color" value={colorValue} onChange={handleChangeColor} />
      <div className={geometricClass} style={style} />
    </div>
  )
}

export default GeometricComponent
