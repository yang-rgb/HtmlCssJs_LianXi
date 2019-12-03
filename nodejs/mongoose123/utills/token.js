var jwt = require('jsonwebtoken');
let screat ='dadaddasdasiuqwer;ldd'  //私钥

function creatToken(palyload){
	palyload.ctime=Date.now() //创建时间
	palyload.exp=1000*60*24*7
	
	//产生一个token
	return jwt.sign(payload,screat)  //hs256加密 数据 载荷 screat
}

function checkToken(token){
	return new Promise((resovle,reject)=>{
		//验证token的合法性
		jwt.verify(token,screat,(err,data)=>{
			if(err){
				reject('token 验证失败')
			}else{
				resovle(data)
			}
		})
	})
}

module.exports={
	creatToken,
	checkToken
}


