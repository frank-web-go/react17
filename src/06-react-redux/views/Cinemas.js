import React, { useEffect } from "react";
import getCinemaListAction from "../redux/actionCreator/getCinemaListAction";
import { connect } from "react-redux";

function Cinemas(props) {
  let { list, getCinemaListAction, cityName } = props;
  // const [cityName, setcityName] = useState(
  //   store.getState().CityReducer.cityName
  // );
  // const [cinemaList, setCinemaList] = useState(
  //   store.getState().CinmeaListReducer.list
  // );
  useEffect(() => {
    // console.log('store.getState().CinmeaListReducer.list', store.getState().CinmeaListReducer.list)
    if (list.length === 0) {
      // 去后台取数据
      // actionCreator 里面写异步
      // store.dispatch(getCinemaListAction());
      getCinemaListAction();
    } else {
      console.log("store 缓存");
    }
    // console.log('store.getState().CinmeaListReducer.list-------', store.getState().CinmeaListReducer.list)
    // 1.订阅 异步获取
    // 2.一但dispath，所有的订阅者都会触发,
    // 3.store.dispath --> store.subscribe
    // 4. store.subscribe 调用顺序:从外到内
    // 5.多次触发store.subscribe，多次存储
    // var unsubscribe = store.subscribe(() => {
    //   console.log("cinema 中订阅", store.getState().CinmeaListReducer.list);
    //   setCinemaList(store.getState().CinmeaListReducer.list);
    // });
    // return () => {
    //   //取消订阅
    //   unsubscribe();
    // };
  }, [list, getCinemaListAction]);
  
  return (
    <div style={{ overflow: "hidden" }}>
      <div
        style={{ float: "left" }}
        onClick={() => {
          props.history.push(`/city`);
        }}
      >
        {/* {props.cityName} */}
        {cityName}
      </div>
      <div
        style={{ float: "right" }}
        onClick={() => {
          props.history.push(`/cinemas/search`);
        }}
      >
        搜索
      </div>
      {list.map((item) => (
        <dl key={item.cinemaId} style={{ padding: "10px" }}>
          <dt>{item.name}</dt>
          <dd style={{ fontSize: "12px", color: "gray" }}>{item.address}</dd>
        </dl>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    list: state.CinmeaListReducer.list,
    cityName: state.CityReducer.cityName,
  };
};
const mapDispatchToProps = {
  getCinemaListAction
};
export default connect(mapStateToProps, mapDispatchToProps)(Cinemas);
