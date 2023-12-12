import React, { useState } from 'react'

export default function App() {
  const [count,setCount] = useState(0)
  // useState 记忆函数，记住状态
  var mycount = 0
  return (
    <div>
      <button onClick={()=>{
        setCount(count + 1)
      }}>click</button>
      {count}-{mycount}
    </div>
  )
}
