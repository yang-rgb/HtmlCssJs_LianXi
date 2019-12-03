const express=require('express')
const path = require('path');//路径模块

const app=express() //实例化

///////////////////////////////////////////////
//所有,有'/'的都经过这个  拦截器
app.use('/', function (req, res, next) {
  console.log('中间件')
  let {token}=req.query
  if(token){
  	next()//是否继续往下执行
  }else{
  	res.send("缺少token")
  }
  
})

//http://localhost:8000/test1?token=1234
// 简单的api接口
app.get('/test1',(req,res)=>{
	// let {token}=req.query //上面的写法
	// if(token){
	// 	res.send("ok")
	// }else{
	// 	res.send("no")
	// }
		res.send("test1")
})

app.get('/test2',(req,res)=>{
	// let {token}=req.query
	// if(token){
	// 	res.send("ok")
	// }else{
	// 	res.send("no")
	// }
		res.send("test2")
})


///////////////////////////////////////////////
//局部中间件
app.get('/test1',(req, res, next)=>{
	console.log("fun1")
	next()
},(req,res)=>{
	console.log("fun2")
	res.send("test1")
})


//////////////////////////////////////////////////
//内置中间件  静态资源目录 static
//指定目录 目录可以被访问
// 通过如下代码就可以将 public 目录下的图片、CSS 文件、JavaScript 文件对外开放访问了：绝对路径  获取路径 __dirname  __filename
//app.use(express.static('public'))

console.log(__dirname)//当前文件路径
console.log( path.join(__dirname,'./hehe') ) //引入path模块 //拼接路径 当前文件路径/hehe

//直接指向规定的静态目录
app.use(express.static(path.join(__dirname,'./hehe')))
//http://localhost:8000/public/hehe/...
app.use(express.static('/public',path.join(__dirname,'./hehe')))





app.listen(8000,()=>{
	//监听8000端口 开启服务器
	console.log('start')
})
//http://localhost:8000/user/login 




