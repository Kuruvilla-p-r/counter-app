import React, { useState } from 'react'

function Counter() {
  //state creation // var counter = 0

  const [ counter,setCounter ] = useState(0)

  function incrementCounter() {
    //increment counter value by 1
    setCounter(counter+1)
  }

  function decrementCounter() {
    if (!counter == 0) {
      setCounter(counter-1)
    }
  }
  function resetCounter() {
    setCounter(0)
  }

  return (
    <div className='text-center m-5 p-5'>
      <div className='m-5'>
        <h1>Counter Application</h1>
        <h1>{counter}</h1>
        <button onClick={incrementCounter} className='btn btn-primary m-3'>Increment</button>
        <button onClick={decrementCounter} className='btn btn-danger m-3'>Decrement</button>
        <button onClick={resetCounter} className='btn btn-success m-3'>Reset</button>
      </div>
    </div>
  )
}

export default Counter