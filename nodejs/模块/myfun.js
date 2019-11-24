// let func=require("./mokuai");
// 
// console.log(func)
// func.sum(1,2,3,4,5);
// func.avg(1,2,3,4,5);
// console.log(func.sum(1,2,3,4,5));
// console.log(func.avg(1,2,3,4,5))


let fs=require("fs");
fs.open("it66.txt","w",(err,fd)=>{
	if(!err){
		fs.writeFile(fd,"哈哈哈哈哈哈哈",(err)=>{
			if(!err){
				console.log("成功")
			}else{
				throw err;
			}
			
			fs.close(fd,(err)=>{
				if(!err){
					console.log("保存")
				}
			})
		})
	}else{
		throw err;
	}
})