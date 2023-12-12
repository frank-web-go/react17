// rfc
import React from 'react'

export default function Sidebar(props) {
  console.log(props)
  let {bg,position} = props
  var obj1 = {
    left:0
  } 
  var obj2 = {
    right:0
  }
  
  var obj = {
    background:bg,
    width:'200px',
    position:"fixed",
  }
  
  var styleObj = position === "left" ? {...obj1,...obj}:{...obj2,...obj}

  return (
    <div style={styleObj}>
       <ul>
          <li>1111111</li>
       </ul>
    </div>
  )
}

// Sidebar.defaultProps //默认验证
// Sidebar.propTypes //属性验证
