import React, {useState} from 'react'

export default function App() {
  const [name,setName] = useState("frank") 
  const [age,setage] = useState(100) 
  return (
    <div>
      <button onClick={()=>{
        console.log(name)
        setName("小明")
        setage(10)
      }}>click</button>  
      app-{name}-{age}
    </div>
  )
}
