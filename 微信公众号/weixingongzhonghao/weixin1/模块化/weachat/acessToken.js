const {appID,appsecret}=require('../config/index');

const fs=require('fs');
const rp=require('request-promise-native');

class Wechat{
	constructor(){
		
	}
	
	getAccessToken(){
		const url=`
		https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appID}&secret=${appsecret}
		`;
		return new Promise((resolve,reject)=>{
			rp({method:"GET",url,json:true})
			.then((res)=>{
				console.log(res)
				// { access_token:
				//    '26_IATIKOrBiPzhQnlbdTlTfluBhVPjjv1iPu50sX1rCszukSozk6lcAeWIErOipzan3TXp9GquAt54yNmVSrv_xkIz42Y8u61MZzyrWNagUFCmVudMx
				// DWDafJR_qcOTTdAEAGLL',
				//   expires_in: 7200 }
				
				res.expires_in=Date.now()+(res.expires_in-300)*1000;
				 resolve(res);
				
			})
			.catch((err)=>{
				console.log(err)
				reject("getAccessToken出了问题"+err);
			})
		})
		
	}
	
	saveAccessToken(accessToken){
		// 将对象转化json字符串
		accessToken=JSON.stringify(accessToken);
		return new Promise((resolve,reject)=>{
			fs.writeFile('./accessToken.txt',accessToken,(err)=>{
				if(!err){
					console.log('文件保存成功~')
					resolve();
				}else{
					reject("saveAccessToken出了问题"+err);
				}
			})
		})
	}

	readAccessToken(){
		return new Promise((resolve,reject)=>{
			fs.readFile('./accessToken.txt',(err,data)=>{
				if(!err){
					console.log('文件读取成功~')
					data=JSON.parse(data)
					
					resolve(data);
				}else{
					reject("saveAccessToken出了问题"+err);
				}
			})
		})
	}

	isValidAccessToken(data){
		if(!data && !data.access_token && !data.expires_in){
			// 代表access_token无效
			return false;
		}
		
		return data.expires_in > Data.now()
		
	}

}

const w=new Wechat();

new Promise((resolve,reject)=>{	
	w.readAccessToken()
		.then(res=>{
			if(w.isValidAccessToken(res)){
				resolve(res)
			}else{
				w.getAccessToken()
					.then(res=>{
						w.saveAccessToken(res)
							.then(()=>{
								resolve(res);
							})
					})
			}
		})
		.catch(err=>{
			// 本地没有文件
			w.getAccessToken()
				.then(res=>{
					w.saveAccessToken(res)
						.then(()=>{
							resolve(res);
						})
				})
		})
})
	.then(res=>{
		// console.log(res);
	}) 
