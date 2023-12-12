// 类似计算属性
// useMemo 更适合经过函数 计算得到一个确定的值
import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";

// 1.必须use开头  2.在hooks中异步照样会执行
function useCinemaList() {
  const [cinemaList, setcinemaList] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=2104801",
        {
          headers: {
            "X-Client-Info":
              '{"a":"3000","ch":"1002","v":"5.2.1","e":"1698155001728684151439361","bc":"110100"}',
            "X-Host": "mall.film-ticket.cinema.list",
          },
        }
      )
      .then((res) => {
        setcinemaList(res.data.data.cinemas);
      });
  }, []);
  return {
    cinemaList,
  };
}

function useFilter(cinemaList, myText) {
  const getCinemaList = useMemo(
    () =>
      cinemaList.filter(
        (item) =>
          item.name.toUpperCase().includes(myText.toUpperCase()) ||
          item.address.toUpperCase().includes(myText.toUpperCase())
      ),
    [cinemaList, myText]
  );
  return {
    getCinemaList,
  };
}

export default function Cinema() {
  const [myText, setmyText] = useState("");
  const { cinemaList } = useCinemaList();
  const { getCinemaList } = useFilter(cinemaList, myText);
  return (
    <div>
      {myText}
      <input
        value={myText}
        onChange={(evt) => {
          setmyText(evt.target.value);
        }}
      />
      <div>
        {getCinemaList.map((item) => (
          <dl key={item.cinemaId}>
            <dt>{item.name}</dt>
            <dd>{item.address}</dd>
          </dl>
        ))}
      </div>
    </div>
  );
}
