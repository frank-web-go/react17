import React, { useContext, useReducer } from "react";

const intailState = {
  a: "1111",
  b: "1111",
};

const reducer = (prevState, action) => {
  let newState = {...prevState}
  switch(action.type) {
    case "change-a":
      newState.a = action.value
      // 重新渲染
      return newState
      case "change-b":
        newState.b = action.value
        // 重新渲染
        return newState  
    default:
      return prevState  
  }
};

const GlobalContext = React.createContext();
export default function App() {
  // 每次useReducer返回一个全新的对象，不能写在函数外面
  const [state, dispatch] = useReducer(reducer, intailState);
  return (
    <GlobalContext.Provider value={{
      state,
      dispatch
    }}>
      <div>
        <Child1 />
        <Child2 />
        <Child3 />
      </div>
    </GlobalContext.Provider>
  );
}

function Child1() {
  const {dispatch} = useContext(GlobalContext)
  return (
    <div style={{ background: "red" }}>
      <button onClick={()=>{
        dispatch({
          type:'change-a',
          value:"22222"
        })
      }}>改变a</button>
      <button onClick={()=>{
        dispatch({
          type:'change-b',
          value:"333333"
        })
      }}>改变b</button>
    </div>
  );
}

function Child2() {
  const {state} = useContext(GlobalContext)
  return (
    <div style={{ background: "yellow" }}>
       child2-{state.a}
    </div>
  )
}

function Child3() {
  const {state} = useContext(GlobalContext)
  return (
    <div style={{ background: "gray" }}>
      child3-{state.b}
    </div>
  )
}
