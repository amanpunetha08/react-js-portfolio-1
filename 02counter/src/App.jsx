import { useState } from 'react'
import './App.css'

function App() {
  const [counter,setCounter]= useState(15)
  // let counter = 15

  const addValue = ()=>{
    setCounter((prevCounter)=> prevCounter+1)
    setCounter((prevCounter)=> prevCounter+1)
    setCounter((prevCounter)=> prevCounter+1)
    setCounter((prevCounter)=> prevCounter+1)
  }
  const removeValue =()=>{
    setCounter(counter-1)
  }
  return (
    <>
     <h1> React course with Aman {counter}</h1>
     <h2>Counter value</h2>
     <button
     onClick={addValue}
     >Add Value</button> {" "}
     <button
     onClick={removeValue}
     >Remove Value</button>
     <h3>Footer:{counter}</h3>
    </>
  )
}

export default App
