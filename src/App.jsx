import React, { useEffect, useState } from 'react'
import GeometricComponent from './components/molecules/GeometricComponent'

function App() {
  const [triangleColorValue, setTriangleColorValue] = useState('#E5B8F4')
  const [circleColorValue, setCircleColorValue] = useState('#DBA39A')
  const [squareColorValue, setSquareColorValue] = useState('#6ECCAF')
  const [triangleSize, setTriangleSize] = useState(50)
  const [circleSize, setCircleSize] = useState(120)
  const [squareSize, setSquareSize] = useState(70)

  useEffect(() => {
    if (
      triangleColorValue === circleColorValue &&
      triangleColorValue === squareColorValue &&
      circleColorValue === squareColorValue
    ) {
      // eslint-disable-next-line no-alert, no-undef
      alert('Color match!')
    }
  }, [triangleColorValue, circleColorValue, squareColorValue])

  useEffect(() => {
    if (
      triangleSize === circleSize &&
      triangleSize === squareSize &&
      circleSize === squareSize
    ) {
      // eslint-disable-next-line no-alert, no-undef
      alert('Same size!')
    }
  }, [triangleSize, circleSize, squareSize])

  // Estas funciones no aportan gran valor y se recrean en cada render.
  // Mejor usar directamente como callback setTriangleColor.
  // También mejor setTriangleColor que setTriangleColorValue.
  const changeColorTriangle = (e) => {
    setTriangleColorValue(e.target.value)
  }
  const changeColorCircle = (e) => {
    setCircleColorValue(e.target.value)
  }
  const changeColorSquare = (e) => {
    setSquareColorValue(e.target.value)
  }
  const changeSizeTriangle = (e) => {
    setTriangleSize(parseInt(e.target.value, 10))
  }
  const changeSizeCircle = (e) => {
    setCircleSize(parseInt(e.target.value, 10))
  }
  const changeSizeSquare = (e) => {
    setSquareSize(parseInt(e.target.value, 10))
  }

  return (
    <div>
      <GeometricComponent
        geometricForm="Triangle"
        handleChangeSize={(e) => changeSizeTriangle(e)}
        sizeValue={triangleSize}
        // Los estilos deberían estar definidos a nivel de componente.
        // Mejor crear un componente por cada forma para tener un control granular y poder testearlo en el futuro.
        // Al ser formas básicas en web, en lugar de CSS usar SVG.
        // Crear un componente (Circle|Triangle|Square|...).jsx y validar las props. Tendras más control, mejor validación y claridad de código.
        // Te he dejado un ejemplo en atoms
        style={{
          borderBottom: `${triangleSize}px solid ${triangleColorValue}`,
          borderRight: `${triangleSize / 2}px solid transparent`,
          borderTop: `0 solid transparent`,
          borderLeft: `${triangleSize / 2}px solid transparent`,
        }}
        colorValue={triangleColorValue}
        // Aquí es triangle, y en los otros es Circle (escoge camelCase o PascalCase, pero se consistente).
        geometricClass="triangle"
        handleChangeColor={changeColorTriangle}
      />
      <GeometricComponent
        geometricForm="Circle"
        handleChangeSize={changeSizeCircle}
        sizeValue={circleSize}
        style={{
          backgroundColor: circleColorValue,
          width: `${circleSize}px`,
          height: `${circleSize}px`,
        }}
        colorValue={circleColorValue}
        geometricClass="circle"
        handleChangeColor={changeColorCircle}
      />
      <GeometricComponent
        geometricForm="Square"
        handleChangeSize={changeSizeSquare}
        sizeValue={squareSize}
        style={{
          backgroundColor: squareColorValue,
          width: `${squareSize}px`,
          height: `${squareSize}px`,
        }}
        colorValue={squareColorValue}
        geometricClass="square"
        handleChangeColor={changeColorSquare}
      />
    </div>
  )
}

export default App
