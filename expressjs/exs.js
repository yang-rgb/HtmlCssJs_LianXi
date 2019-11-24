let express=require("express");
let app=express();

//指定视图目录
app.set('views', './views')
//注册模板引擎
app.set('view engine', 'ejs')

app.get("/",(req,res)=>{
	res.render("index",{"lists":["张三",16,"篮球"]});
})

app.listen(3000)