const express = require("express")
const sha1=require("sha1")
const config=require("../config/index.js")

module.exports=()={
	return (req,res,next)=>{
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
	
	
}
}