import React, { useEffect, useState } from 'react'

export default function App() {
  const [name,setName] = useState("frank")
  useEffect(()=>{
    // console.log(4444444)
    setName(name.substring(0,1).toUpperCase()+name.substring(1))
  },[name]) 
//  第一次执行一次，之后name(依赖)更新也会执行 
  return (
    <div>
      app-{name}
      <button onClick={()=>{
        setName("Xiaoming")
      }}>click</button>
    </div>
  )
}
