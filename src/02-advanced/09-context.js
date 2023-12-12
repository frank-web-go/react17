import React, { Component } from "react";
import axios from "axios";
import "./css/03-communination.css";

// 跨组件通信方案
const GlobalContext = React.createContext(); // 创建context上下文对象
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      filmList: [],
      info: "",
    };
    axios.get("/test.json").then((res) => {
      console.log("res: ", res.data.data.films);
      this.setState({
        filmList: res.data.data.films,
      });
    });
  }
  render() {
    return (
      //供应商                必须是value
      //value相当于提供的服务
      <GlobalContext.Provider
        value={{
          call: "打电话",
          sms: "短信",
          info: this.state.info,
          changeInfo: (value) => {
            this.setState({
              info: value,
            });
          },
        }}
      >
        <div>
          {this.state.filmList.map((item) => (
            <FilmItem {...item} key={item.filmId}></FilmItem>
          ))}
          <FilmDetail></FilmDetail>
        </div>
      </GlobalContext.Provider>
    );
  }
}

// 受控组件
class FilmItem extends Component {
  render() {
    // console.log(this.props);
    let { name, poster, grade, synopsis } = this.props;
    return (
      // 消费者
      <GlobalContext.Consumer>
        {/* 提供的服务 */}
        {(value) => {
          console.log("value: ", value);
          return (
            <div
              className="filmitem"
              onClick={() => {
                //   console.log(synopsis);
                //   value.info = "222"
                value.changeInfo(synopsis);
              }}
            >
              <img src={poster} alt={name}></img>
              <h4>{name}</h4>
              <div>观众评分：{grade}</div>
            </div>
          );
        }}
      </GlobalContext.Consumer>
    );
  }
} 

class FilmDetail extends Component {
  render() {
    return (
      // 消费者
      <GlobalContext.Consumer>
        {(value) => {
          console.log("value: ", value);
          return <div className="filmdetail">{value.info}</div>;
        }}
      </GlobalContext.Consumer>
    );
  }
}
