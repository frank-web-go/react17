import React from 'react'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'

function Center(props) {
  return (
    <div>
      center
      <div onClick={()=>{
        props.history.push(`/filmsorder`)
        // console.log(props) //属性为空，没有components属性，直接自身实例化
      }}>电影订单</div>
    </div>
  )
}

export default withRouter(Center)