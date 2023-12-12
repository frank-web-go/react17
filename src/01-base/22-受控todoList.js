import React, { Component } from 'react'
import './css/01-index.css'
export default class App extends Component {
  a = 100
//   myref = React.createRef()
  state = {
    myText:"",
    list:[
      {
        id:1,
        myText:'aa',
        isChecked:false
      },
      {
        id:2,
        myText:'bb',
        isChecked:false
      },
      {
        id:3,
        myText:'cc',
        isChecked:false
      }
    ]
  }
  render() {
    // var a = <div>暂无代办事项</div>
    return (
      <div>
         <input value={this.state.myText} onChange={(evt)=>{
            this.setState({
               myText: evt.target.value
            })
         }}></input>
         <button onClick={this.handleClick2}>add2</button>
         <ul>
           {
            this.state.list.map((item,index) =>
              <li key={item.id}>
                {/* {item.myText} */}
                <input type="checkbox" checked={item.isChecked} onChange={()=>this.handleChecked(index)} ></input>
                {/* 富文本展示 */}
                <span dangerouslySetInnerHTML={
                  {
                    __html:item.myText
                  }
                } style={{textDecoration: item.isChecked?'line-through':''}}></span>
                {/* <button onClick={this.handleDelete.bind(this,index)}>删除</button>  */}
                <button>完成</button>
                <button onClick={()=>{this.handleDelete(index)}}>删除</button> 
              </li>
            )
           }
         </ul>
         {/* {!this.state.list.length?<div>暂无代办事项</div>:null} */}
         {/* {!this.state.list.length && <div>暂无代办事项</div>} */}
         <div className={this.state.list.length?'hidden':''}>暂无代办事项</div>
      </div>
    )
  }
  handleClick2 = ()=> {
    // 不要直接修改状态，可能会造成不可预期的问题
    // this.state.list.push(this.myref.current.value)  
    // let newList = [...this.state.list]
    let newList = this.state.list.slice()
    newList.push({
      id:parseInt(Math.random()*10000) + new Date().getTime(),
      myText:this.state.myText,
      isChecked:false
    })
    console.log('newList: ', newList);
    this.setState({
      list:newList,
      // 清空输入框
      myText:"",
    })
  }
  handleDelete(index) {
    // 不要直接修改状态，可能会造成不可预期的问题
    let newList = this.state.list.concat()
    console.log('newList: ', newList);
    newList.splice(index,1)
    this.setState({
      list:newList
    })
  }
  handleChecked(index){
    console.log('index: ', index);
    // 不要对原状态进行修改，会有不可预期的错误
    // this.state.list[index].isChecked = !this.state.list[index].isChecked
    let newList = [...this.state.list]
    newList[index].isChecked = !newList[index].isChecked
    this.setState({
      list:newList
    })
  }
}
