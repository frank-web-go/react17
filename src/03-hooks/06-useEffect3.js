import React, { Component, useEffect, useLayoutEffect } from "react";

export default class App extends Component {
  state = {
    isCreated: true,
  };
  render() {
    return (
        <div>
            <button onClick={()=>{
                this.setState({
                  isCreated:!this.state.isCreated
                })
            }}>click</button>
           {/* {this.state.isCreated ? <Child></Child> : ""} */}
           {this.state.isCreated && <Child></Child>}
        </div>
    );
  }
}

function Child() {
    useLayoutEffect(()=>{
        window.onresize = () => {
            console.log("resize") 
         }
        let timer = setInterval(()=>{
             console.log(111)
         },1000)
        
        // 模拟组件销毁
        return ()=>{
           console.log("组件销毁") 
           window.onresize = null
           clearInterval(timer)
        } 
         
      },[])
    
//   useEffect(()=>{
//     window.onresize = () => {
//         console.log("resize") 
//      }
//     let timer = setInterval(()=>{
//          console.log(111)
//      },1000)
    
//     // 模拟组件销毁
//     return ()=>{
//        console.log("组件销毁") 
//        window.onresize = null
//        clearInterval(timer)
//     }
     
//   },[])
  return (
    <div>111</div>
  )
}

//注意 
// 1.useEffect可以注册多次
// 2.浏览器解析分为dom树和渲染树，useLayoutEffect是在dom树解析完后执行类似于componentDidMount & componentDidUpdate，(dom存在内存中)，所以会阻塞浏览器渲染； 而useEffect是在渲染树后执行，所以不会阻塞渲染，性能更好；如果只是想做一些dom操作，应该放在useLayoutEffect中，反之会产生页面抖动。

  

