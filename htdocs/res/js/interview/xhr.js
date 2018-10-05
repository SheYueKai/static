var xhr = new xmlHttpRequest;
xhr.open('POST', url, true);
xhr.send();

xhr.onReadyStateChange = function(){
	if(xhr.readyState === 4 && xhr.status === 200){
		console.log(xhr.responseText);
	}
}

// readyState 0-4
// 0 - 表示xhr对象已经存在，还未初始化
// 1 - 调用open方法，初始化并发送请求
// 2 - 调用send方法，接收服务器返回的数据，还未解析
// 3 - 解析服务器返回的数据，转换为responseText或responseXml能处理的数据
// 4 - 数据解析完成，可以给客户端调用