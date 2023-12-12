import React, { Component } from 'react'

class Child extends Component {
   render(){
      return (
        <div>
          child-{this.props.text}
          <button onClick={()=>{
            this.props.text ="3333333333333"
          }}>click-子</button>
        </div>
      )
   }
}
export default class App extends Component {
  state = {
    text:'11111111'
  }  
  render() {
    return (
      <div>
          <button onClick={()=>{
            this.setState({
               text:'2222' 
            })
          }}>click-父</button>
         <Child text={this.state.text}></Child>
      </div>
    )
  }
}
