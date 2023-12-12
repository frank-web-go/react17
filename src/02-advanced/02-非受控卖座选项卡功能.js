import React, { Component } from "react";
import "./css/02-maizuo.css";
import Film from "./maizuocomponent/Film";
import Cinema from "./maizuocomponent/Cinema";
import Center from "./maizuocomponent/Center";
import Tabbar from "./maizuocomponent/Tabbar";
import Navbar from "./maizuocomponent/Navbar";
export default class App extends Component {
  state = {
    current: 1,
  };
  render() {
    return (
      <div>
        <Navbar myEvent={(index)=>{
            console.log("navbar-center,告诉tabbar去切换到center组件")
            this.setState({
                current: index
            });
        }} />
        {
          // 表达式---支持函数表达式
          this.which()
        }
        <Tabbar
          myEvent={(index) => {
            console.log("父组件定义");
            this.setState({
              current: index
            });
          }}
           defaultValue ={this.state.current}
        ></Tabbar>
      </div>
    );
  }
  which() {
    switch (this.state.current) {
      case 0:
        return <Film></Film>;
      case 1:
        return <Cinema></Cinema>;
      case 2:
        return <Center></Center>;
      default:
        return null;
    }
  }
}

// 结论：非受控组件达不成组件间的联动功能