// var suff=require("./count");
// 
// suff.count("rrrr")
// suff.pi("gggg")

// var events=require('events');
// var util=require("util");
// 
// var Person=function(name){
// 	this.name=name
// }
// 
// util.inherits(Person,events.EventEmitter);
// 
// var xiaoming=new Person("xiaoming");
// var lili=new Person("lili");
// var lucy=new Person("lucy");
// 
// var person=[xiaoming,lili,lucy];
// 
// person.forEach(function(person){
// 	person.on("speak",function(message){
// 		console.log(person.name,message)
// 	})
// })
// 
// xiaoming.emit("speak","hi");
// lucy.emit("speak","lucy-")
// 
// var myEmitter=new events.EventEmitter();
// 
// myEmitter.on("someEvent",function(masg){
// 	console.log(masg)
// })
// 
// myEmitter.emit("someEvent","hhhgggggghhh")
// 
// 
// 


// var fs=require('fs');
// 
// var readMe=fs.readFileSync("aaa.txt","utf8");
// 
// var readMe=fs.readFile("aaa.txt","utf8",function(err,data){
// 	console.log(data)
// });
// 
// fs.writeFileSync("writeMe.txt","wwweewwe")
// 
// console.log(readMe)


// var fs=require("fs");
// 
// fs.mkdir("fff",function(){})
// fs.rmdir("fff",function(){})
// 
// fs.unlink("writeMe.txt",function(){})



// var fs=require("fs");
// var myReadStream=fs.createReadStream(__dirname+"/aaa.txt");
// var myWriteStream=fs.createWriteStream(__dirname+"/writeMe.txt");
// 
// myReadStream.pipe(myWriteStream);
// 
// ~
	// var writeData="hello world";
	// myWriteStream.write(writeData);
	// myWriteStream.end();
	// myWriteStream.on("finish",function(){})
// ~
// myReadStream.setEncoding("utf8");
// var data="";
// myReadStream.on("data",function(chunk){
// 	data+=chunk;
// })
// myReadStream.on("end",function(){
// 	console.log(data)
// })

// var http=require('http');
// var server=http.createServer(function(request,response){
// 	console.log("Request received");
// 	response.writeHead(200,{"Content-Type":"text/plain"});
// 	// response.write("Hello from out application");
// 	response.end("Hello from out application");
// })
// server.listen(8080,'127.0.0.1');
// console.log('3000')

var server=require("./server");
var router=require("./router");
var headler=require("./headler");

var handle={};
handle['/']=headler.home;
handle['/home']=headler.home;
handle['/review']=headler.review;


server.startServer(router.route,handle)

var params=url.parse(request.url,true).query;