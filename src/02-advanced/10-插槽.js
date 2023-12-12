import React, { Component } from "react";

class Child extends Component {
  render() {
    return (
      <div>
        child
        {/* 插槽 */}
        { this.props.children[0] }
        { this.props.children[2] }
        { this.props.children[1] }
      </div>
    )
  }
}

class Swiper extends Component {
   render(){
    return(
      <div>
         {this.props.children}
      </div>
    )
   }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Swiper>
           <div>aaaa</div> 
           <div>bbbb</div>
           <div>cccc</div>
        </Swiper>
        <Swiper>
           <div>eeee</div>
           <div>ffff</div>
           <div>gggg</div>
        </Swiper>
        <Swiper>
           <div>hhhh</div>
           <div>iiii</div>
           <div>jjjj</div>  
        </Swiper>
        <Child>
          <div>111111111</div> 
          <div>222222222</div> 
          <div>333333333</div> 
        </Child>
      </div>
    );
  }
}

/*
1.为了复用
2.一定程度减少了父子通信

*/ 