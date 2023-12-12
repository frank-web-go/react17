import React, { Component } from 'react'
import Navber from './Navbar'
export default class App extends Component {
  render() {
    // 上面父组件传来一个对象
    var obj = {
      title:'测试',
      leftShow:false
    }
    return (
      <div>
        <div>
          <h2>首页</h2>
          {/* 组件传参传任何类型的值(除字符串)都放在{}中*/}
          <Navber title="首页" leftShow={false}/> 
        </div>
        <div>
          <h2>列表</h2>
          {/* <Navber title="列表" leftShow={true}/>  */}
          <Navber title="列表"/> 
        </div>
        <div>
          <h2>购物车</h2>
          {/* <Navber title="购物车" leftShow={true}/>  */}
          <Navber title="购物车"/> 
        </div>
        {/* <Navber title={obj.title} leftShow={obj.leftShow}/> */}
        {/* 简写 */}
        <Navber {...obj}/>
      </div>
    )
  }
}
