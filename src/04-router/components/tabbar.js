import React, { Component } from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import style from "./tabbar.module.css"

export default class tabbar extends Component {
  render() {
    return (
      // {style.film + " aaaa"}
      <div className={style.tabbar}>
        <ul>
            <li>
                {/* <a href="#/films/a">电影</a>  */}
                <NavLink to="/films/a" activeClassName={style.active}>电影</NavLink>
            </li> 
           <li>
               {/* <a href='#/cinemas'>影院</a>  */}
               <NavLink to="/cinemas" activeClassName={style.active} >影院</NavLink>
            </li> 
           <li>
                {/* <a href="#/center">我的</a> */}
               <NavLink to="/center" activeClassName={style.active} >我的</NavLink>
            </li> 
        </ul>
      </div>
    )
  }
}
