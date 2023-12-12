import React, { Component } from 'react'

export default class App extends Component {
state = {
  myname:'frank',
  myage:100
}    
//类方法  从属性中获取状态 
static getDerivedStateFromProps(nextProps,nextState){
    console.log("getDrivedStateFromProps",nextState)
    // console.log(this.state)  //静态方法中实例this无法调用
    // 必须有return 
    return {
    // myname:"Frank" componentWillMount 初始化 合并
      myname:nextState.myname.substring(0,1).toUpperCase() + nextState.myname.substring(1) //更新时
   } 
 } 
 render() {
    console.log("render")
    return ( 
      <div>
        <button onClick={()=>{
        this.setState({
            myname:"xiaoming"
        })
        }}>click</button>  
         app - {this.state.myname} - {this.state.myage}
      </div>
    )
  }
}
