let http=require("http");
let url=require("url");
let querystring = require('querystring');
let formidable=require("formidable");
let util=require("util");
let uuidv1 = require('uuid/v1');
let path=require("path");
let fs=require("fs");

// let {URL}=require("url");

http.createServer((req,res)=>{
		// let myURL =new URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');
	
	// get
	// let myurl=url.parse(req.url,true);
	// let queryObj=myurl.query;
	// console.log(queryObj)
	
	// post
	// if(req.url==="/postmsg" && req.method.toLowerCase()==="post"){
	// 	let allData='';
	// 	req.on("data",(buf)=>{
	// 		allData+=buf;
	// 	});
	// 	req.once("end",()=>{
	// 		// console.log(allData)
	// 		res.end("hello ok");
	// 		let dataObj=querystring.parse(allData);
	// 		console.log(dataObj)
	// 	})
	// }
	
	
	// formidable
	if(req.url==="/postmsg" && req.method.toLowerCase()==="post"){
		// 实例化对象
		let form = new formidable.IncomingForm();
		// 设置上传的文件路径
		form.uploadDir="./uploads";
		// 获得表单的内容
		form.parse(req,(err, fields, files)=>{
				console.log(files)
				// 随机数
				let name=uuidv1();
				// 获取上传文件的后缀
				let extName=path.extname(files.uploadImg.name);
				// 设置路径
				let oldPath=__dirname+"/"+files.uploadImg.path;
				let newPath=__dirname+"/uploads/"+name+extName;
				
				// 改名
				fs.rename(oldPath,newPath,(err)=>{
					if(!err){
						res.writeHead(200, {'content-type': 'text/html;charset=UTF-8'});
						 res.write('写入成功');
						 res.end(util.inspect({fields: fields, files: files}));
					}else{
						throw err;
					}
				})
				
				
		    
		    });
		
	}
	
	

	
	
}).listen(80,"127.0.0.1")