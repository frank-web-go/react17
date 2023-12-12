// 受控组件 value
import React, { Component } from 'react'

export default class App extends Component {
  // 不会反复执行
  state = {
    username:'frank'
  }  
  render() {
    return (
      <div>
        <h1>登录页</h1>
        {/* input组件 （react封装了input标签） */}
        {/* react中，onInput和onChange同效 */}
        <input type="text" value={this.state.username} 
        onChange={(evt)=>{
          console.log('onChange',evt.target.value)
        // setState调用后render重新执行 
          this.setState({
            username:evt.target.value
          })
        }
        }
        ></input>
        <button onClick={()=>{console.log(this.state.username)}}>登录</button>
        <button onClick={()=>{
           this.setState({
            username:""
          })}}>重置</button>
      </div>
    )
  }
}
// 特点：跟状态绑定, 可以传参给别的组件

