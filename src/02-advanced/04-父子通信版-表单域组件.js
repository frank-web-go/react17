import React, { Component } from "react";

class Field extends Component {
  render() {
    return (
      <div style={{ background: "yellow" }}>
        <label>{this.props.label}</label>
        <input
          type={this.props.type}
          onChange={(evt) => {
            this.props.onChangeEvent(evt.target.value);
          }}
         // defaultValue   
          value={this.props.value}
        ></input>
      </div>
    );
  }
}

export default class App extends Component {
  state = {
    username: "111",
    password: "",
  };
  render() {
    return (
      <div>
        <h1>登录页面</h1>
        <Field
          label="用户名"
          type="text"
          onChangeEvent={(value) => {
            console.log(value);
            this.setState({
              username: value,
            });
          }}
          value={this.state.username}
        ></Field>
        <Field
          label="密码"
          type="password"
          onChangeEvent={(value) => {
            console.log(value);
            this.setState({
              password: value,
            });
          }}
        ></Field>
        <button
          onClick={() => {
            console.log(this.state);
          }}
        >
          登录
        </button>
        <button
          onClick={()=>{
            this.setState({
               username:"",
               password:'' 
            })
          }}
        >取消</button>
      </div>
    );
  }
}
