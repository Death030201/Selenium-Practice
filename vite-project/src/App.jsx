
import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count+1)}>Increase</button>
      <div>{count}</div>
    </div>
  )
}

export default App