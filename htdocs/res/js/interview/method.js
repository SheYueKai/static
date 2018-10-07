Object.assign(Function.prototype,{
    clone(){
        var _this = this;
        var temp = function(){
            return _this.apply(this,arguments);
        }
        for(var key in this){
            if(this.hasOwnProperty(key)){
                temp[key] = this[key];
            }
        }
        return temp;
    }
});
// Function.prototype.clone = function(){
//     var _this = this;
//     var temp = function(){
//         return _this.apply(this,arguments);
//     }
//     for(var key in this){
//         if(this.hasOwnProperty(key)){
//             temp[key] = this[key];
//         }
//     }
//     return temp;
// }

function isCircle(obj){
    let result = false;
    try{
        JSON.stringify(obj);
    }catch(e){
        result = true
    }finally{
        return result;
    }
}

function isObj(obj){
    return (typeof obj == 'object') && (obj !== null);
}

function isFunction(func){
    return (typeof func == 'function');
}

function deepClone(obj){
    //函数不见了，正则表达式变成空对象，时间对象变成字符串
    //只适用于普通的数组和对象
    // return JSON.parse(JSON.stringify(obj));

    let objClone = (obj instanceof Array) ? [] : {};
    for(let i in obj){
        // let constructor = obj[i].constructor;
        if(obj.hasOwnProperty(i)){
            if(isFunction(obj[i])){
                objClone[i] = obj[i].clone();
            }else if((obj[i] === undefined) || (obj[i] === null) || (obj[i].constructor == Date) || (obj[i].constructor == RegExp) || !isObj(obj[i])){
                objClone[i] = obj[i];
            }else{
               objClone[i] = arguments.callee(obj[i]);//属性是对象则递归调用 
            }
        }
    }
    return objClone;
}

var object = {
    name: "sky",
    unde: undefined,
    nul: null,
    hobby: ["sing","game","running"],
    todo: {
        program: "front-end",
        interview: "tencent"
    },
    date: new Date("2018-10-01"),
    reg: /aaa/g,
    say: function(num){
        console.log(this.name + " is " + this.age + " years old");
    },
    call: () => {
        console.log(this.name + " is " + this.age + " years old");
    }
}
console.log(object);

var object2 = object;//浅拷贝
console.log(object2);
console.log("object === object2 = " + (object === object2));
console.log(object.say == object2.say)

var object3 = deepClone(object);//深拷贝
console.log(object3);
console.log("object === object3 = " + (object === object3));
console.log(object.say == object3.say)

var object4 = Object.assign({},object);
console.log(object4);
console.log("object === object4 = " + (object === object4));
console.log(object.say == object4.say)

console.log("Object.assign(object) === object = " + (Object.assign(object) === object));

object.name = "jolin";
object.hobby.pop();
object.todo.program = "javascript";
object.date = new Date("2018-10-07");
object.reg = /bbb/i;
console.log(object);
console.log(object2);
console.log(object3);
console.log(object4);

var func1 = function(num = 0){
    let name = 'sky',
        age = 18;
    return (name + " = " + (age - num));
}
console.log(func1(2));
var func2 = func1.clone();
console.log(func2(4));
console.log("func1 === func2 = " + (func1 === func2));

var a = {};
a.a = a;
console.log("\n");
console.log(a);
console.log("isCircle(a) = " + isCircle(a));
console.log("isCircle(object) = " + isCircle(object));
// console.log(JSON.stringify(a));//报错，a形成了环，对象循环引用

//扩展运算符，concat，slice对于数组内的数组只是浅拷贝
var arr = [1,2,[3,4]];
// var arr1 = [...arr];
// var arr1 = arr.concat();
// var arr1 = arr.slice();
var arr1 = deepClone(arr);
console.log(arr);
console.log(arr1);
console.log(arr === arr1);

arr[0] = 5;
arr[2].pop();
console.log(arr);
console.log(arr1);