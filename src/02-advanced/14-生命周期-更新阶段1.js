import React, { Component } from 'react'
import axios  from 'axios'
import BetterScroll from "better-scroll"
export default class App extends Component {
  state = {
    myname:'frank',
    list:[]
  }
  componentDidMount(){
    console.log('componentDidMount')
    axios.get("/test.json").then(res=>{
       console.log(res.data.data.films) 
       this.setState({
         list:res.data.data.films
       })
       new BetterScroll("#wrapper")
    })
  }
 // 被高优先级任务打断，会再次被执行一次
  UNSAFE_componentWillUpdate(){
    console.log("componentWillUpdate",document.getElementById("myname").innerHTML)
  }  
  componentDidUpdate(prevProps,prevState){
    // prevProps:之前的属性 prevState:之前的状态
    console.log("componentDidUpdate",document.getElementById("myname").innerHTML)
    // 更新后，想要获取dom节点，更新，  在componentDidMount后执行   
    // 缺点：会执行多次
    console.log(prevState.list)
    if(prevState.list.length === 0) {
        new BetterScroll("#wrapper")
    }
}
  render() {
    console.log("render")
    return (
      <div>
        <button onClick={()=>{
           this.setState({
             myname:"Frank"
           }) 
        }}>click</button>
        <span id="myname">{this.state.myname}</span>
        <div id="wrapper" style={{height:'100px',overflow:'hidden',background:'yellow'}}>
          <ul>
            {
              this.state.list.map(item=>
                <li key={item.filmId}>{item.name}</li> 
               )
            }
          </ul>
        </div>
      </div>
    )
  }
}
// render -> componentWillUpdate -> render -> componentDidUpdate