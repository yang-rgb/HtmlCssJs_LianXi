const express = require("express")
const sha1=require("sha1")

// 创建app应用对象
const app=express();
// 验证服务器的有效性

const config={
	token:'qwertyuiop',
	appID:'wx3bc6a1a4d936e6f2',
	appsecret:'fd1164074b8e695f231d0229541f7d87'
}

app.use((req,res,next)=>{
	// 微信服务器提交的参数 
	// { signature: '6d7d3bf0a6c450a208e467a9aee36fcfda033284',//微信的加密签名
	//   echostr: '6340917742601225981',//微信的随机字符串
	//   timestamp: '1569817181',//微信的发送请求时间戳
	//   nonce: '1646535331' }//微信的随机数字
	console.log(req.query);
	const {signature,echostr,timestamp,nonce}=req.query;
	const {token}=config;
	
	const arr=[timestamp,nonce,token];
	const arrSort=arr.sort();
	console.log(arrSort);
	
	const str=arr.join('');
	const sha1Str=sha1(str);
	
	if(sha1Str===signature){
		res.send(echostr)
	}else{
		res. end(error);
	}
	
	
})
// 监听端口号
app.listen(3000,()=>{
	console.log("服务器启动成功了~")
})