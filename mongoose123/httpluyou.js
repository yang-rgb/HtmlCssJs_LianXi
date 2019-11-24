let http=require("http");
let fs=require("fs");
let server=http.createServer((req,res)=>{
	if(req.url==="/test1.html"){
		// (req.url==="/page1/xx")
		fs.readFile("./test1.html",(err,data)=>{
			if(!err){
				res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
				res.end(data);
			}
		});
	}else if(req.url==="/test2.html"){
		fs.readFile("./test2.html",(err,data)=>{
			if(!err){
				res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
				res.end(data);
			}
		});
	}else if(req.url==="/"){
		res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
		res.end("hello");
	}else if(req.url==="/css/new_file.css"){
		fs.readFile("./css/new_file.css",(err,data)=>{
			if(!err){
				res.writeHead(200,{"Content-Type":"text/css"});
				res.end(data);
			}
		});
	}else if(req.url==="/img/1.jpg"){
		fs.readFile("./img/1.jpg",(err,data)=>{
			if(!err){
				res.writeHead(200,{"Content-Type":"image/jpg"});
				res.end(data);
			}
		});
	}else if(req.url==="/souce/4~1.mp4"){
		fs.readFile("./souce/4~1.mp4",(err,data)=>{
			if(!err){
				res.writeHead(200,{"Content-Type":"video/mpeg4"});
				res.end(data);
			}
		});
	}else{
		res.writeHead(404,{"Content-Type":"text/html;charset=UTF-8"});
		res.end("hello 404 end");
	}
	
});
server.listen(80,"127.0.0.1")