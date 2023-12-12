import React, { Component } from 'react'

export default class App extends Component {
  a = 1 
// 定义state

    //1.   state = {
    //     myText:'收藏',
    //     myShow:true
    //   }

   // 2.
    constructor(){
    //this.a = 1
    // Must call super constructor in derived class before accessing 'this' or returning from derived constructor
      super()
      this.state = {
        myText:'收藏',
        myShow:true,
        myName:'小明'
      } 
    }


  render() {
    // var text = "收藏"
    return (
      <div>
        <h1>欢迎来到react开发 -- {this.state.myName}</h1>
        <button onClick={()=>{
        //    this.state.myText="取消收藏"   报错：不要直接修改
        this.setState({
        //    myText:"取消收藏"
           myShow:!this.state.myShow,
           myName:"小红"
        })  //间接修改状态
        if(this.state.myShow) {
            console.log("收藏")
        } else {
            console.log("取消收藏")
        }
        }} >{this.state.myShow?'收藏':'取消收藏'}</button>
      </div>
    )
  }
}
