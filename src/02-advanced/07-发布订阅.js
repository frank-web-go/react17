// 调度中心
var bus = {
  list: [],

  // 订阅
  subscribe(callback) {
    console.log('callback: ', callback);
    this.list.push(callback);
  },
  // 发布
  publish(text) {
    // 遍历所有的list，将回调函数执行
    console.log(this.list)
    this.list.forEach(callback=>{
       callback && callback(text)
    })
  },
};

// 订阅者
bus.subscribe((value) => {
  console.log(111,value);
});
bus.subscribe((value) => {
  console.log(222,value);
});

// 发布者
bus.publish("aaaa")