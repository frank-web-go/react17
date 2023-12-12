import React, { Component } from "react";

export default class App extends Component {
  state = {
    count: 1,
  };
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleAdd1}>add1</button>
        <button onClick={this.handleAdd2}>add2</button>
      </div>
    );
  }
  handleAdd1 = () => {
    // this.setState 合并
    this.setState({
      count: this.state.count + 1,
    },()=>{
      console.log("真实状态更新1", this.state.count)
      // 状态和真实dom已经更新完了
    });
    console.log("1-----this.state.count: ", this.state.count);
    this.setState({
      count: this.state.count + 1,
    },()=>{
      console.log("真实状态更新2", this.state.count)
    });
    console.log("2-----this.state.count: ", this.state.count);
    this.setState({
      count: this.state.count + 1,
    },()=>{
      console.log("真实状态更新3", this.state.count)
    });
    console.log("3-----this.state.count: ", this.state.count);
  };
  handleAdd2 = () => {
    // 异步任务中顺序执行
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1,
      });
      console.log("1-----this.state.count: ", this.state.count);
      this.setState({
        count: this.state.count + 1,
      });
      console.log("2-----this.state.count: ", this.state.count);
      this.setState({
        count: this.state.count + 1,
      });
      console.log("3-----this.state.count: ", this.state.count);
    });
  };
}
// setState 处在同步的逻辑中，异步更新状态，异步更新真实dom   合并标志位true
// setState 处在异步的逻辑中，同步更新状态，同步更新真实dom   合并标志位false
// setState 接收第二个参数，第二个参数是回调函数，状态和dom更新完后就才会被触发

