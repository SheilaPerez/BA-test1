import './GeometricComponent.css'
import React from 'react'

// Casi siempre que tienes una molecula, deberías necesitar un ATOMS antes
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
        // eslint-disable-next-line radix
        value={sizeValue}
        onChange={handleChangeSize}
        className="inputName"
      />
      <label htmlFor="colorValue" className="label">
        {geometricForm} color
      </label>
      {/*
        Por accesibilidad falta el name y el id del input, pero al tener todo en un componente no puedes
        porque se repetirian y dañarian la accesibilidad.
      */}
      <input type="color" value={colorValue} onChange={handleChangeColor} />
      <div className={geometricClass} style={style} />
    </div>
  )
}

export default GeometricComponent
