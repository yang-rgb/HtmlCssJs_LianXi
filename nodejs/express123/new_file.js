const express=require('express')
const app=express() //实例化


var bodyParser = require('body-parser')
//使用插件  解析表单数据 x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
//解析json数据
app.use(bodyParser.json())

// 简单的api接口
//http://localhost:8000/user/login?us=wang&ps=123 
app.get('/user/login',(req,res)=>{
	//接受get 参数  req.query
	console.log(req.query)
	let {us,ps}=req.query
	//处理参数
	if(us=='wang'&&ps=='123'){
		res.send('ok')
	}else{
		res.send('NO')
	}
})

app.post('/user/reg',(req,res)=>{
	//接受post 参数  req.body
	//express 不能直接解析消息体
	//通过body-parser插件实现解析
	console.log(req.body)
})


app.listen(8000,()=>{
	//监听8000端口 开启服务器
	console.log('start')
})
//http://localhost:8000/user/login 
