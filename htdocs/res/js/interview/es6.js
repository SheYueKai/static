let i = 9;
let fn = () => {
    console.log(i);
}
fn();

// {
//  console.log(a);//暂时性死区，没有变量提升
//  console.log(b);//undefined，变量提升

//  let a = 1;
//  var b = 2;
// }
// console.log(a);//a is not defined，块级作用域
// console.log(b);//函数作用域

{
    // console.log(tmp);
    // typeof tmp;
    console.log(typeof never);

    let tmp;
    console.log(tmp);
    tmp = 666;
    console.log(tmp);
}

// function bar(x = y,y = 2){
//     console.log([x,y]);
// }
// bar();//y is not defined

function bar(y = 2,x = y){
    console.log([x,y]);
}
bar();

function test(){
    let a = 1;
    // var a = 2;//a已经被定义
    // let a = 3;
}
test();

var tmp = new Date();

function f(){
   console.log(tmp);//undefined
   if(false){
       var tmp = 666;//变量提升 
   } 
}
f();

let gg = new Date();
function g(){
    let gg = 666;
    console.log(gg);//undefined
}
g();

(function(){//立即执行匿名函数
    var tmp = 777;
}());

const PI = 3.141592653;
// const PI;//常量声明必须立即初始化
// PI = 3;//常量的值不能被改变

var aa = 1;
console.log(window.aa);//全局变量等于全局对象的属性

let bb = 2;
console.log(window.bb);//全局变量不等于全局对象的属性

let c = [[1,2],[3,4]].map(([a,b]) => (a + b));
console.log(c);

function change([a,b]){
    return [b,a];
}
let arr = change([1,2]);
console.log(arr);

let d = [[1,2],[3,4]].map(([a,b]) => [b,a]);
console.log(d);

let json = {
    name: 'sky',
    age: 18,
    hobby: ['sing','game']
};

let {
    name: myname,
    age: myage,
    hobby: myhobby
} = json;
console.log(myname);
console.log(myage);
console.log(myhobby);

let array = [1,2,3];
for(let i of array){
    console.log(i);
}
for(let i of array.keys()){
    console.log(i);
}
for(let i of array.values()){
    console.log(i);
}
for(let [i,j] of array.entries()){
    console.log(i + " is " + j);
}

let map = new Map();
map.set("first", "hello");
map.set("second", "world");
for(let [key,value] of map){
    console.log(key + " is " + value);
}

let str = "hello world";
console.log(str.includes('h'));
console.log(str.includes('h',2));
console.log(str.startsWith('hell'));
console.log(str.startsWith('hell',3));
console.log(str.startsWith('hel0'));
console.log(str.endsWith('l'));
console.log(str.endsWith('hel',3));
console.log(str.endsWith('ld'));

var string = "abc".repeat(2);
console.log(string);
var string = "abc".repeat(0);
console.log(string);
var string = "abc".repeat(3.9);//小数向下取整
console.log(string);

var pad = 'abc'.padStart(10, '1234567890');
console.log(pad);
var pad = '12'.padStart(10, '0');
console.log(pad);

var temp = `In JavaScript '\\n' is a line-feed.`;
console.log(temp);

let name = 'sky',age = 18;
var temp = `${name} is ${age} years old`;
console.log(temp);

console.log(isFinite('25'));
console.log(isFinite(25));
console.log(Number.isFinite('25'));//非数值直接返回false，Number.isNaN也一样
console.log(Number.isFinite(25));

console.log(Number.isInteger('25'));
console.log(Number.isInteger(25));
console.log(Number.isInteger(25.0));//25 === 25.0
console.log(Number.isInteger(25.5));

let num = 3;
num **= 3;
console.log(num);

let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

let arr1 = Array.from(arrayLike);//类数组对象转为真正的数组
console.log(arrayLike);
console.log(arr1);

function foo(a,b){
    console.log([...arguments]);
    console.log(Array.from(arguments));
}
foo(1,2);

console.log(Array.from([1,2,3], x => (x * x)));
console.log(Array.from([1,,3]));
console.log([...[1,,3]]);

console.log(Array());
console.log(Array.of());
console.log(Array(3));//指定数组的长度
console.log(Array.of(3));//[3]
console.log(Array(3,6));
console.log(Array.of(3,6));

console.log([1,2,NaN].includes(1));
console.log([1,2,NaN].includes(1,1));
console.log([1,2,NaN].includes(4));
console.log([1,2,NaN].includes(NaN));