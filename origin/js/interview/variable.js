function box(obj){
    obj.name = '666';
    var obj = new Object();
    obj.name = '777';
}
var p = {};
box(p);
console.log(p.name);

function outer(){
    var color = 'red';//去掉var就是全局变量
    function inner(){
        console.log('color = ' + color);
    }
    console.log('color is ' + color);
    return inner();
}
outer();

var string = 'Mr.Lee is Li,he Likes Law';
function search(str,key){
    var index = str.indexOf(key),
        arr = [];

    while(index > -1){
        arr.push(index);
        index = str.indexOf(key,index + 1);
    }
    return arr;
}
console.log(search(string,'L'));
console.log(search(string,'e'));
console.log(search(string,'M'));

var box = '//lee李';
console.log(encodeURI(box));
console.log(encodeURIComponent(box));
console.log(decodeURI(encodeURI(box)));
console.log(decodeURIComponent(encodeURIComponent(box)));

console.log(Math.min(1,2,3,4,5,6,7,8,9));
console.log(Math.max(1,2,3,4,5,6,7,8,9));

console.log("Math.round(25.1) = " + Math.round(25.1));//四舍五入
console.log("Math.round(25.5) = " + Math.round(25.5));
console.log("Math.ceil(25.1) = " + Math.ceil(25.1));//向上取整
console.log("Math.floor(25.9) = " + Math.floor(25.9));//向下取整

function random(lower,upper){
    var num = Math.abs(upper - lower) + 1;
    return Math.floor(Math.random() * num + Math.min(lower,upper));
}
for(var i = 0;i < 10; i++){
    // console.log(i + ". random = " + random(10,1));
    console.log(i + ". random = " + random(1,10));
}