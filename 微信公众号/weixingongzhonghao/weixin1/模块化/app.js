const express = require("express")
const sha1=require("sha1")
const config=require("./config/index.js")
const auth=require("./weachat/auth.js")

// 创建app应用对象
const app=express();
// 验证服务器的有效性

app.use(auth());
// 监听端口号
app.listen(3000,()=>{
	console.log("服务器启动成功了~")
})