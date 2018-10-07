function timeout(ms){
    console.log(arguments.callee);
    console.log(arguments.callee.name);
    return new Promise((resolve,reject) => {
        console.log(this);
        setTimeout(resolve,ms,5);//第三个参数作为第一个函数的参数值传递
    });
}
var promise = timeout(10);
promise.then((value) => {
    console.log(value * value);
});

timeout(20).then((value) => {
    console.log(value);
});
console.log("hello");

var p1 = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('fail')), 3000)
})
var p2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(p1), 1000)
})
p2
    .then(result => console.log(result))
    .catch(error => console.log(error))

const preloadImage = function (path) {
    return new Promise(function (resolve, reject) {
        var image = new Image();
        image.src = path;
        console.log(path);
        image.onload = resolve;
        image.onerror = reject;
    });
};

let img = "http://cres1.fenqile.cn/sale/img/page/event/201612120000839/h5/succeed_banner_11f3f29.jpg";
preloadImage(img)
    .then(value => (console.log(value)))
    .catch(error => (console.log(error)))

function func1(v){
    console.log(v);
};
func1(1);

var func2 = (v) => {
    console.log(v);
};
func2(2);

// var func3 = (v) => {name: v};//undefined
var func3 = (v) => ({name: v});
console.log(func3(3));//{name:3}

const square = x => x * x;
console.log(square(6));

function stringToArray(...string){//rest将未命名的参数转为数组
    console.log(string);
    return string;
}
var arr = stringToArray(1,2,3);//扩展运算符将数组转为字符串
console.log(...arr);

var json = {
    "name": "sky",
    "age": 18
}

