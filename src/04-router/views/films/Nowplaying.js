import React, {useEffect, useState} from 'react'
import axios  from 'axios'
import { useHistory, withRouter} from 'react-router-dom/cjs/react-router-dom.min'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
// route组件是nowplaying组件的父组件，所以route给nowplaying一个props
export default function Nowplaying(props) {
  const [list, setList] = useState([])
  useEffect(()=>{
    axios({
      url:'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=4501541',
      headers:{
        "User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
        "X-Host": "mall.film-ticket.film.list"
      }
    }).then(res=>{
      console.log(res.data.data.films)
      setList(res.data.data.films)
    })
  },[])
  const history = useHistory()
  const handleChangePage = (id) => {
    // console.log("click")
    // window.location.href="#/detail" + id
    // console.log(props)
    //1-动态路由传参  props.history.push(`/detail/${id}`)  
    // this.props.history.push(`/detail/${id}`) 类写法
    //2-动态路由传参 history.push(`/detail/${id}`)

    //1-query传参  
    // history.push({pathname:'/detail',query:{myid:id}})

    // 3 - state传参
    // history.push({pathname:'/detail',state:{myid :id}})
  }
  return (
    <div>
      Nowplaying
      {
        list.map(item=>
          // <li key={item.filmId} onClick={()=>handleChangePage(item.filmId)} >
          //   {item.name}
          //   {/* <NavLink to={'/detail/' + item.filmId}>{item.name}</NavLink> */}
          // </li>
          // <FilmItem key={item.filmId} {...item} {...props} />

          // 跳转不依赖prop传参 隔空
          <WithFilmItem key={item.filmId} {...item}/>
        )
      }
    </div>
  )
}

function FilmItem(props){
  console.log('props: ', props);
  let {name,filmId, poster} = props
  return (
    <li onClick={()=>props.history.push(`/detail/${filmId}`)}>
      {/* <img src={poster}></img> */}
      {name}
    </li>
  )
}

const WithFilmItem = withRouter(FilmItem) //原理：高阶组件
