import React, { Component } from "react";
import axios from "axios";
import "./css/03-communination.css";

var bus = {
  list: [],

  // 订阅
  subscribe(callback) {
    console.log("callback: ", callback);
    this.list.push(callback);
  },
  // 发布
  publish(text) {
    // 遍历所有的list，将回调函数执行
    console.log(this.list);
    this.list.forEach((callback) => {
      callback && callback(text);
    });
  },
};

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      filmList: [],
    };
    axios.get("/test.json").then((res) => {
      this.setState({
        filmList: res.data.data.films,
      });
    });
  }
  render() {
    return (
      <div>
        {this.state.filmList.map((item) => (
          <FilmItem {...item} key={item.filmId}></FilmItem>
        ))}
        {/* 标签默认是new操作 */}
        <FilmDetail></FilmDetail>
      </div>
    );
  }
}

// 受控组件
class FilmItem extends Component {
  render() {
    // console.log(this.props);
    let { name, poster, grade, synopsis } = this.props;
    return (
      <div
        className="filmitem"
        onClick={() => {
          bus.publish(synopsis);
        }}
      >
        <img src={poster} alt={name}></img>
        <h4>{name}</h4>
        <div>观众评分：{grade}</div>
      </div>
    );
  }
}

class FilmDetail extends Component {
  constructor() {
    super();
    this.state = {
      info: "",
    }
    bus.subscribe((info) => {
      console.log("我再FilmDetail中定义", info);
      this.setState({ info });
    });
  }
  render() {
    return <div className="filmdetail">{this.state.info}</div>;
  }
}
