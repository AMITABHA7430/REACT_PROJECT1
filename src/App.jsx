import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


 let [counter,setcounter] = useState(0);
const addValue=()=>{
setcounter(counter+1);
}
const removeValue=()=>{
  setcounter(counter-1);
}
  return (
    <>
    <h1>chai or react| amitabha</h1>
    <h2>counter value:{counter}</h2>
    <button
    onClick={addValue}
    >add value</button>
    <br />
    <button
    onClick={removeValue}
    >remove value</button>
    </>
     
  )
}

export default App
