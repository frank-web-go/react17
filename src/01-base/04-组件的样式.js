import React, { Component } from 'react'
import "./css/01-index.css"  // webpack支持

export default class APP extends Component {
  render() {
    let myname = "frank"
    let obj = {
      backgroundColor:'yellow'
    }
    return (
      // {} 模板语法
      <div>
        {10+20}-{myname}
        {10>20?'aaa':"bbb"}
        {/* <div style="color:yellow">111111</div> */}
        {/* 写样式{}内必须为对象 */}
        <div style={obj}>111111</div>  
        <div style={{color:"red"}} >22222</div>
        {/* React推荐我们使用行内样式，因为React觉得美一个组件都是一个独立的整体 */}
        {/* class样式会被识别成class类关键字*/}
        <div className="active" id="myapp">333333333333</div>
        {/* for也会被当成关键字 -> 变成htmlfor */}
        <label htmlFor="username">用户名：</label>
        <input type="text" id="username"></input>
      </div>
    )
  }
}
