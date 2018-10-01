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