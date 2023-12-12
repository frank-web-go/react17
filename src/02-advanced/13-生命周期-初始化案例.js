import React, { Component } from 'react'
import BetterScroll from 'better-scroll'
export default class App extends Component {
  state = {
    list:["1",'2','3','4','5','6','7','8','9','0','121','122','123','124','125']
  }
  UNSAFE_componentWillMount(){
    // console.log(document.querySelectorAll("li"))
  }
  componentDidMount(){
    // console.log(document.querySelectorAll("li"))
    new BetterScroll("#wrapper")
  }
  render() {
    return (
      <div id="wrapper" style={{height:"200px",background:'yellow',overflow:'hidden'}}>
        <ul>
           {
             this.state.list.map(item=>
             <li key={item}>{item}</li>   
            )     
           }
        </ul>
      </div>
    )
  }
}