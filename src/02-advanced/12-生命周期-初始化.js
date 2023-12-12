import React, { Component } from 'react'

export default class App extends Component {
  state = {
    myName:"frank"
  }  
  UNSAFE_componentWillMount(){
    // 将要挂载 触发1次
    console.log("第一次will mount",this.state.myName,document.getElementById("myname"))
    // 第一次上树前的 最后一次状态修改状态机会
    this.setState({
      myName:"Frank"
    })

    // 起初始化数据的作用
    //该生命周期不安全的原因：该生命周期优先级比较低，有可能被打断，被高优先任务打断后，会重新在执行一次，执行次数多了，会失去唯一性，不够安全。(改用Fiber)
  }
  componentDidMount(){
    // 已经挂载完了 触发1次
    console.log("第一次did mount",document.getElementById("myname"))
    // 数据请求
    // 订阅函数调用
    // setInterval
    // 基于创建完的dom进行 初始化....  BetterScroll
  }  
  render() {
    // 正在渲染
    console.log("render")
    return (
      <div>
        <span id="myname">{this.state.myName}</span>
      </div>
    )
  }
}

// UNSAFE_componentWillMount -> render -> componentDidMount