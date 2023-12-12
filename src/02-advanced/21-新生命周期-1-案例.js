// getDerivedStateFromProps 父传子应用
import React, { Component } from 'react'
import axios from "axios"
class FilmList extends Component {
  state = {
   list:[],
   type:1
  }
  // 初始化-执行一次
  componentDidMount() {
    // console.log(this.props.type)
    if(this.props.type === 1) {
      // 请求卖座正在热映的数据
      console.log('请求卖座正在热映的数据---componentDidMount111')
      axios({
        method:"get",
        url:'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6615162',
        headers:{
          "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"16990103281291831673356289"}',
          "X-Host": "mall.film-ticket.film.list"
        }
      }).then((res)=>{
        console.log('res.data.data.films: ', res.data.data.films)
        this.setState({
          list:res.data.data.films
        })
      })
    } else {
      // 请求卖座即将上映的数据
      console.log('请求卖座正在热映的数据---componentDidMount222')
      axios({
        method:"get",
        url:'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=6652800',
        headers:{
          "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"16990103281291831673356289","bc":"110100"}',
          "X-Host": "mall.film-ticket.film.list"
        }
      }).then((res)=>{
        console.log('res.data.data.films: ', res.data.data.films)
        this.setState({
          list:res.data.data.films
        })
      })
    }
  }
//多次父传子之后，函数触发多次，return最终合并到老状态中，在一个事件循环中连续多次合并成一次进行处理 
// 重复点击，重复合并 
 //解决频繁异步请求 
  static getDerivedStateFromProps(nextProps,nextState){
    console.log("getDrivedStateFromProps",nextProps)
    // 异步 不能进行axios
    // 合并 
    return {
      //转化成状态 
      type:nextProps.type
    } 
 } 
  
// 取数据 
// 一次请求 
 componentDidUpdate(prevProps,prevState){
   console.log("componentDidUpdate")
   // 更新完的值    
   console.log('this.state.type: ', this.state.type);
   //判断最新的值是否跟老的值一样    
   if(this.state.type===prevState.type){
     return
   }

   if(this.state.type === 1) {
        // 请求卖座正在热映的数据
        console.log('请求卖座正在热映的数据---componentWillReceiveProps111')
        axios({
        method:"get",
        url:'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6615162',
        headers:{ 
            "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"16990103281291831673356289"}',
            "X-Host": "mall.film-ticket.film.list"
        }
        }).then((res)=>{
        console.log('res.data.data.films: ', res.data.data.films)
        this.setState({
            list:res.data.data.films
        })
        })
    } else {
        // 请求卖座即将上映的数据
        console.log('请求卖座即将上映的数据---componentWillReceiveProps222')
        axios({
        method:"get",
        url:'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=6652800',
        headers:{
            "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"16990103281291831673356289","bc":"110100"}',
            "X-Host": "mall.film-ticket.film.list"
        }
        }).then((res)=>{
        console.log('res.data.data.films: ', res.data.data.films)
        this.setState({
            list:res.data.data.films
        })
        })
    }
 }
 

  // 执行优先级比较低碎片化任务时，容易被打断，就可能被执行多次
//   UNSAFE_componentWillReceiveProps(nextProps){
//     if(nextProps.type === 1) {
//       // 请求卖座正在热映的数据
//       console.log('请求卖座正在热映的数据---componentWillReceiveProps111')
//       axios({
//         method:"get",
//         url:'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6615162',
//         headers:{
//           "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"16990103281291831673356289"}',
//           "X-Host": "mall.film-ticket.film.list"
//         }
//       }).then((res)=>{
//         console.log('res.data.data.films: ', res.data.data.films)
//         this.setState({
//           list:res.data.data.films
//         })
//       })
//     } else {
//       // 请求卖座即将上映的数据
//       console.log('请求卖座即将上映的数据---componentWillReceiveProps222')
//       axios({
//         method:"get",
//         url:'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=6652800',
//         headers:{
//           "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"16990103281291831673356289","bc":"110100"}',
//           "X-Host": "mall.film-ticket.film.list"
//         }
//       }).then((res)=>{
//         console.log('res.data.data.films: ', res.data.data.films)
//         this.setState({
//           list:res.data.data.films
//         })
//       })
//     }
//   }
  render(){
    console.log("render")
    return(
      <ul>
        { this.state.list.map(item=>
            <li key={item.filmId}>{item.name}</li>   
          )
        }
      </ul>
    )
  }

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
