import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div style={{ background: "red" }}>
        <button
          onClick={() => {
            console.log("子传父");
            this.props.event(); //调用父组件传来的回调函数
          }}
        >
          click
        </button>
        <span>navber</span>
      </div>
    );
  }
}

class Sidebar extends Component {
  render() {
    return (
      <div style={{ background: "yellow", width: "200px" }}>
        <ul>
          <li>1111</li>
        </ul>
      </div>
    );
  }
}

export default class App extends Component {
  state = {
    isShow: true,
  };
  render() {
    return (
      <div>
        <Navbar event={() => this.handleEvent()} />
        {/* <button onClick={()=>{
           this.setState({
             isShow:!this.state.isShow
           }) 
        }}>click</button> */}
        {this.state.isShow && <Sidebar />}
      </div>
    );
  }
  handleEvent() {
    console.log("父组件定义的event事件");
    console.log(this);
    this.setState({
      isShow: !this.state.isShow,
    });
  }
}
// 父传子 属性
// 子传父 回调函数 callback
