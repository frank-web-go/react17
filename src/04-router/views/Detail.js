import React from 'react'

export default function Detail(props) {
// 1.动态路由传参   console.log('props: ', props.match.params.myid);
// 2.query传参 console.log(props.location.query.myid)
// 3.state传参 console.log(props.location.state.myid) 
  return (
    <div>
       detail
    </div>
  )
}
