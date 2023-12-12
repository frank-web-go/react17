import React, { useEffect, useState } from "react";
import axios from "axios";
export default function App() {
  const [list, setList] = useState([]);
  // axios.get("/test.json").then(res=>{
  //   console.log(res.data)
  //   //setList 会重新执行整个函数，死循环
  //   setList(res.data.data.films)
  // })

  // 使用副作用
  useEffect(() => {
    axios.get("/test.json").then((res) => {
      console.log(res.data);
      setList(res.data.data.films);
    });
  }, []); //传空数组代表副作用函数不依赖任何东西，所以只会执行一次

  // useEffect可以注册多次
  useEffect(() => {
    axios.get("/test.json").then((res) => {
      console.log(res.data);
      setList(res.data.data.films);
    });
  }, []);

  return (
    <div>
      {list.map((item) => (
        <li key={item.filmId}>{item.name}</li>
      ))}
    </div>
  );
}

// 类似于componentDidMount & componentDidUpdate