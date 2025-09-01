import React, { useState } from 'react'

function Count() {
    const [state,setState]=useState(0);
  return (
    <>
    <h1>Count:{state}</h1>
    <button onClick={()=>setState(state+1)}>Increment</button>
    </>
  )
}

export default Count