const express=require('express')
const path=require('path')
const app=express() //实例化
const db=require('./db/connect')
var cors = require('cors')
var cookieSession = require('cookie-parser')
var session = require('express-session')
const jwt=require('./utills/token')

app.use(session({
  secret: 'keyboardcat',  //为了安全的考虑设置secret属性
  cookie: { maxAge:60 * 1000  },//设置过期时间(毫秒)
  resave: true,	//即使session没有被修改,也保存session值,默认为true
  saveUninitialized: false//无论有没有session cookie ,每次请求都设置session cookit 默认标示为 connect.sid
}))

app.use(cors())

var bodyParser = require('body-parser')
//使用插件  解析表单数据 x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
//解析json数据
app.use(bodyParser.json())

//直接指向规定的静态目录
// app.use(express.static(path.join(__dirname,'./image')))
//http://localhost:8000/public/hehe/...
app.use('/public',express.static(path.join(__dirname,'./image')))


//路由
let userw=require('./router/user')
let food=require('./router/food')
let filechuan=require('./router/filechuan')
app.use('/user',userw)
//jwt验证逻辑
app.use('/food',(req,res,next)=>{
	console.log(req.body)
	let {token}=req.body;
	jwt.checkToken(token)
	.then(()=>{
		next()
	})
	.catch((err)=>{
		res.send({err:-998,msg:'token非法'})
	})
	
},food)
// app.use('/food',(req,res,next)=>{
// 	console.log(req.body)
// 	console.log(req.session)
// 	if(req.session.login){
// 		next();
// 	}else{
// 		res.send({err:-999,msg:"请先登录"})
// 	}
// },food)
app.use('/file',filechuan)




app.listen(8000,()=>{
	//监听8000端口 开启服务器
	console.log('start')
})
//http://localhost:8000/user/login 
