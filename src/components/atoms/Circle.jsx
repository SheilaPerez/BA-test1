function Circle({ size = 100, color = '#FF0000' }) {
  return (
    <svg height={size} width={size}>
      <circle cx={size / 2} cy={size / 2} r={size / 2} fill={color} />
    </svg>
  )
}

export default Circle
