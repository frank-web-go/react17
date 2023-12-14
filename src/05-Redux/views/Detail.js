import React, { useEffect } from "react";
import store from "../redux/store";
import { show, hide } from "../redux/actionCreator/TabbarActionCreator";

export default function Detail(props) {
  // 1.动态路由传参 console.log('props: ', props.match.params.myid);  
  // 2.query传参 console.log(props.location.query.myid)
  // 3.state传参 console.log(props.location.state.myid)
  
  useEffect(() => {
    // console.log("create")
    // store.dispatch 通知
    store.dispatch(hide());
    return () => {
      console.log("destory");
      store.dispatch(show());
    };
  }, []);
  return <div>detail</div>;
}
