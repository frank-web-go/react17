import React, { Component } from "react";
import axios from "axios";
import "../css/02-maizuo.css";
export default class Cinema extends Component {
  constructor() {
    super();
    this.state = {
      cinemaList:[],
      bakcinemaList:[]
    }
    axios
      .get(
        "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=2104801",
        {
          headers: {
            "X-Client-Info":
              '{"a":"3000","ch":"1002","v":"5.2.1","e":"1698155001728684151439361","bc":"110100"}',
            "X-Host": "mall.film-ticket.cinema.list",
          },
        }
      )
      .then((res) => {
        this.setState({
           cinemaList: res.data.data.cinemas,
           bakcinemaList: res.data.data.cinemas
        })
        console.log('1----',this.state.cinemaList)
      })
      .catch((error) => {});
  }
  //更新状态setState,render都会重新执行   
  render() {
    return (
        <div>
           <input onInput={this.handleInput}></input>
           <div>
              {
                this.state.cinemaList.map(item=>
                  <dl key={item.cinemaId}>
                    <dt>{item.name}</dt>
                    <dd>{item.address}</dd>
                  </dl>   
                )
              }
           </div>
        </div>
    );
  }
  handleInput=(event)=>{
    console.log('input',event.target.value)
    // includes既可用于字符串也可用于数组
    // cinemaList 每次都会被重新覆盖 所以bakcinemaList
    var newList = this.state.bakcinemaList.filter(item=>item.name.toUpperCase().includes(event.target.value.toUpperCase()) || item.address.toUpperCase().includes(event.target.value.toUpperCase()) )
    console.log('newList: ', newList);
    // 异步
    this.setState({
      cinemaList:newList
    })
    console.log('2----',this.state.cinemaList)
  }
}
