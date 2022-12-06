import React, { useEffect, useState } from 'react'
import Circle from './components/atoms/Circle/Circle'
import Square from './components/atoms/Square/Square'
import Triangle from './components/atoms/Triangle/Triangle'
import GeometricComponent from './components/molecules/GeometricComponent'

function App() {
  const [triangleColor, setTriangleColor] = useState('#E5B8F4')
  const [circleColor, setCircleColor] = useState('#DBA39A')
  const [squareColor, setSquareColor] = useState('#6ECCAF')
  const [triangleSize, setTriangleSize] = useState(50)
  const [circleSize, setCircleSize] = useState(120)
  const [squareSize, setSquareSize] = useState(70)

  useEffect(() => {
    if (
      triangleColor === circleColor &&
      triangleColor === squareColor &&
      circleColor === squareColor
    ) {
      // eslint-disable-next-line no-alert, no-undef
      alert('Color match!')
    }
  }, [triangleColor, circleColor, squareColor])

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

  return (
    <div>
      <GeometricComponent
        color={triangleColor}
        geometricForm="Triangle"
        handleChangeSize={(e) => setTriangleSize(parseInt(e.target.value, 10))}
        handleChangeColor={(e) => setTriangleColor(e.target.value)}
      >
        <Triangle color={triangleColor} size={triangleSize} />
      </GeometricComponent>
      <GeometricComponent
        color={circleColor}
        geometricForm="Circle"
        handleChangeSize={(e) => setCircleSize(parseInt(e.target.value, 10))}
        handleChangeColor={(e) => setCircleColor(e.target.value)}
      >
        <Circle color={circleColor} size={circleSize} />
      </GeometricComponent>
      <GeometricComponent
        color={squareColor}
        geometricForm="Square"
        handleChangeSize={(e) => setSquareSize(parseInt(e.target.value, 10))}
        handleChangeColor={(e) => setSquareColor(e.target.value)}
      >
        <Square size={squareSize} color={squareColor} />
      </GeometricComponent>
    </div>
  )
}

export default App
