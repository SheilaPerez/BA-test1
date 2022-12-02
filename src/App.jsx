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
    setTriangleSize(e.target.value)
  }
  const changeSizeCircle = (e) => {
    setCircleSize(e.target.value)
  }
  const changeSizeSquare = (e) => {
    setSquareSize(e.target.value)
  }

  return (
    <div>
      <GeometricComponent
        geometricForm="Triangle"
        handleChangeSize={(e) => changeSizeTriangle(e)}
        sizeValue={triangleSize}
        style={{
          borderBottom: `${triangleSize}px solid ${triangleColorValue}`,
          borderRight: `${triangleSize / 2}px solid transparent`,
          borderTop: `0 solid transparent`,
          borderLeft: `${triangleSize / 2}px solid transparent`,
        }}
        colorValue={triangleColorValue}
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
