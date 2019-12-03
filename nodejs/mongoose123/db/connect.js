//连接数据库
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dd',{ useUnifiedTopology:true});

//连接数据库
var db = mongoose.connection;//数据库的连接对象
db.on('error', function() {
  console.log("onerr")
});
db.once('open', function() {
  console.log("ok")
});