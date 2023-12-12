import React, { Component } from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
Swiper.use([Navigation, Pagination]);

export default class App extends Component {
  state = {
    list: [],
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        list: ["aaa", "bbb", "ccc"],
      });
      new Swiper(".swiper", {
        modules: [Navigation, Pagination],
        //分页器
        pagination: {
          el: ".swiper-pagination",
        },
      });
    }, 1000);
  }
  componentDidUpdate(){
    // dom已经更新完了
    // new Swiper(".swiper", {
    //   modules: [Navigation, Pagination],
    //   //分页器
    //   pagination: {
    //     el: ".swiper-pagination",
    //   },
    // });
  }
  render() {
    return (
      <div>
        <div
          className="swiper"
          style={{ height: "200px", background: "yellow" }}
        >
          <div className="swiper-wrapper">
            {this.state.list.map((item) => (
              <div className="swiper-slide" key={item}>
                {item}
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    );
  }
}
