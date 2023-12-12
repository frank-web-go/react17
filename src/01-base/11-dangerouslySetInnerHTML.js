import React, { Component } from "react";
// 富文本展示
export default class App extends Component {
  state = {
    myHtml: "<s>1111</s><b>22222</b>",
  };
  render() {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: this.state.myHtml
        }}
      ></div>
    );
  }
}
