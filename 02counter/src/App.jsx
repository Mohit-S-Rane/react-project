import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCount] = useState(0)

  const addValue = () =>{
    if(counter < 20){
      counter = counter + 1
      setCount(counter)
    }
  }

  const removeValue = () =>{
    if(counter > 0){
      counter = counter - 1
      setCount(counter)
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button> 
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
