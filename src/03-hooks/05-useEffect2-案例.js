import React, {Component, useEffect, useState } from 'react'
import axios from "axios"

function FilmList (props) {
   const [list,setlist] = useState([])
   useEffect(()=>{
    // console.log(44444)
    if(props.type === 1) {
        // 请求卖座正在热映的数据
        axios({
          method:"get",
          url:'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6615162',
          headers:{
            "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"16990103281291831673356289"}',
            "X-Host": "mall.film-ticket.film.list"
          }
        }).then((res)=>{
          console.log('res.data.data.films: ', res.data.data.films)
          setlist(res.data.data.films)
        })
      } else {
        // 请求卖座即将上映的数据
        axios({
          method:"get",
          url:'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=6652800',
          headers:{
            "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"16990103281291831673356289","bc":"110100"}',
            "X-Host": "mall.film-ticket.film.list"
          }
        }).then((res)=>{
          console.log('res.data.data.films: ', res.data.data.films)
          setlist(res.data.data.films)
        })
      }
   },[props.type])
  // 依赖不更新，useEffect也不会执行   
    return(
      <ul>
        { list.map(item=>
            <li key={item.filmId}>{item.name}</li>   
          )
        }
      </ul>
    )
}

export default class App extends Component {
    state = {
      type:1
    }
    render() {
      return (
        <div>
          <ul>
            <li onClick={()=>{
              this.setState({
                type:1
              })
            }}>正在热映</li>
            <li onClick={()=>{
              this.setState({
                type:2
              })
            }}>即将上映</li>
          </ul>
          <FilmList type={this.state.type}></FilmList>
        </div>
      )
    }
  }

