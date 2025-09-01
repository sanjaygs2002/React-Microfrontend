import React, { useState } from 'react'

function Decrement() {
    const[state,setState]=useState(0);
  return (
    <>
    <h1>Count:{state}</h1>
    <button onClick={()=>setState(state-1)}>Decrement</button>
    </>
  )
}

export default Decrement;