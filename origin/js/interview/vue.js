var vm = new Vue({
    "el": "#app",
    // 编译outerHTML到template，编辑template到render()
    // template: "<h1>{{ msg }}</h1>",//template优先级大于outerHTML
    // render: function(createElement){//render函数优先级大于template
    //     return createElement("h2","hello world");
    // },
    // render: function(h){
    //     throw new TypeError("render error");
    // },
    data: {
        msg: "hello",
        name: "sky"
    },
    watch: {
        msg(newval, oldval){
            return newval;
        }
    },
    computed: {
        gsm: function(){
            return this.msg.split('').reverse().join('');
        }
    },
    //创建之前，data未初始化，el未挂载
    beforeCreate(){
        console.log("\n" + "beforeCreate");
        console.log(this);
        console.log(this._data);//undefined
        console.log(this.msg);//undefined
        console.log(this.gsm);//undefined
        console.log(this.$el);//undefined
    },
    //创建完毕，data初始化并进行数据观测，可以访问data属性，el未挂载
    created(){
        console.log("\n" + "created");
        console.log(this);
        console.log(this._data);
        console.log(this.msg);//hello
        console.log(this.gsm);
        console.log(this.$el);//undefined
    },
    //如果没有el则停止编译，生命周期停止。如果有el则继续编译
    //render > template > outerHTML
    beforeMount(){
        console.log("\n" + "beforeMount");
        console.log(this);
        console.log(this._data);
        console.log(this.$el);
    },
    //将编辑生成的HTML模板替换el指向的dom
    mounted(){
        console.log("\n" + "mounted");
        console.log(this);
        console.log(this._data);
        console.log(this.$el);
    },
    beforeUpdate(){
        console.log("\n" + "beforeUpdate");
        console.log(this);
        console.log(this._data);
        console.log(this.msg);
        console.log(this.$el);
    },
    updated(){
        console.log("\n" + "updated");
        console.log(this);
        console.log(this._data);
        console.log(this.msg);
        console.log(this.$el);
    },
    beforeDestroy(){
        console.log("\n" + "beforeDestroy");
        console.log(this);
        console.log(this._data);
        console.log(this.msg);
        console.log(this.$el);
    },
    destroyed(){
        console.log("\n" + "destroyed");
        console.log(this);
        console.log(this._data);
        console.log(this.msg);
        console.log(this.$el);
    }
});
// vm.$mount("#app");//手动挂载
vm.msg = "hello world";
console.log('vm.$el.textContent == "hello world" = ' + (vm.$el.textContent == "hello world"));
Vue.nextTick(function(){
    console.log('vm.$el.textContent == "hello world" = ' + (vm.$el.textContent == "hello world"));
});
// vm.$destroy();
// vm.msg = "haha";
// console.log(vm);
// console.log(vm._data);


var Person = function(){
    var _this = this;
    return {
        get name(){
            if(_this.name){
                return _this.name;
            }
            return "without name";
        },
        set name(val){
            console.log("your name is " + val + " now");
            _this.name = val;
        }
    }
};
var me = new Person();
console.log(me.name);
me.name = "sky";
console.log(me.name);
console.log(me);
console.log("\n");

var book = {};
var name = '';
Object.defineProperty(book,'name',{
    configurable: true,//可修改
    enumerable: true,//可枚举
    get: function(){
        console.log("getter");
        if(!!name){
            return name;
        }else{
            return "without name";
        }
    },
    set: function(val){
        console.log("setter is " + val);
        name = val;
    }
});
console.log(book.name);
book.name = 4;
console.log(book.name);
console.log(book);

function defineReactive(data,key,val){
    observe(val);
    Object.defineProperty(data,key,{
        configurable: true,//可修改
        enumerable: true,//可枚举
        get: function(){
            console.log("getter");
            return val;
        },
        set: function(newval){
            console.log(key + " is change = " + newval);
            val = newval;
        }
    });
}

function observe(data){
    if(!data || (typeof data != 'object')){
        return;
    }
    Object.keys(data).forEach(function(key){
        defineReactive(data,key,data[key]);
    });
}
var library = {
    book1: {
        name: "666"
    },
    book2: "777"
};
observe(library);
console.log("\n");
console.log(library.book1.name);
library.book1.name = "vue";
