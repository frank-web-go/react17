import React, { Component } from "react";
import FSwiper from "./swiper/Swiper";
import FSwiperItem from "./swiper/SwiperItem";
import axios from "axios"
export default class App extends Component {
  state = {
    list: [],
  };
  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     list: ["aaa", "bbb", "ccc", "ddd"]
    //   });
    // });
    axios({
        url:"https://m.maizuo.com/gateway?cityId=451000&pageNum=1&pageSize=10&type=1&k=7597012",
        headers:{
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16990103281291831673356289","bc":"451000"}',
            'X-Host': 'mall.film-ticket.film.list'
        }
    }).then(res=>{
        console.log(res.data.data)
        this.setState({
            list:res.data.data.films
        })

    })
  }
  render() {
    return (
      <div>
        <FSwiper loop={true}>
            {
              this.state.list.map(item=>
                <FSwiperItem key={item.filmId}>
                    <img style={{width:"100%"}} src={item.poster} alt={item.name}></img>
                </FSwiperItem>
              )  
            }
        </FSwiper>
      </div>
    );
  }
}
