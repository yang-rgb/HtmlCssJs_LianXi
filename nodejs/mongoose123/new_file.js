//连接数据库
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dd',{ useUnifiedTopology: true });

//连接数据库
var db = mongoose.connection;//数据库的连接对象
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("ok")
});

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


//操作数据库
Blog.insertMany( {us:'wang',ps:'123',age:24} ) //插入
.then((data)=>{
	console.log(data)
	console.log('插入成功')
})
.catch((err)=>{
	console.log('插入失败')
})

Blog.find()   //查找
.then((data)=>{
	console.log(data)
	console.log('插入成功')
})
.catch((err)=>{
	console.log('插入失败')
})

Blog.remove()   //删除
.then((data)=>{
	console.log(data)
	console.log('插入成功')
})
.catch((err)=>{
	console.log('插入失败')
})

