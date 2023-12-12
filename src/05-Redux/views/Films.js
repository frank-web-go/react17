import React, { Component } from "react";
import Nowplaying from "./films/Nowplaying";
import { Route, Redirect, Switch } from "react-router-dom";
import Commingsoon from "./films/Commingsoon";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import style from "./css/Film.module.css"
console.log('style: ', style);

export default class Films extends Component {
  render() {
    return (
      <div>
        <div style={{height:'200px',background:'yellow'}}>大轮播</div>
        <ul>
          <li>
            <NavLink to="/films/a/nowplaying" activeClassName={style.active}>正在热映</NavLink>
          </li>
          <li>
            <NavLink to="/films/a/comingsoon" activeClassName={style.active}>即将上映</NavLink>
          </li>
        </ul>
        {/* 路由配置 嵌套路由 */}
        <Switch>
          <Route path="/films/a/nowplaying" component={Nowplaying}></Route>
          <Route path="/films/a/comingsoon" component={Commingsoon}></Route>
          <Redirect path="/films/a" to="/films/a/nowplaying"></Redirect>
        </Switch>
      </div>
    );
  }
}
