import React, { Component } from 'react'

export default class Tabbar extends Component {
  state = {
    list: [
        {
          id: 1,
          text: "电影",
        },
        {
          id: 2,
          text: "影院",
        },
        {
          id: 3,
          text: "我的",
        },
    ],
    // current: 0,  
    current: this.props.defaultValue // 非受控（不应该有自己的属性值） 
   } 
  //传值只有render会执行 
  render() {
    // this.state.current = this.props.parentcurrent    //不能直接修改
    // this.setState({
    //     current:this.props.parentcurrent 
    // })  //死循环
    return (
      <div>
         <ul>
          {this.state.list.map((item, index) => (
            <li
              key={item.id}
              className={this.state.current === index ? "active" : ""}
              onClick={()=>{this.handleClick(index)}}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    )
  }
  handleClick(index){
    this.setState({
       current:index
    })
    // 通知一下父组件，该修改父组件的
    this.props.myEvent(index)
  }
}
