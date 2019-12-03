const https=require('https')
const fs=require('fs')
const cheerio = require('cheerio')

let url='https://www.qunar.com/';

https.get(url,(res)=>{
	
	//安全判断
	const { statusCode } = res; //状态码
	const contentType = res.headers['content-type'];//文件类型
	
	let error;
	  if (statusCode !== 200) {
		error = new Error('请求失败\n' +
						  `状态码: ${statusCode}`);
	  } else if (!/^text\/html/.test(contentType)) {
		  //格式类型是网页
		error = new Error('请求类型错误');
	  }
	  if (error) {
		console.error(error.message);
		res.resume();	    // 重置缓存。
		return;
	  }
	
	
	//数据处理
	//数据分段 只要接受数据就会触发data 事件 chunk 每次接受的数据片段
	let data=''
	res.on('data',(chunk)=>{
		// console.log("数据传输")
		data+=chunk.toString('utf8')
		console.log(chunk.toString('utf8'))
	})
	
	//数据流传输完毕
	res.on('end',()=>{
		console.log("数据传输完毕")
		//保存本地
		fs.writeFileSync('./bili.html',data)
		//通过cheerio分析
		const $ = cheerio.load(data)//将请求的网页数据进行转化
		$('img').each((index,el)=>{
			console.log($(el).attr('src'))
		})
		
	})
	
}).on('error',(err)=>{
	console.log('请求错误')
})