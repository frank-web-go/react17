import React, { Component } from 'react'

export default class App extends Component {
  state = {
    myText:'1111'
  }
  render() {
    console.log("render")
    return (
      <div>
        app
        <button onClick={()=>{
            this.setState({
              myText:"2222222222"
            })
        }}>click</button>
        {this.state.mytext}
      </div>
    )
  }
//   componentWillUpdate(){
//     console.log("componentWillUpdate")
//   }
  componentDidUpdate(prevProps,prevState,value){
    console.log("componentDidUpdate",value)
  }
  getSnapshotBeforeUpdate(){
    console.log("getSnapshotBeforeUpdate")
    // 返回componentDidUpdate第三个值
    return 100
  }
}

// render -> getSnapshotBeforeUpdate -> componentDidUpdate