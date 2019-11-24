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

// 插入文档
personModel.create({
	name:"Aho",
	age:23,
	chat:"hahahahhhaha"
},(err)=>{
	if(!err){
		console.log("插入成功")
	}else{
		throw err;
	}
});

personModel.create({
	name:"Ddo",
	age:34,
	chat:"kkkkkkkk",
	sex:"女"
},(err)=>{
	if(!err){
		console.log("插入成功")
	}else{
		throw err;
	}
});