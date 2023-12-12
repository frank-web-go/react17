let arr = [1000, 3000, 5000, 7000];
let promiseArr = [];

for (let i = 0; i < arr.length; i++) {
  let newPromise = new Promise((resolve, reject) => {
    if (i === 0) {
      reject(new Error("第二个错误"));
    } else {
      setTimeout(() => {
        console.log(arr[i]);
        resolve(arr[i]);
      }, arr[i]);
    }
  });
  promiseArr.push(newPromise);
}

Promise.race(promiseArr)
  .then((res) => {
    console.log("1------", res);
  })
  .catch((err) => {
    console.log("2------", err);
  });

// 报错
// 3000
// 5000
// 7000

// 微任务 > DOM渲染 > 宏任务
const $count = $("<p>内容</p>");
$("#box").append($count);

console.log(1);

Promise.resolve().then(() => {
  console.log("2 promise");
  alert("promise then");
});

setTimeout(() => {
  console.log("3 setTimeout");
  alert("setTimeout");
}, 0);

console.log(4);


// 宏任务（script打头）-> 微任务 -> 渲染 -> 宏任务（调用栈清空） 循环
// 要执行宏任务的前提是清空所有的微任务
// **********Promise.then才是一个微任务
//常见的宏任务队列 ajax,setTimeout,setInterval,DOM监听,UI Rendering等
// 常见的微任务队列 Promise的then回调,Mutation Observer ExtensionScriptApis,queueMicrotask等

for(var i=0;i<3;i++) {
    setTimeout(function(){
        console.log(i) 
    },1000*i)
}
// 3
// 3
// 3

//  promise实例是可以直接调用的
new Promise( ( resolve, reject) =>{
    console.log ( "in Promise" );//会执行
    resolve();
}).then( () => {
    throw new Error( "then Error" );//手动报错
    console.log ( "then " );//不会执行
} ).then( ()=>{
    console.log ( "then continue" );//不会执行
} ).catch((err)=> {
    console.log ( "catch error: " +err.message ) ;//会执行
});


var p = new Promise((resolve,reject)=>{
    resolve(val1);
    // or reject(val2)
 })
 p.then((okVal)=>{
    console.info("成功");
    console.log(okVal);
}, (errVal)=>{
    console.info("失败");
    console.log(errVal);
})

// 所有promise方法调用后返回的都是一个对象
new Promise(function(resolve, reject) {
 
    setTimeout(() => resolve(1), 1000); // (*)

  }).then(function(result) { // (**)

    alert(result); // 1
    return result * 2;

  }).then(function(result) { // (***)

    alert(result); // 2
    return result * 2;

  }).then(function(result) {

    alert(result); // 4
    return result * 2;

  });

  
new Promise(function(resolve, reject) {
 
    setTimeout(() => resolve(1), 1000);
   
  }).then(function(result) {
   
    alert(result); // 1
   
    return new Promise((resolve, reject) => { // (*)
      setTimeout(() => resolve(result * 2), 1000);
    });
   
  }).then(function(result) { // (**)
   
    alert(result); // 2
   
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
   
  }).then(function(result) {
   
    alert(result); // 4
   
  });

  
const first = () => new Promise((resolve, reject) => {
    console.log(3)
    let p = new Promise((resolve, reject) => {
        console.log(7)
        setTimeout(() => {
            console.log(5)
            resolve(6)
        })
        resolve(1)
    })
    resolve(2)
    p.then((arg) => {
        console.log(arg)
    })
})
 
first().then((arg) => {
    console.log(arg)
})
console.log(4) // 3 7  4 1 2 5
// 关键点:由于p之前已经resolve(1)，再resolve(3)无效

setTimeout(()=>{
    console.log("0")
})
new Promise((resolve,reject)=>{
    console.log("1")
    resolve();
}).then(()=>{
    console.log("2")
    new Promise((resolve,reject)=>{
        console.log("3")
        resolve()
    }).then(()=>{
        console.log("4")
    }).then(()=>{
        console.log("5")
    })
}).then(()=>{
    console.log("6")
})
 
new Promise((resolve,reject)=>{
    console.log("7")
    resolve()
}).then(()=>{
    console.log("8")
})
// 1 7 2 3 8 4 
// 关键点:每次.then() 都会new Promise()

