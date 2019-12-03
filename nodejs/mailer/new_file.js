// "use strict";
const nodemailer = require("nodemailer");

//创建发送邮件对象
  let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",//发送方邮箱 qq 通过nodemailer/lib/well-known/services.json 查找
    port: 465,//端口号
    secure: true, // true for 465, false for other ports
    auth: {
      user: '3021536144@qq.com', // 发送方的邮箱地址
      pass: "dip??????da" // POP3/SMTP服务 mtp 授权码
    }
  });

  // 邮件信息
  let mailobj={
	  from: '"Fred Foo 👻" <3021536144@qq.com>', // 发送方
	  to: "3021536144@qq.com", // 接受方,多个用,隔开 "bar@example.com, baz@example.com"
	  subject: "H555", // 标题
	  text: "你的验证码123456,有效期5分钟", // 文本信息,只能是字符串 //这两个只能有一个
	  // html: "<b>Hello world?</b><i>Hello iiTTTi</i>" // html body//这两个只能有一个
  }
  
//发送邮件 
transporter.sendMail(mailobj,(err,data)=>{
	console.log(err) //发送成功 返回null
	console.log(data)
})

  
