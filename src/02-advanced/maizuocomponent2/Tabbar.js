// import React, { Component } from 'react'

// export default class Tabbar extends Component {
//   //传值只有render会执行 
//   render() {
//     // this.state.current = this.props.parentcurrent    //不能直接修改
//     // this.setState({
//     //     current:this.props.parentcurrent 
//     // })  //死循环
//     return (
//       <div>
//          <ul>
//           {this.props.list.map((item, index) => (
//             <li
//               key={item.id}
//               className={this.props.current === index ? "active" : ""}
//               onClick={()=>{this.handleClick(index)}}
//             >
//               {item.text}
//             </li>
//           ))}
//         </ul>
//       </div>
//     )
//   }
//   handleClick(index){
//     // 通知一下父组件，该修改父组件状态了
//     this.props.myEvent(index)
//   }
// }

// 函数式组件
const Tabbar = (props) =>{
  function handleClick(index) {
    // 通知一下父组件，该修改父组件状态了
    props.myEvent(index)
  }
  return (
    <div>
         <ul>
          {props.list.map((item, index) => (
            <li
              key={item.id}
              className={props.current === index ? "active" : ""}
              onClick={()=>{handleClick(index)}}
            >
              {item.text}
            </li>
          ))} 
        </ul>
      </div>
  ) 
}
export default Tabbar
