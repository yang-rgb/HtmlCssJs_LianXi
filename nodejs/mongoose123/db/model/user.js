var mongoose = require('mongoose');

//Schema对象
//创建一个和集合相关的schema对象  类似表头
	//获取schema对象
 var Schema = mongoose.Schema;
  var blogSchema = new Schema({
    us:{type:String,required:true},
	ps:{type:String,required:true},
	age:Number,
	sex:{type:Number,default:0}
  });
  

//将schema对象转换为数据模型
 var Blog = mongoose.model('Blog', blogSchema);//该数据对象和集合关联('集合名',schema对象)

module.exports=Blog