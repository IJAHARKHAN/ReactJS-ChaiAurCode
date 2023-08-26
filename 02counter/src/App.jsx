import React, {useState, useEffect} from 'react'
import './App.css'




function App() {
  let [counter, setCounter] = useState(10);
  // setCounter(counter + 1);

  const handleAdd = () => {
    setCounter(counter + 1);
    if(counter >= 20){
      setCounter(counter === 20 );
     }

    
  }

  const handleRemove = () => {
    setCounter(counter - 1);
    if(counter <= 0){
      setCounter(counter === 0 );
     }
  }

  useEffect(()=>{
    setCounter(counter);
  },[]);

  return (
    <>
      <h1>Chai aur react {counter}</h1>

      <button onClick={handleAdd}>Add Number {counter}</button> &nbsp; <button onClick={handleRemove}>Remove Numbers {counter}</button>
    </>
  )
}

export default App
