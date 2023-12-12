import React, { Component } from 'react'

export default class App extends Component {
  state = {
    list:['1111','2222','3333']
  }
  render() {
    let newList = this.state.list.map(item=><li key={item}>{item}</li>)
    return (
      <div>
        <ul>
           {/* {this.state.list.map(item=>`<li>${item}</li>`)}  */}
           {/* {this.state.list.map(item=><li>{item}</li>)}  */}
           {newList}
        </ul>
      </div>
    )
  } 
}
// 原生map  如无必要，误增实体
// 设置key值 为了让列表复用和重排，提高性能
// 不涉及列表的增加删除，重排，设置成索引没有关系