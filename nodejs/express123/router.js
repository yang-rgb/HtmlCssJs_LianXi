const express=require('express')
const app=express() //实例化

// app.get('/user/add',(req,res)=>{
// 	res.send('ok')
// })
// app.get('/user/del',(req,res)=>{
// 	res.send('ok')
// })

//http://localhost:8000/user/add 
//http://localhost:8000/user/del 
let user=require('./router/user')
app.use('/user',user)


app.listen(8000,()=>{
	//监听8000端口 开启服务器
	console.log('start')
})
//http://localhost:8000/user/login 
