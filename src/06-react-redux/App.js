import React, { Component } from "react";
import MRouter from "./router/IndexRouter";
import Tabbar from "./components/tabbar";
import "./views/css/App.css";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div>
        {/* 其他的内容 */}
        <MRouter>
          {this.props.isShow && <Tabbar></Tabbar>}
        </MRouter>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  console.log('state: ', state);
  return {
    a:1,
    b:1,
    isShow:state.TabbarReducer.show
  }
}


// connect 负责订阅，发布，包装组件,dispatch
// connect后不用dispatch,订阅，getState()
export default connect(mapStateToProps)(App)

// withRouter(FiltItem)  props.history