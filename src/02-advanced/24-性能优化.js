import React, { PureComponent } from 'react'
// 纯净的
export default class App extends PureComponent {
  state = {
    myname:'Kerwin'
  }
  render() {
    console.log('render')
    return (
      <div>
        <button onClick={()=>{
          // this.state.myname = "xiaoming"
          // 不能直接修改状态原因：this.state记录的是老状态，如果修改，影响shouldComponentUpdate中老状态和新状态的对比
          this.setState({
            myname:'xiaoming'
          })
        }}>click</button>
        {this.state.myname}
      </div>
    )
  }
  // 防止虚拟dom反复对比，提高性能，减少时间  简称scu,性能优化函数
//   shouldComponentUpdate(nextProps, nextState){
//     // return true //应该更新 默认true
//     // return false //阻止更新
//     // this.state 老的状态
//     // nextState 新的状态
//     console.log("shouldComponentUpdate")
//     // 阻止render更新
//     // if(this.state.myname!== nextState.myname) {
//     if(JSON.stringify(this.state)!==JSON.stringify(nextState)){
//       return true
//     }
//     return false;
//   }
  // ****UNSAFE_componentWillUpdate的形参与componentDidUpdate的形参相反
  UNSAFE_componentWillUpdate(nextProps,nextState){
    console.log('nextState: ', nextState);
    console.log('nextProps: ', nextProps);
    console.log("UNSAFE_componentWillUpdate")
  }
  componentDidUpdate(prevProps,prevState){
    console.log('prevState: ', prevState);
    console.log('prevProps: ', prevProps);
    console.log("componentDidUpdate")
  }
}
