let express = require('express');
let router = express.Router({});
let util=require("./../util/util");


router.get('/', function(req, res, next) {
  res.render('login', { title: 'denglu' });
});

router.post('/', function(req, res, next) {
  let userName=req.body.zhuceming;
  let loginPwd=req.body.zhucemima;
  
  let loginUser={
	  loginPwd,
	  userName
  };
  
 let user=util.isReg(loginUser,util.users);
 if(null!==user && undefined!==user){
	 // console.log(user);
	 if(user.loginPwd ==loginPwd){
		 res.redirect("/chat");
	 }else{
		 res.send("mimaxxxxx")
	 }
 }else{
	 res.send("当前用户不存在")
 }
  
});

module.exports = router;
