let http=require("http");
let fs=require("fs");
let path=require("path");
let url=require("url");

http.createServer((req,res)=>{
		// 获取url地址
		let pathUrl=url.parse(req.url);
		let pathName=pathUrl.pathname;
		
		// 处理路径
		if(pathName.lastIndexOf(".")===-1){
			pathName+="/new_file.html";
		}
		
		// 拼接路径
		let fileUrl="./"+path.normalize("./huabai/"+pathName);
		let extname=path.extname(fileUrl);
		console.log(fileUrl)
		// 读取文件
		fs.readFile(fileUrl,(err,data)=>{
			if(err){
				res.writeHead(404,{"Content-Type":"text/html;charset=UTF-8"});
				res.end("<h1>404</h1>");
			}

		// 找到
		getContentType(extname,(contentType)=>{
			res.writeHead(200,{"Content-Type":contentType});
			res.end(data)
		});
			
			
	});
}).listen(80,"127.0.0.1");


function getContentType(extName,callBack){
	fs.readFile("./mime.json",(err,data)=>{
		if(err){
			throw err;
			return;
		}
		let mimeJson=JSON.parse(data);
		let contentType=mimeJson[extName] || "text/plain";
		
		callBack(contentType);
	})
}



