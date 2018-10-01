var array = [1,2,3];
Array.prototype.color = "red";
Object.prototype.width = "80";

for(let i in array){
    console.log(i + " : " + array[i]);
}

for(let i in array){
    if(array.hasOwnProperty(i)){
        console.log(i + " : " + array[i]);
    }
}

for(let i = 0; i < array.length; i++){
    console.log(i + " : " + array[i]);
}

for(let i of array){
    console.log(i);
}

array.forEach(function(item,index){
    console.log(index + " : " + item);
});

console.log(array.hasOwnProperty("color"));

for(let i = 0; i < 10; i++){
	if(i == 5){
		continue;//跳出当前循环
	}
	if(i == 8){
		break;//跳出循环体
	}
	console.log("i = " + i);
}