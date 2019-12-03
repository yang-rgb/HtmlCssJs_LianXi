const cheerio = require('cheerio')
const $ = cheerio.load('<div><p>你好</P><img src="www.baidu.com"><img src="www.baidu.com"></div>')

$('h2.title').text('Hello there!')
$('img').attr('src')

$('img').each((index,el)=>{
	console.log($(el).attr('src'))
})

$.html()