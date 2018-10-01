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

var arr = [
    {},
    new Boolean(),
    new Number(),
    new String(),
    new Array(),
    new Function(),
    new Date(),
    window,
    Math,
    undefined,
    null
];
console.log('\n' + "toString.call()");
for(let i of arr){
    console.log(toString.call(i));
}

var arr2 = [
    {},
    new Boolean(),
    new Number(),
    new String(),
    new Array(),
    new Function(),
    new Date(),
    window,
    Math,
    function(){console.log("666")},
    [1,2,3]
];
console.log('\n' + "toString()");
for(let i of arr2){
    if(i.toString() === ''){
        console.log("empty string");
    }else{
        console.log(i.toString());
    }
}

console.log('\n' + "valueOf()");
for(let i of arr2){
    if(i.valueOf() === ''){
        console.log("empty string");
    }else{
        console.log(i.valueOf());
    }
}
console.log('\n');

var array = ['a',123,function(){}];

console.log(array);
console.log(typeof array);
console.log(array.toString());
console.log(typeof array.toString());
console.log(array.valueOf());
console.log(typeof array.valueOf());
console.log(array.join('|'));
console.log(typeof array.join('|'));

console.log(array.push('666'));//push返回数组长度
console.log(array);

console.log(array.pop());//pop返回栈顶元素
console.log(array);

console.log(array.push('777'));//push返回数组长度
console.log(array);

console.log(array.shift());//shift返回队首元素
console.log(array);

console.log(array.unshift('bbb'));//unshift插入队首元素
console.log(array);

//隐式调用toString()，如果重写了valueOf()和toString()，则优先调用valueOf()
//push()队尾，unshift()队头返回长度
//pop()队尾，shift()队头返回元素


console.log(array.reverse());//reverse逆向数组
console.log(array);//原数组也改变

console.log(array.sort());//sort从小到大排序
console.log(array);//原数组也改变

console.log(array.concat("888"));//concat创建新数组并插入新元素
console.log(array.concat(array));
console.log(array);//原数组不改变

console.log(array.slice(1,3));//slice[1,3)
console.log(array);//原数组不改变

console.log(array.splice(1,0));//第一个参数是下标，第二个参数为0则不删除，返回[]
console.log(array);//原数组也改变

console.log(array.splice(1,1,'999'));//第三个参数会插入
console.log(array);//原数组也改变

console.log(array.splice(1,3));//splice[1,3]
console.log(array);//原数组也改变

var number = [0,1,5,10,15];
var string = ['0','1','5','10','15'];
console.log(number.sort());//sort从小到大排序，数字按位比较不符合预期
console.log(number);//原数组也改变
console.log(string.sort());//sort从小到大排序，字符串按位比较
console.log(string);//原数组也改变

function compare(value1, value2){
    // if(value1 < value2){
    //     return -1;//-1表示value1排在value2之前
    // }else if(value1 > value2){
    //     return 1;
    // }else{
    //     return 0;
    // }
    return value1 - value2;
}
console.log(number.sort(compare));//sortc传入参数从小到大排序
console.log(number);//原数组也改变

// var array = [1,2,3,4,5,6,7,8,9,10,1,2,3,1,2,3,4];

// function frequency(array){
//     let arr = {},
//         max = 0,
//         num;
//     for(let i in array){
//         if(!!arr[array[i]]){
//             arr[array[i]]++;
//         }else{
//             arr[array[i]] = 1;
//         }
//         if(arr[array[i]] > max){
//             max = arr[array[i]];
//             num = array[i];
//         }
//     }
//     console.log(max);
//     console.log(num);
//     return arr;
// }
// console.log(frequency(array));