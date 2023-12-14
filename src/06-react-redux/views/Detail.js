import React, { useEffect } from "react";
import { show, hide } from "../redux/actionCreator/TabbarActionCreator";
import { connect } from "react-redux";

function Detail(props) {
  let {show,hide,match} = props
  useEffect(() => {
    console.log(props);
    hide();
    return () => {
      console.log("destory");
      show();
    };
  }, [match.params.myid,show,hide]);
  return <div>detail</div>;
}

// connect(将来给孩子传的属性，将来给孩子传的回调函数)

const mapDispatchToProps = {
  show,
  hide
}
export default connect(null, mapDispatchToProps)(Detail);
