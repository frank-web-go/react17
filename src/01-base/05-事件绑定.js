import React, { Component } from 'react'

export default class App extends Component {
  a = 100  
  render() {
    return (
      <div>
          <input></input>
          {/* 适用于逻辑比较少 */}
          <button onClick={()=>{
            console.log('click')
          }}>add1</button>
          {/* 方法后不能加(),会自动执行 */}
          <button onMouseOver={this.handleClick2}>add2</button>
          <button onClick={this.handleClick3}>add3</button>
          <button onClick={()=>{ 
            this.handleClick4() // 比较推荐 
          }}>add4</button>
      </div>
    )
  }

  handleClick2(){
    console.log('click2')
  }
  handleClick3 = () => {
    console.log('click3')
  }
  handleClick4 = () => {
    console.log('click4')
  }
}

class A {
    constructor(){
        this.a = '111'
        this.b = '222'
    }

    c = 33333 //ES7  === this.c = 333 公共属性 
    
    d = () =>{

    }
    aaa(){

    }
}

console.log(new A())