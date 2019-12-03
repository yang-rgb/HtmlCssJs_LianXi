const express=require('express')
const router=express.Router()

const user=require('../db/model/user')
const jwt=require('../utills/token')

var coded={}

/**
 * @api {post} /user/reg 用户注册
 * @apiName 用户注册
 * @apiGroup User
 *
 * @apiParam {String} us 	用户名
 * @apiParam {String} ps	用户密码
 * @apiParam {String} code	验证码
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
		
router.post('/reg',(req,res)=>{
	//获取数据
	let {us,ps,code}=req.body
	if(us&&ps&&code){
		console.log(coded)
		console.log(coded[us])
		if(coded[us]!=code) return res.send('验证码错误')
		
		user.find({us})
		.then((data)=>{
			if(data.length===0){
				//用户名不存在  可以注册
				return user.insertMany({us:us,ps:ps})
			}else{
				res.send('用户名已存在')
			}
		})
		
		.then(()=>{
			res.send('成功')
		})
		.catch(()=>{
			res.send('err')
		})
		
	}else{
		res.send('err')
	}	
	
	//数据处理
	
	//返回数据	
	
})

/**
 * @api {post} /user/login 登录
 * @apiName 登录
 * @apiGroup User
 *
 * @apiParam {String} us 	用户名
 * @apiParam {String} ps	用户密码
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */

router.post('/login',(req,res)=>{
	//获取数据
	let {us,ps}=req.body
	if(!us || !ps) return res.send('参数错误')
	
	user.find({us,ps})
	.then((data)=>{
		if(data.length>0){
			//登录成功将用户相关信息存到session
			req.session.login=true;
			req.session.name=us;
			
			let token=jwt.creatToken({login:true,name:us})
			
			res.send({err:0,msg:'登录成功',token})
		}else{
			res.send('用户名或密码不正确')
		}
	})
	.catch((err)=>{
		return res.send('内部错误')
	})
})

/**
 * @api {post} /user/getmail 邮件验证
 * @apiName mailer
 * @apiGroup User
 *
 * @apiParam {String} mail 	邮箱号
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */

//发送邮件验证码
let mailf=require('../utills/mailer')
router.post('/getmail',(req,res)=>{
	let {mail}=req.body
	let  code=parseInt(Math.random()*10000)
	mailf.mailsend(mail,code)
	.then(()=>{
		res.send('验证码发送ok')
		coded[mail]=code;//将邮箱和邮箱匹配的验证码保存到缓存中
	})
	.catch(()=>{
		res.send('验证码发送失败')
	})
})



module.exports=router