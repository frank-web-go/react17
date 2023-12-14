import React from "react";
import ReactDOM from "react-dom";
import App from './06-react-redux/App'
import { Provider } from "react-redux";
import store from "./06-react-redux/redux/store";

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>
    ,document.getElementById('root'))
// 严格模式
// ReactDOM.render(<React.StrictMode><App></App></React.StrictMode>,document.getElementById('root'))



// ReactDOM.render(<div><b>1212</b></div>,document.getElementById('root'))

//   /\
//   ||

// ReactDOM.render(React.createElement("div",{
//   id:'aa',
//   class:"bb"
// },'111111'),document.getElementById('root'))

/*
 jsx = js + xml
*/ 

