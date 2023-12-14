import React, { useState, useEffect, useMemo } from "react";
import store from "../redux/store";
import getCinemaListAction from "../redux/actionCreator/getCinemaListAction";

export default function Search() {
  const [cinemaList, setCinemaList] = useState(
    store.getState().CinmeaListReducer.list
  );
  const [myText, setmyText] = useState("");

  useEffect(() => {
    if (store.getState().CinmeaListReducer.list.length === 0) {
      // 去后台取数据
      // actionCreator 里面写异步
      store.dispatch(getCinemaListAction());
    } else {
      console.log("store 缓存");
    }
    var unsubscribe = store.subscribe(() => {
      console.log("cinema 中订阅", store.getState().CinmeaListReducer.list);
      setCinemaList(store.getState().CinmeaListReducer.list);
    });
    return () => {
      //取消订阅
      unsubscribe();
    };
  }, []);
  const getCinemaList = useMemo(
    () =>
      cinemaList.filter(
        (item) =>
          item.name.toUpperCase().includes(myText.toUpperCase()) ||
          item.address.toUpperCase().includes(myText.toUpperCase())
      ),
    [cinemaList, myText]
  );
  return (
    <div>
      <input
        value={myText}
        onChange={(evt) => {
          console.log("evt.target.value: ", evt.target.value);
          setmyText(evt.target.value);
        }}
      />
      {getCinemaList.map((item) => (
        <dl key={item.cinemaId} style={{ padding: "10px" }}>
          <dt>{item.name}</dt>
          <dd style={{ fontSize: "12px", color: "gray" }}>{item.address}</dd>
        </dl>
      ))}
    </div>
  );
}
