import React, { useEffect, useState } from 'react'
import store from '../redux/store'
import getCinemaListAction from "../redux/actionCreator/getCinemaListAction"

export default function Cinemas(props) {
  const [cityName, setcityName] = useState(store.getState().CityReducer.cityName)
  useEffect(() => {
    console.log('store.getState().CinmeaListReducer.list', store.getState().CinmeaListReducer.list)
    if (store.getState().CinmeaListReducer.list.length === 0) {
      // 去后台取数据
      // actionCreator 里面写异步
      store.dispatch(getCinemaListAction())
    } else {
      console.log("store 缓存")
    }
  }, [])
  return (
    <div>
      <div onClick={() => {
        props.history.push(`/city`)
      }}>{cityName}</div>
      cinmeas
    </div>
  )
}
