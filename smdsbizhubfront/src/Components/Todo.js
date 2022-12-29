import React, { useState } from 'react'



const Counter = () => {
  let count = 0;
  const [counter, setCounter] = useState(count);
  return (
    <div>
      <button onClick={() => setCounter + 1}>{setCounter}</button>
    </div>
  )
}

export default Counter;