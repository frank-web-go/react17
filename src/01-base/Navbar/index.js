import React, { Component } from 'react'
import frankProp from 'prop-types'
console.log('frankProp: ', frankProp);

export default class Navber extends Component {
  /*对象属性*/  state = { a:"1" }// 只能内部自己用，外面无法改变 
  
  // 接收属性做验证
  /*类属性*/ static propTypes = {
    title:frankProp.string,
    leftShow:frankProp.bool
  }
  // 默认属性
  /*类属性*/ static defaultProps = {
    leftShow:true
  }
  render() {
    // 属性是父组件传来的，this.props
    // console.log(this.props)
    let {title, leftShow} = this.props
    return (
      <div>
        {leftShow && <button>返回</button>}
        navber-{title}
        <button>home</button>
      </div>
    )
  }
}

// console.log(Navber.state)
// console.log(Navber.propTypes)

// 类属性
// Navber.propTypes = {
//   // title:'验证是不是字符串的方法',
//   title:frankProp.string,
//   // leftShow:'验证是不是bool的方法'
//   leftShow:frankProp.bool
// }

// 默认属性
// Navber.defaultProps = {
//   leftShow:true
// }


// class Test {
//   a = 1 // 对象属性
//   static a = 100 //类属性
// }
// Test.a = 100
// console.log('Test.a: ', Test.a);
// var obj = new Test();
// console.log('obj: ', obj.a);
