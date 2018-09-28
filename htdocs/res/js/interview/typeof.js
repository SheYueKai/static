var array = [
    undefined,true,false,"666",666,NaN,null
];

var obj = {};
var arr = ["666"];
var func = function(){};

array.push(obj,arr,func);

function type(ele){
    //null,object,array
    if(typeof ele == "object"){
        // if(ele === null){
        //     return null;
        //Array.isArray不兼容ie8
        // }else if(Array.isArray(ele)){
        //     return "array";
        // }else{
        //     return typeof ele;
        // }
        if(ele === null){
            return null;
        }else if(typeof ele.length == "number"){
            return "array";
        }else{
            return typeof ele;
        }
        // if(ele === null){
        //     return null;
        // }else if(ele instanceof Array){
        //     return "array";
        // }else{
        //     return typeof ele;
        // }
    //number,NaN
    }else if(typeof ele == "number"){
        if(isNaN(ele)){
            return NaN;
        }else{
            return typeof ele;
        }
    //undefined,true,false,string,function
    }else{
        return typeof ele;
    }
}
console.log("array = " + array);
for(var i = 0; i < array.length; i++){
    console.log(i + ". typeof " + array[i] + " = " + typeof array[i]);
    console.log(i + ". type " + array[i] + " = " + type(array[i]));
}

var array2 = [
    true,false,"666","",0,NaN,1,Infinity,null,undefined
];
array2.push(obj,arr,func);

console.log("array2 = " + array2);
for(var i = 0; i < array2.length; i++){
    console.log(i + ". Boolean " + array2[i] + " = " + Boolean(array2[i]));
}


