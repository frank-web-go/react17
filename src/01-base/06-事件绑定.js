import React, { Component } from 'react'

export default class App extends Component {
  a = 100  
  render() {
    console.log(this,'this')
    return (
      <div>
          <input></input>
          {/* 适用于逻辑比较少 */}
          <button onClick={()=>{
            console.log('click',this.a)
          }}>add1</button>
          {/* 方法后不能加(),会自动执行 */}
          <button onMouseOver={this.handleClick2.bind(this)}>add2-不推荐</button>
          <button onClick={this.handleClick3}>add3 - 推荐</button>
          <button onClick={()=>{ this.handleClick4(111) }}>add4-很推荐-传参</button>
      </div>
    )
  }
  handleClick2(){
    // 没修改之前, this指向onclick事件系统
    console.log('click2',this.a)
  }
  handleClick3 = (evt) => {
    console.log('evt: ', evt);
    console.log('click3',this.a)
  }
  handleClick4 = () => {
    //this指向this.handleClick4中的this (谁调handleClick4指谁)
    console.log('click4',this.a)
  }
}

// react中事件绑定没有绑定在具体的dom节点身上，因为绑在dom身上比较消耗内存，采用的是事件代理的方案（冒泡机制）。

/*
call,   改变this指向，自动执行函数
apply,  改变this指向，自动执行函数
bind,   改变this指向，手动执行函数()
*/ 

var obj1 = {
  name:'obj1',
  getName(){
    console.log(this.name)
  }
}

var obj2 = {
  name:'obj2',
  getName(){
    console.log(this.name)
  }
}

obj1.getName.call(obj2)
obj1.getName.bind(obj2)()


class A {
    constructor(){
        this.a = '111'
        this.b = '222'
    }

    c = 33333 //ES7  === this.c = 333 公共属性 
    
    d = () =>{

    }
    aaa(){
      console.log(this.c)
    }
}

console.log(new A())