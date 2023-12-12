import React, { useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import "./css/index.css";

// 跨组件通信方案
const GlobalContext = React.createContext(); // 创建context上下文对象

const intialState = {
  info:"",
  filmList:[]
}

// 状态放在外面管理，每个组件是无状态的
const reducer = (prevState,action) =>{
  let newState = {...prevState}
  switch(action.type) {
    case "change-filmlist":
      newState.filmList = action.value
    return newState 
    case "change-info":
      newState.info = action.value
    return newState  
    default:
      return prevState 
  }
}

export default function App (){
   const [state,dispatch] = useReducer(reducer,intialState)
   useEffect(()=>{
    axios.get("/test.json").then((res) => {
        dispatch({
          type:'change-filmlist',
          value:res.data.data.films
        })
      })
   },[])
   return (
    //供应商                必须是value
    //value相当于提供的服务
    <GlobalContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      <div>
        {state.filmList.map((item) => (
          <FilmItem {...item} key={item.filmId}></FilmItem>
        ))}
        <FilmDetail></FilmDetail>
      </div>
    </GlobalContext.Provider>
  );
}

function FilmItem(props) {
  let { name, poster, grade, synopsis } = props;
  const {dispatch} = useContext(GlobalContext)
  return (
    <div
      className="filmitem"
      onClick={() => {
        dispatch({
          type:'change-info',
          value:synopsis
        })
      }}
    >
      <img src={poster} alt={name}></img>
      <h4>{name}</h4>
      <div>观众评分：{grade}</div>
    </div>
  )    
}

function FilmDetail() {
  const {state} = useContext(GlobalContext) 
  return <div className="filmdetail">{state.info}</div>
}

