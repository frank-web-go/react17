import React, { Component } from 'react'
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
Swiper.use([Navigation, Pagination]);

export default class App extends Component {
  componentDidMount() {
    new Swiper(".swiper", {
      modules: [Navigation, Pagination],
      //分页器
      pagination: {
        el: ".swiper-pagination",
      },
      loop:this.props.loop
    });
  }
  render() {
    return (
      <div>
        <div className="swiper">
          <div className="swiper-wrapper">
            {this.props.children}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    );
  }
}
