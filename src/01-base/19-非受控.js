// 非受控组件 defaultValue
import React, { Component } from 'react'

export default class App extends Component {
  myusername = React.createRef()
  render() {
    return (
      <div>
        <h1>登录页</h1>
        {/* <input type="text" ref={this.myusername} value="frank"></input> */}
        <input type="text" ref={this.myusername} defaultValue="frank"></input>
        <button onClick={()=>{console.log(this.myusername.current.value)}}>登录</button>
        <button onClick={()=>{
            console.log('this.myusername.current.value: ', this.myusername.current.value);
            this.myusername.current.value = ""
            
            }}>重置</button>
       
        {/* 没有更新,render函数不会再执行，要依靠setState */}
        {/* <Child myValue={this.myusername.current.value}></Child> */}
      </div>
    )
  }
}

// 特点：不受控制，内部参数只能自己用，无法传参给其他组件
