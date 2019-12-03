var mongoose = require('mongoose');

//Schema对象
//创建一个和集合相关的schema对象  类似表头
	//获取schema对象
 var Schema = mongoose.Schema;
  var foodSchema = new Schema({
    name:{type:String,required:true},
	price:{type:String,required:true},
	desc:{type:String,required:true},
	typename:{type:String,required:true},
	typeid:{type:Number,required:true},
	img:{type:String,required:true}
  });
  

//将schema对象转换为数据模型
 var food = mongoose.model('food', foodSchema);//该数据对象和集合关联('集合名',schema对象)

module.exports=food