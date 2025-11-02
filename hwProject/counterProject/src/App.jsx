import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // useState is use to change the UI in dom propagation useState me 2 chize return hoti ha array ke form me 1st value function.
  let [counter, setCounter] = useState(15);
  
  // let counter = 15;
  const addVlaue = ()=>{
    counter = counter+1;
    setCounter(counter);
    console.log("clicked", counter);
  }

  const removeValue = ()=>{
    counter = counter-1;
    setCounter(counter);
    console.log("clicked minus",counter);
  }
  return (
    <>
      <h1>coding</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addVlaue}
      >Add value</button>
      <br />
      <button
      onClick={removeValue}
      >Decrease value</button>

    </>
  )
}

export default App
