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