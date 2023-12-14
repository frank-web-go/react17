// 1.引入redux
// 2.createStore(reducer)
import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import CityReducer from "./reducers/CityReducer"; 
import TabbarReducer from "./reducers/TabbarReducer";
import CinmeaListReducer from "./reducers/CinemaListReducer";
import reduxThunk from "redux-thunk"
import reduxPromise from "redux-promise"

const reducer = combineReducers({CityReducer,TabbarReducer,CinmeaListReducer})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(reduxThunk, reduxPromise)
))  
// applyMiddleware应用中间
// const store = createStore(reducer,applyMiddleware(reduxThunk, reduxPromise));

/*
store.dispatch
store.subscrbe
store.getState
*/

// function createFrankStore(reducer) {
//   var list = [];
//   var state = reducer(undefined,{})
//   function subscrbe(callback) {
//     list.push(callback);
//   }
//   function dispatch(action) {
//     state = reducer(state,action)
//     for (var i in list) {
//       list[i] && list[i]();
//     }
//   }
//   function getState() {
//     return state
//   }
//   return {
//     subscrbe,
//     dispatch,
//     getState,
//   };
// }

export default store;


/*
  var obj = {
    myname:'frank'
  }
  function test(obj) {
    var newobj = {...obj}
    newObj.myname= "xiaoming"
    return newObj
  }
  test(obj)

 纯函数：
   1.对外界没有副作用 （传入一个对象到函数中，函数执行后，对象的值没有改变）
   2.同样的输入得到同样的输出
*/ 
