import React, { Component } from 'react'
import MRouter from "./router/IndexRouter"
import Tabbar from './components/tabbar'
import "./views/css/App.css"

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 其他的内容 */}
        <MRouter>
          <Tabbar></Tabbar>
        </MRouter>
      </div>
    )
  }
}
