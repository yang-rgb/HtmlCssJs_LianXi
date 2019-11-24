let mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/m_data");
mongoose.connection.once("open",()=>{
	console.log("数据库连接成功！")
});

// 创建schema(模式对象)
let Schema=mongoose.Schema;
let personSchema=new Schema({
	name:String,
	age:Number,
	sex:{
		type:String,
		default:"男"
	},
	chat:String
})

// 创建Model对象
let personModel=mongoose.model("person",personSchema);

// 增加

// personModel.create([
// 	{name:"胡可可",age:18,chat:"可可公主",sex:"女"},
// 	{name:"刘德华",age:58,chat:"华仔"},
// 	{name:"那英",age:50,chat:"我是那英",sex:"女"},
// 	{name:"周杰伦",age:38,chat:"jaychou"}
// ],(err)=>{
// 	if(!err){
// 		console.log("插入成功")
// 	}else{
// 		throw err;
// 	}
// })

// 查找
// personModel.find({},(err,docs)=>{
// 	if(!err){
// 		console.log(docs)
// 	}else{
// 		throw err;
// 	}
// });

// 修改
// personModel.update({name:"周杰伦"},{$set:{age:20}},{multi:true},(err)=>{
// 	if(!err){
// 		console.log("修改成功")
// 	}else{
// 		throw err;
// 	}
// })

// 删除
// personModel.remove({name:"周杰伦"},(err)=>{
// 	if(!err){
// 		console.log("删除成功")
// 	}else{
// 		throw err;
// 	}
// })

let http=require("http");
let server=http.createServer((req,res)=>{
	res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
	res.write("Hello ---");
	res.end("hell end")
});
server.listen(80,"127.0.0.1");