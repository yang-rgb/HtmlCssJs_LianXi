let http=require("http");
let fs=require("fs");
let url=require("url");
let ejs=require("ejs");

http.createServer((req,res)=>{
	// 读取数据
	getDataJson((dataJson)=>{
		// 读取模板
		fs.readFile("./ejslist.ejs",(err,data)=>{
			let ejsList=data.toString();
			
			let tmp=ejs.render(ejsList,dataJson);
			
			res.writeHead(200,"Content-Type":"text/html:charset=UTF-8");
			
			res.end(tmp);
		})
	})	
			
	
}).listen(80,"127.0.0.1");


function getDataJson(callBack){
	fs.readFile("./model/data.json",(err,data)=>{
		if(!err){
			let mimeJson=JSON.parse(data);
			callBack(mimeJson);
		}else{
			throw err;
		}
		
	})
}



