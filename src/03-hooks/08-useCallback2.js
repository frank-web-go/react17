// 记忆函数
import React, { useCallback, useState, useMemo } from "react";
export default function App() {
  const [myname, setname] = useState("frank");
  const [text, settext] = useState("");
  const [list, setList] = useState(["aa", "bb", "cc"]);
  // useCallback(记忆函数) 
  // 防止因为组件重新渲染，导致方法被重新创建 ，起到缓存作用; 只有第二个参数 变化了，才重新声明一次
  
  // 使用场景：没有相关状态要缓存时
  const handleChange = useCallback((evt) => {
    console.log("handleChange", evt.target.value);
    settext(evt.target.value);
  },[])
  
  // useCallback缓存，内部的状态也会被缓存
  const handleAdd = useCallback(() => {
    console.log(text);
    setList([...list, text]);
    settext("");
  },[list,text])

  const handleDel = useMemo(
    () => (index) => {
    let newlist = [...list];
    newlist.splice(index, 1);
    setList(newlist);
  },[list])

  return (
    <div>
      {myname} - <button onClick={()=>{
        setname("xiaoming")
      }}>change-myname</button>
      <input onChange={handleChange} value={text}></input>
      <button onClick={handleAdd}>add</button>
      <ul>
      {list.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => handleDel(index)}>del</button>
        </li>
      ))}
      </ul>
      {!list.length && <div>暂无代办事项</div>} 
    </div>
  );
}

// useState useCallback原理：闭包