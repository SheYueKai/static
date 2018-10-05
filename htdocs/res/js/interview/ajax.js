// var box = '[{"name":"name1","key":"key1"},{"name":"name1","key":"key1"}]';
var box = '[{"name":"name1","key":"key1"},{"name":"name1","key":"key1"}]';
console.log(box);

var json = JSON.parse(box);//解析json字符串
console.log(json);

var json1 = JSON.parse(box,function(key,value){
    switch(key){
        case 'name':
            return 'Mr.' + value;
        default:
            return value;
    }
});//解析json字符串
console.log(json1);

var box1 = JSON.stringify(json);//json序列化
console.log(box1);

var box2 = JSON.stringify(json,['name'],4);//过滤和缩进参数
console.log(box2);

var box3 = JSON.stringify(json,function(key,value){
    switch(key){
        case 'name':
            return 'Mr.' + value;
        default:
            return value;
    }
},4);//过滤和缩进参数
console.log(box3);

var xhr = new XMLHttpRequest();//创建对象
console.log(xhr);

xhr.open('GET','demo.json',true);//对象初始化
xhr.send(null);//发送请求
xhr.onreadystatechange = function(){
    if((xhr.readyState == 4) && (xhr.status == 200)){
        console.log('ajax success');
    }
}

console.log(xhr.getResponseHeader('Content-Type'));
xhr.setRequestHeader('Content-Type','x-www-form-urlencoded');

//readyState
//0——尚未初始化，未调用open()
//1——初始化，调用open()，未调用send()
//2——客户端发送请求，服务器接收请求，调用send()
//3——服务端处理数据
//4——服务器返回数据，等待客户端处理