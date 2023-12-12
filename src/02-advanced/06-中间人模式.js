import React, { Component } from "react";
import axios from "axios";
import "./css/03-communination.css";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      filmList: [],
      info: "",
    };
  }
  componentDidMount() {
    axios.get("/test.json").then((res) => {
      console.log("res: ", res.data.data.films);
      this.setState({
        filmList: res.data.data.films,
      });
    });
  }
  render() {
    return (
      <div>
        {this.state.filmList.map((item) => (
          <FilmItem
            {...item}
            key={item.filmId}
            onEvent={(value) => {
              console.log("父组件接收", value);
              this.setState({
                info: value,
              });
            }}
          ></FilmItem>
        ))}
        <FilmDetail info={this.state.info}></FilmDetail>
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
          //   console.log(synopsis);
          this.props.onEvent(synopsis);
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
  render() {
    return <div className="filmdetail">{this.props.info}</div>;
  }
}
