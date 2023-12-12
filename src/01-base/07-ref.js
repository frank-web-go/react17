import React, { Component } from 'react'

export default class App extends Component {
  myRef = React.createRef()  // 返回一个ref对象
  render() {
    console.log(this,'this')
    return (
      <div>
          {/* <input ref='mytext'></input> */}
          <input ref={this.myRef}></input>
          {/* 适用于逻辑比较少 */}
          <button onClick={()=>{
            // console.log('click',this.refs.mytext.value)
            // 拿到dom节点
            console.log('click',this.myRef.current.value)
          }}>add1</button>
          <button onClick={this.handleClick2.bind(this)}>add2</button>
      </div>
    )
  }
  handleClick2(){
    console.log('click2', this.myRef.current.value)
  }
}