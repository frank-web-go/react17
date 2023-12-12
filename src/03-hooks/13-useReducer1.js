import React, { useReducer } from 'react'

// 处理函数
const reducer = (prevState,action) =>{
  console.log("reducer",prevState,action)
  //不能影响原状态   
  let newState = {...prevState}
  switch(action.type) {
    case "frank-minus":
        newState.count --
       return newState  
    case "frank-add":
        newState.count ++
       return newState 
    default:
       return prevState
  }
}
// 外部的对象
const intialState = {
  count:0
}

export default function App() {
  const [state, dispatch] = useReducer(reducer,intialState)  
  return (
    <div>
      <button onClick={()=>{
        dispatch({
            // 通知
           type:"frank-minus" 
        })
      }} >-</button>
        {state.count}
      <button onClick={()=>{
        dispatch({
           type:"frank-add" 
        })
      }}>+</button>
    </div>
  )
}
