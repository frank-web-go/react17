import React, { Component } from 'react'

class Child extends Component {
   state = {
     title:''
   } 
   render(){
     return(
        <div>child-{this.state.title}</div>
     )
   }
   // 父组件属性修改触发
   componentWillReceiveProps(nextProps){
       console.log("componentWillReceiveProps",nextProps)
       // 最早获得父组件传来的属性(nextProps)，可以利用属性进行ajax或者逻辑处理
       // 把属性转化成孩子自己的状态。
       this.setState({
        title:nextProps.text + 'frank'
       })     
   }
}

export default class App extends Component {
  state = {
    text:'111111111111'
  }
  render() {
    return (
      <div>
        {
          this.state.text
        }
        <button onClick={()=>{
            this.setState({
                text:'22222'
            })
        }}>click</button>
        <Child text={this.state.text} />
      </div>
    )
  }
}
