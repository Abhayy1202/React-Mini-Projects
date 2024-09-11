import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let counter = 15
  const [count, setCount] = useState(counter)


const addVAl = ()=>{
  if (count<20) {
    
    console.log("val added",count)
    setCount(count+1)
  }
}

const removeVal=()=>{
if (count>0) {
  console.log("val dec",count)
  setCount(count-1)
}
}
  return ( 
    <>
       <h1>Chai Aur react</h1>
       <h2>Counter value:{count}</h2>
       <br />
       <button 
       onClick={addVAl}>Add value</button>    
       <br /> 
       <button
       onClick={removeVal}>Remove value</button>    
       <p>footer:{count}</p> 
    </>
  )
}

export default App
