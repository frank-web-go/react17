import React, { useState, useRef } from "react";

export default function App() {
  const [list, setList] = useState(["aa", "bb", "cc"]);
  const mytext = useRef() // React.creatRef()

  const handleAdd = () => {
    console.log(mytext.current.value);
    setList([...list, mytext.current.value]);
    mytext.current.value = ""
  };
  const handleDel = (index) => {
    let newlist = [...list];
    newlist.splice(index, 1);
    setList(newlist);
  };
  return (
    <div>
      <input ref={mytext}></input>
      <button onClick={handleAdd}>add</button>
      <ul>
      {list.map((item, index) => (
        <li key={item}>
          {item}
          <button onClick={() => handleDel(index)}>del</button>
        </li>
      ))}
      </ul>
      {!list.length && <div>暂无代办事项</div>} 
    </div>
  );
}

