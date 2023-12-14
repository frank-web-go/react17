import React, { Component } from "react";
import {
  BrowserRouter,
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Films from "../views/Films";
import Center from "../views/Center";
import Cinemas from "../views/Cinemas";
import Detail from "../views/Detail";
import NotFound from "../views/NotFound";
// import Nowplaying from '../views/Nowplaying'
import Login from "../views/Login";
import City from "../views/City";
import Search from "../views/Search";

function isAuth() {
  return localStorage.getItem("token");
}

//BrowerRouter 没有#的路径，属于后端路由

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 根组件路由 */}
        <Router>
        {/* <HashRouter> */}
        {/* <BrowserRouter> */}
          {this.props.children}
          {/* 只显示匹配的第一个*/}
          <Switch>
            {/* Route是模糊匹配 */}
            <Route path="/films/a" component={Films}></Route>
            {/* <Route path="/films/a/nowplaying" component={Nowplaying}></Route> */}
            <Route path="/cinemas" component={Cinemas} exact></Route>
            <Route path="/cinemas/search" component={Search}></Route>
            {/* <Route path="/center" component={Center}></Route> */}
            <Route
              path="/center"
              // ...props 将router属性全部传过去
              render={(props) => (isAuth() ? <Center myname='frank' {...props} /> : <Redirect to="/login" />)}
            ></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/city" component={City}></Route>
            {/* /detail/1111  动态路由*/}
            {/* <Route path="/detail/:myid" component={Detail}></Route> */}
            <Route path="/detail" component={Detail}></Route>
            {/* Redirect中 / 是模糊匹配 */} {/* 精确匹配 exact */}
            <Redirect from="/" to="/films/a" exact />
            <Route component={NotFound}></Route>
          </Switch>
          {/* </HashRouter> */}
        {/* </BrowserRouter> */}
        </Router>
      </div>
    );
  }
}

/*
films ===> Films
cinemas ===> Cinemas
center ===> Center
*/

// class Route extends Component {
//   render(){
//     var MyComponent = this.props.component
//     return (
//       <div>
//         <MyComponent history={} match={}...></MyComponent>
//       </div>
//     )
//   }
// }

 