import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [mainValue, setMainValue] = useState(1)
  // let [multipliedValue, setMultipliedValue] = useState(1)
  let multipliedValue = mainValue * 5;

let handleMultiply = () =>{
  // setMultipliedValue(mainValue * 5)
  setMainValue(mainValue + 1)

}





  return (
    <>
      <h1> Main Value: {mainValue}</h1>
      <button
      onClick={handleMultiply}
      >Click to multiply by 5</button>
      <h2>Multiplied value: {multipliedValue}</h2>
    </>
  )
}

export default App
