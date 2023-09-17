import { useState } from 'react'
import './App.css'

function App() {
 const [color, setColor] = useState('olive');

  return (
    <>
     <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      

      <div className='w-full flex flex-wrap justify-center fixed bottom-12 inset-x- px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-2 py-2 rounded-3xl'>
        <button className='px-4 outline-none py-1 text-black rounded-full border-slate-200 border-2' style={{backgroundColor:'white'}} onClick={() => setColor('white')}>White</button>
          <button className='px-4 outline-none py-1 text-white rounded-full' style={{backgroundColor:'red'}} onClick={() => setColor('red')}>Red</button>
          <button className='px-4 outline-none py-1 text-white rounded-full' style={{backgroundColor:'green'}} onClick={() => setColor('green')}>Green</button>
          <button className='px-4 outline-none py-1 text-white rounded-full' style={{backgroundColor:'blue'}} onClick={() => setColor('blue')}>Blue</button>
          <button className='px-4 outline-none py-1 text-white rounded-full' style={{backgroundColor:'orange'}} onClick={() => setColor('orange')}>Orange</button>
          <button className='px-4 outline-none py-1 text-black rounded-full' style={{backgroundColor:'yellow'}} onClick={() => setColor('yellow')}>Yellow</button>
          <button className='px-4 outline-none py-1 text-white rounded-full' style={{backgroundColor:'black'}} onClick={() => setColor('black')}>Black</button>
          <button className='px-4 outline-none py-1 text-white rounded-full' style={{backgroundColor:'purple'}} onClick={() => setColor('purple')}>Purple</button>
          <button className='px-4 outline-none py-1 text-black rounded-full' style={{backgroundColor:'aqua'}} onClick={() => setColor('aqua')}>Aqua</button>
          <button className='px-4 outline-none py-1 text-white rounded-full' style={{backgroundColor:'maroon'}} onClick={() => setColor('maroon')}>Maroon</button>
        </div>
      </div>
      </div> 
    </>
  )
}

export default App
