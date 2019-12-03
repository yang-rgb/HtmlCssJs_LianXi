const express=require('express')
const router=express.Router()

const food=require('../db/model/food')


/**
 * @api {post} /food/add 增加
 * @apiName add
 * @apiGroup food
 *
 * @apiParam {String} name 	名字
 * @apiParam {String} price	价格
 * @apiParam {String} desc	描述
 * @apiParam {String} typename	类别名
 * @apiParam {Number} typeid	类别分类
 * @apiParam {String} img	图片
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/add',(req,res)=>{
	// let data={
	// 	name:'火车',
	// 	price:'333',
	// 	desc:'超好吃',
	// 	typename:'凉菜',
	// 	typeid:1,
	// 	img:'/public/4.jpg'
	// }
	let {name,price,desc,typename,typeid,img}=req.body
	
	food.insertMany({name,price,desc,typename,typeid,img})
	.then((datas)=>{
		res.send('添加成功')
	})
	.catch((err)=>{
		res.send('添加失败')
	})
})


/**
 * @api {post} /food/typeid 类别查询
 * @apiName typeid
 * @apiGroup food
 *
 * @apiParam {Number} typeid	类别分类
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/typeid',(req,res)=>{
	
	let {typeid}=req.body
	
	food.find({typeid})
	.then((datas)=>{
		res.send({msg:'查询成功',list:datas})
	})
	.catch((err)=>{
		res.send('查询失败')
	})
})

/**
 * @api {post} /food/type 关键字查询
 * @apiName type
 * @apiGroup food
 *
 * @apiParam {String} type	关键字查询
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/type',(req,res)=>{
	
	let {type}=req.body
	let reg=new RegExp(type)
	
	food.find({$or:[{name:{$regex:reg}},{desc:{$regex:reg}}]})
	.then((datas)=>{
		res.send({msg:'查询成功',list:datas})
	})
	.catch((err)=>{
		res.send('查询失败')
	})
})

/**
 * @api {post} /food/del 删除
 * @apiName del
 * @apiGroup food
 *
 * @apiParam {String} _id	id
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/del',(req,res)=>{
	let {_id}=req.body
	food.remove({_id})
	.then((datas)=>{
		res.send({err:0,msg:'删除成功'})
	})
	.catch((err)=>{
		res.send('删除失败')
	})
})


/**
 * @api {post} /food/updata 修改
 * @apiName updata
 * @apiGroup food
 *
 * @apiParam {String} name 	名字
 * @apiParam {String} price	价格
 * @apiParam {String} desc	描述
 * @apiParam {String} typename	类别名
 * @apiParam {Number} typeid	类别分类
 * @apiParam {String} img	图片
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/updata',(req,res)=>{
	let {name,price,desc,typename,typeid,img,_id}=req.body
	
	food.updateOne({_id},{name,price,desc,typename,typeid,img})
	.then((datas)=>{
		res.send('修改成功')
	})
	.catch((err)=>{
		res.send('修改失败')
	})
})


/**
 * @api {post} /food/page 分页查询
 * @apiName page
 * @apiGroup food
 *
 * @apiParam {Number} pageSize 	每页数据
 * @apiParam {Number} page	那一页
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/page',(req,res)=>{
	let pageSize=req.body.pageSize || 2  //设置默认值 每页数据
	let page=req.body.page || 1  //设置默认值  那一页
	let count=0;
	food.find()
	.then((list)=>{
		count=list.length   //获取总数据条数
		return food.find().skip(Number((page-1)*pageSize)).limit(Number(pageSize))
	})
	.then((datas)=>{
		
		let allpage=Math.ceil(count/pageSize)
		
		res.send({err:0,msg:'查询ok',info:{list:datas,count:count,allpage:allpage}})
	})
	.catch((err)=>{
		res.send('查询失败')
	})
})


module.exports=router