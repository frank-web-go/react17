// ref 保存临时变量 原理: 闭包
import React, { useRef, useState } from 'react'

export default function App() {
  const [count,setCount] = useState(0)
  // useRef 记忆函数，记住变量
  var mycount = useRef(0)
  return (
    <div>
      <button onClick={()=>{
        setCount(count + 1)
        mycount.current++
      }}>click</button>
      {count}-{mycount.current}
    </div>
  )
}

// ref作用：
// 1.保存临时变量
// 2.绑在组件上，dom操作，组件通信