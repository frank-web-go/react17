import React, { Component } from "react";
import MRouter from "./router/IndexRouter";
import Tabbar from "./components/tabbar";
import "./views/css/App.css";
import store from "./redux/store";

export default class App extends Component {
  state = {
    isShow: store.getState(),
  };
  // store.subsribe 订阅
  componentDidMount() {
    store.subscribe(() => {
      console.log("app中订阅", store.getState());
      this.setState({
        isShow: store.getState().TabbarReducer.show,
      });
    });
  }
  render() {
    return (
      <div>
        {/* 其他的内容 */}
        <MRouter>
          {this.state.isShow && <Tabbar></Tabbar>}
        </MRouter>
      </div>
    );
  }
}
