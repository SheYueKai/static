function sum (argument) {
    let sum = 0;
    if(arguments.length == 0){
        return sum;
    }
    for(let i of arguments){
        sum += i;
    }
    return sum;
}
console.log("function's arguments");
console.log("sum() = " + sum());
console.log("sum(1) = " + sum(1));
console.log("sum(1,2) = " + sum(1,2));
console.log("sum(1,2,3) = " + sum(1,2,3));

//递归实现累加
//arguments是类数组对象，arguments.callee是一个指针，指向拥有arguments对象的函数
function add(num){
    if(num == 1){
        return 1;
    }else{
        // return num + add(num - 1);
        return num + arguments.callee(num - 1);

    }
}
console.log("\nadd(1) = " + add(1));
console.log("add(10) = " + add(10));
console.log("add(100) = " + add(100));
console.log("add.length = " + add.length + '\n ');//希望接收的命名参数的个数


var color = 'red';
var box = {
    color: 'blue'
};

function sayColor(color){
    console.log("this.color = " + this.color);
}

sayColor();
sayColor.call(box);
sayColor.apply(box);
console.log("\n");

var Pet = {
    word: '666',
    speak: function(say){
        console.log("say + this.word = " + say + this.word);
    }
}

function Dog(){
    Pet.speak.apply(this,arguments);//apply放在函数中才有arguments
}

Pet.speak('hello');
var word = '777';
Pet.speak.call(this,'hi');
Dog('world');

(function(){
    return function(){
        console.log('666');
    }
})()();

function add(){
    var age = 100;
    return function(){
        age++;
        return age;
    }
}
var a = add();
console.log(a());
console.log(a());

var time = 11;
var times;
function timeout(){
    time--;
    if(time <= 0){
        clearTimeout(times);
    }else{
        times = setTimeout(function(){
            if(time < 10){
                console.log('0' + time);
            }else{
                console.log(time);
            }
            timeout();
        },1000);
    }
}
// timeout();

var timed;
function timeint(){
    timed = setInterval(function(){
        time--;
        if(time <= 0){
            clearInterval(timed);
        }
        if(time < 10){
            console.log('0' + time);
        }else{
            console.log(time);
        }
    },1000);
}
// timeint();

var search = location.search ? location.search.slice(1) : '';
function getAttr(url){
    var array = url.split('&');
    var item = [];
    var obj = {};
    var key,value;
    for(var i = 0;i < array.length;i++){
        item = array[i].split('=');
        key = item[0];
        value = item[1];
        obj[key] = value;
    }
    return obj;
}
console.log(getAttr(search));

