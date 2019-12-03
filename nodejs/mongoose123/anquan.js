var cookieSession = require('cookie-session')
var session = require('express-session')

app.use(session({
  secret: 'keyboardcat',  //为了安全的考虑设置secret属性
  cookie: { secure: true },//设置过期时间(毫秒) cookie: { maxAge:60 * 1000 * 60 *24 }
  resave: true,	//即使session没有被修改,也保存session值,默认为true
  saveUninitialized: false//无论有没有session cookie ,每次请求都设置session cookit 默认标示为 connect.sid
}))

