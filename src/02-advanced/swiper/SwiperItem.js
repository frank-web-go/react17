import React, { Component } from 'react'

export default class FSwiperItem extends Component {
  render() {
    return (
      <div className="swiper-slide">
        {this.props.children}
      </div>
    )
  }
}
