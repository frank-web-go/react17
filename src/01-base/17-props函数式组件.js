 import React, { Component } from 'react'
 import Navber from './Navbar'
 import Sidebar from './Sidebar'
 export default class App extends Component {
   render() {
     return (
       <div>
          {/* 类组件 */}
          <Navber title="导航"></Navber>
          {/* 函数式组件 */}
          <Sidebar bg="yellow" position="left"></Sidebar>
       </div>
     )
   }
 }
 