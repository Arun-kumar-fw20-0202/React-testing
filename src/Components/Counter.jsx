import React, { useState } from 'react'

export const Counter = () => {
    const [counter, setCounter] = useState(0)

    const handleClick = (val) => {
        setCounter(counter+ val)
    }

  return (
    <>
        <h3 data-testid="counter_value">Counter: {counter}</h3>
        <button data-testid="add_value" onClick={()=>handleClick(5)}>Add</button>
        <button data-testid="reduce_value" onClick={()=>handleClick(-5)}>Reduce</button>
    </>
  )
}
