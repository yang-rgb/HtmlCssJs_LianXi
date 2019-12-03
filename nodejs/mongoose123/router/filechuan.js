const express=require('express')
const router=express.Router()
const multer=require('multer')

//设置保存规则
var storage = multer.diskStorage({
    //destination：字段设置上传路径，可以为函数
    // destination: path.resolve(__dirname, './upload')
	destination:function(req,file,cb){
		
		//指定文件路径  
		cb(null,'./image')
	},

    //filename：设置文件保存的文件名
    filename: function(req, file, cb) {
       let ext=file.originalname.slice(file.originalname.lastIndexOf('.'))
	   let tmpname=(new Date()).getTime()+parseInt(Math.random()*9999)
	   
	   //指定文件名
        // cb(null, 'aaa.jpg')
		cb(null, `${tmpname}${ext}`)
    }
})

//创建 multer 实例
var imageUploader = multer({ 
	
    storage: storage
	
}) 

router.post('/upload',imageUploader.single('hehe'),(req,res)=>{
	//hehe 要上传图片数据的key值  必须前后端同一
	console.log(res.file)
	 //req.files中保存文件信息，如下
	    // [ { fieldname: 'photos',
	    //    originalname: 'p8U85lWN0XyYcel_avatar_uploaded1439700817.69.jpg',
	    //    encoding: '7bit',
	    //    mimetype: 'image/jpeg',
	    //    destination: 'E:\\mine\\wechat\\upload',
	    //    filename: 'b585c040-0a6f-11e9-bbb6-fdcabd365420.jpg',
	    //    path:
	    //     'E:\\mine\\wechat\\upload\\b585c040-0a6f-11e9-bbb6-fdcabd365420.jpg',
	    //    size: 16536 } ]
		
	let {size,mimetype,path}=req.file
	let types=['jpg','jpeg','png','gif']
	let tmpType=mimetype.split('/')[1]
	if(size>5000000){
		return res.send({err:-1,msg:'尺寸过大'})
	}else if(types.indexOf(tmpType)==-1){
		return res.send({err:-1,msg:'媒体类型错误'})
	}else{
		//返回静态目录下的文件
		let url=`/public/${req.file.filename}`
		
		res.send({err:0,msg:'上传ok',img:url})
	}
	
	
})



module.exports=router