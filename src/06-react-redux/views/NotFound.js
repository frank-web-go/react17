// HOC   high order component
import React from 'react'
import { useEffect } from 'react'

function NotFound(props) {
  useEffect(() => { 
    console.log('props: ', props);
  }, [props])
  return (
    <div>
      404 not found
    </div>
  )
}

function frankconnect(cb,obj) {
  var value = cb()
  return (MyComponent) => {
    // 路由属性  return 一个函数式组件(一个整体)
    return (props) => {
      // console.log('value: ', value);
      // console.log('props: ', props);
      return <div style={{color:'red'}}> 
        <MyComponent {...value} {...props}  {...obj} />
      </div>
    }
  }
}
export default frankconnect(() => {
  return {
    a: 1,
    b: 1
  }
},{ aa(){}, bb(){} })(NotFound)