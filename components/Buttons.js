import { useState } from 'react'
import Button from '@mui/material/Button'



const Buttons = () => {
  const [color, setColor] = useState('primary')
  const [label, setLabel] = useState('ENTRAR')

  const handleClick= () => {
    color === 'primary' ? setColor('error') : setColor('primary')
    label === 'ENTRAR' ? setLabel('SALIR') : setLabel('ENTRAR')
  }
  
  return (
    <Button onClick={handleClick} variant="contained" color={color}>{label}</Button>
  )
}

export default Buttons