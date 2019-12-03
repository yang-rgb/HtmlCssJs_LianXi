const http=require('http');

//2.使用http.createServer()方法创建一个web服务器 返回一个server实例
var server=http.createServer()

// 当客户端请求过来,就会自动触发服务器request请求事件
//request两个参数
	// request 请求对象
	// 	请求对象可以用来获取客户端的一些请求信息,例如请求路径
	// response 响应对象
	// 	响应对象可以用来给客户端发送响应消息
server.on('request',function(request,response){
	
	console,log("收到客户端请求",request.url)
	
	if(response.method == 'GET'){
		console.log("GET请求")
	}else if(response.method == 'POST'){
		console.log("POST请求")
	}
	
	// response对象有一个方法:write 可以用来给客户端发动响应数据,
	// request.write(chunk[, encoding][, callback])
	// write 可以使用多次,但是最后一定要使用end 来结束响应,否则客户端会一直等待
	//返回文本
	response.setHeader('Content-type','text/plain;charset=utf-8')//设置响应头文本类型text/plain; 用utf-8解析
	response.write("hello ");
	response.write("nodejs");
	response.end();//response.end('hello nodejs'); 一样
	
	// 返回HTML页面
	response.setHeader('Content-type','text/html;charset=utf-8')//设置响应头文本类型text/html; 用utf-8解析
	fs.readFile("./test1.html",(err,data)=>{ //读取test1.html
				if(!err){
					res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
					res.end(data);//返回test1.html网页
				}
	});
	
	
})

// 绑定端口号 启动服务器 
server.listen(3000,function(){
	console.log("服务器启动成功,可以通过http://127.0.0.1:3000/ 来访问")
})