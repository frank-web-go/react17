import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div>
        <h1>登录页面</h1>
        <input type="text"></input>
        <button onClick={()=>{
            localStorage.setItem("token",111)
            this.props.history.push(`/center`)
        }}>登录</button>
      </div>
    )
  }
}
