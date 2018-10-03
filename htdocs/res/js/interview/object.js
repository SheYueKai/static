var box = new Object();
box.name = 'box';
box.say = function(){
    console.log(this.name);
}

box.say();

box2 = box;
box2.name = 'box2';
box2.say();
box.say();
console.log("box == box2 is " + (box == box2));

//工厂模式，解决了重复实例化的问题
//每次调用都会产生新的对象，无法识别是哪个对象的实例
function create(name){
    var obj = new Object();
    obj.name = name;
    obj.say = function(){
        console.log(this.name);
    }
    return obj;
}
var box3 = create('box3');
var box4 = create('box4');
box3.say();
box4.say();
console.log("bo3 == box4 is " + (box3 == box4));

//使用构造函数创建对象，可以识别到是哪个对象的实例
//1、创建一个新的对象，隐式调用new Object()
//2、将this指向新的对象
//3、执行构造函数内的内容
//4、返回新的对象
function Box(name){
    this.name = name;
    this.say = function(){
        console.log(this.name);
    }
}
//构造函数也是函数，需要通过new操作符来创建新的对象
var box5 = new Box('box5');
var box6 = new Box('box6');
box5.say();
box6.say();
console.log("box5 == box6 is " + (box5 == box6));
console.log("box5 instanceof Box is " + (box5 instanceof Box));

var obj = new Object();
Box.call(obj,'obj');
obj.say();

//函数拥有属性prototype，指向通过该构造函数创建的对象的原型对象
function Boxes(){}
Boxes.prototype.name = 'boxes';
Boxes.prototype.say = function(){
    console.log(this.name);
}
var box7 = new Boxes();
var box8 = new Boxes();

box7.say();
box8.say();
console.log("box7 == box8 is " + (box7 == box8));
console.log("box7.say === box8.say is " + (box7.say === box8.say));
//构造函数的prototype和通过构造函数创建的对象的__proto__是同一个，也就是原型对象
console.log("box7.__proto__ == Boxes.prototype is " + (box7.__proto__ == Boxes.prototype));

//判断对象是否指向该构造函数的原型对象
console.log("Boxes.prototype.isPrototypeOf(box7) is " + Boxes.prototype.isPrototypeOf(box7));


box7.name = "box7";
console.log("box7.hasOwnProperty('name') is " + box7.hasOwnProperty('name'));
box7.say();//就近原则，读取实例中的name
box8.say();//原型对象中的name不会被改变
delete box7.name;
console.log("box7.hasOwnProperty('name') is " + box7.hasOwnProperty('name'));
box7.say();
delete box7.__proto__.name;//删除原型中的属性
// delete Boxes.prototype.name;
box7.say();
box8.say();

Boxes.prototype.name = 'boxes';

function isProperty(obj,property){
    return !obj.hasOwnProperty(property) && (property in obj);
}
var box9 = new Boxes();
box9.age = 6;
console.log("isProperty(box9,'age') is " + isProperty(box9,'age'));
console.log("isProperty(box9,'name') is " + isProperty(box9,'name'));
//构造函数创建的对象，constructor会指向构造函数
console.log("box9.constructor == Boxes is " + (box9.constructor == Boxes));

function Boss(){};
Boss.prototype = {
    name: 'jay',
    say: function(){
        console.log(this.name);
    }
}
var boss = new Boss();
//字面量创建的对象，constructor不会指向构造函数
console.log("boss.constructor == Boss is " + (boss.constructor == Boss));
// Boss.prototype.constructor = Boss;
// console.log("boss.constructor == Boss is " + (boss.constructor == Boss));

function Ball(name){
    this.name = name;
    if(typeof this.say != 'function'){
        Ball.prototype.say = function(){
            console.log(this.name);
        }
    }
}
var ball = new Ball('ball');
ball.say();
var ball2 = new Ball('ball2');
ball2.say();

function Parent(){
    this.name = 'parent';
}
function Son(){
    this.age = 18;
    this.say = function(){
        console.log(this.name);
    }
}
Son.prototype = new Parent();
var son = new Son();
son.say();

console.log(son.__proto__);
console.log(Son.prototype);
console.log(son.constructor);


