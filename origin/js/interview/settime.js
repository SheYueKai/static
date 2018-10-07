function a(){
    var user = "sky";
    console.log(this.user);//window.user是undefined
    console.log(this);//this指向执行上下文，这里指的是window对象，构造函数是Window
    console.log(user);//sky
}
a();
console.log(this);//this指向执行上下文，这里指的是window对象，构造函数是Window


var o = {
    user: "jolin",
    fn: function(){
        console.log(this.user);//jolin
        console.log(this);//this指向执行上下文，这里指的是o对象
        // console.log(user);//user is not defined
    }
}
o.fn();
// window.o.fn();

var p = {
    user: 'jacky',
    b: {
        user: 'jimmy',
        fn: function(){
            console.log(this.user);//jimmy
            console.log(this);//this指向执行上下文，这里指的是b对象
        }
    }
}
p.b.fn();

var j = p.b.fn;
j();
//this.user == undefined
//this == window
j.call(p);
j.apply(p.b);

console.log("\n");
function Fn1(){
    this.user = "common1";
}
var fn1 = new Fn1();
console.log(fn1);
console.log(fn1.user);//common

function Fn2(){
    this.user = "common2";
    return {};
    // return [];
}
var fn2 = new Fn2();
console.log(fn2);
console.log(fn2.user);

function Fn3(){
    this.user = "common3";
    return function(){};
}
var fn3 = new Fn3();
console.log(fn3);
console.log(typeof fn3);//function
console.log(fn3.user);

function Fn4(){
    this.user = "common4";
    // return 1;
    // return undefined;
    // return null;
}
var fn4 = new Fn4();
console.log(fn4);
console.log(fn4.user);//common4




console.log("\n" + 1);

setTimeout(function(){
    console.log('a');
},10);

setTimeout(function(){
    console.log('b');
},0);

let sum = 0;
for(let i = 0; i < 1000000; i++){
    sum += i;
}
console.log(sum);//执行时间会影响结果，1000000输出b、a、c，100000输出b、c、a

setTimeout(function(){
    console.log('c');
},0);

//第一次和第二次执行的时间间隔小于设定的时间间隔
console.log(1)
var interval = setInterval(function () {
    var date = new Date();
    console.log(date.getMinutes() + ':' + date.getSeconds() + ':' + date.getMilliseconds());
}, 10);
var sum1 = 0;
for (var i = 0; i < 1000000; i ++) {
    sum1 += i;
}
console.log(2);
// 清除定时器，避免卡死浏览器
setTimeout(function () {
    clearInterval(interval);
}, 100);