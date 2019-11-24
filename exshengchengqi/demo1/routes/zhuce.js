let express = require('express');
let router = express.Router({});

let util=require("./../util/util");


router.get('/', function(req, res, next) {
  res.render('zhuce', { title: 'zhuce' });
});
router.post('/', function(req, res, next) {
  let userName=req.body.zhuceming;
  let loginPwd=req.body.zhucemima;
  
  let regUser={
	  loginPwd,
	  userName
  };
  
  let user=util.isReg(regUser,util.users);
  if(null===user|| undefined===user){
	 util.users.push(regUser);
	  // res.send("注册成功")
	  res.redirect("/login");
  }else{
	  res.send("已经注册")
  }
  
});




module.exports = router;