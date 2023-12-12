import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./css/index.css";

// 跨组件通信方案
const GlobalContext = React.createContext(); // 创建context上下文对象

export default function App (){
   const [filmList, setFilmList] = useState([])
   const [info, setinfo] = useState("")
   useEffect(()=>{
    axios.get("/test.json").then((res) => {
        console.log("res: ", res.data.data.films);
        setFilmList(res.data.data.films)
      })
   },[])
   return (
    //供应商                必须是value
    //value相当于提供的服务
    <GlobalContext.Provider
      value={{
        call: "打电话",
        sms: "短信",
        info,
        changeInfo: (value) => {
          setinfo(value)
        },
      }}
    >
      <div>
        {filmList.map((item) => (
          <FilmItem {...item} key={item.filmId}></FilmItem>
        ))}
        <FilmDetail></FilmDetail>
      </div>
    </GlobalContext.Provider>
  );
}

function FilmItem(props) {
  let { name, poster, grade, synopsis } = props;
  const value = useContext(GlobalContext)
//   console.log('value: ', value);
  return (
    <div
      className="filmitem"
      onClick={() => {
        value.changeInfo(synopsis);
      }}
    >
      <img src={poster} alt={name}></img>
      <h4>{name}</h4>
      <div>观众评分：{grade}</div>
    </div>
  )    
}

function FilmDetail() {
  console.log("FilmDetail") 
  const value = useContext(GlobalContext)  
  return <div className="filmdetail">{value.info}</div>
}

