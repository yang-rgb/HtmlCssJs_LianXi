(function(){
	window.mytool={
		$:function(id){
			return typeof id==="string" ? document.getElementById(id):null;
			},
			
		scroll:function(){
					if(window.pageYOffset !== null){
						return {
							"top":window.pageYOffset,
							"left":window.pageXOffset
						}
					}else if(document.compatMode==="CSS1Compat"){
						return {
							"top":document.documentElement.scrollTop,
							"left":document.documentElement.scrollLeft
						}	
					}
					return {
						"top":document.body.scrollTop,
						"left":document.body.scrollLeft
					}
				},
				
		client:function(){
					if(window.innerWidth !== null){
						return {
							"width":window.innerWidth,
							"height":window.innerHeight
						}
					}else if(document.compatMode==="CSS1Compat"){
						return {
							"width":document.documentElement.clientWidth,
							"height":document.documentElement.clientHeight
						}	
					}
					return {
						"width":document.body.clientWidth,
						"height":document.body.clientHeight
					}
				},
				
		changeCssStyle:function(eleObj,attr,value){
			eleObj.style[attr]=value;
				},
				
		getStyleAttr:function(obj,attr){
			if(obj.currentStyle){
				return obj.currentStyle[attr];
			}else{
				return window.getComputedStyle(obj,null)[attr];
			}
		},
	
		buffer:function(eleObj,json,fn){
			
			var speed=0,begin=0,target=0,flag=false;
			
			clearInterval(eleObj.timer);
			eleObj.timer=setInterval(function(){
				
				flag=true;
				for (var key in json){
					if(json.hasOwnProperty(key)){
						if(key==="opacity"){
								begin=parseInt(mytool.getStyleAttr(eleObj,key)*100)||100;
								target=parseInt(json[key]*100);
							}else if("scrollTop"==key){
								begin=Math.ceil(Number(eleObj.scrollTop));
								target=parseInt(json[key]);
							}
							else{
								begin=parseInt(mytool.getStyleAttr(eleObj,key))||0;
								target=parseInt(json[key]);
							}
							
							
							speed=(target-begin)*0.2;
							speed=(target>begin)?Math.ceil(speed):Math.floor(speed);
							if(key==="opacity"){
								eleObj.style.opacity=(begin+speed)/100;
								if((begin+speed)/100==0){
									clearInterval(eleObj.timer);
								}

							}else if("scrollTop"===key){
								eleObj.scrollTop=begin+speed;
							}else if("zIndex"===key){
								eleObj.style[key]=json[key];
							}
							else{
								eleObj.style[key]=begin+speed+"px";
							}
							
							if(begin!==target){
								flag=false;
							}
						}
					}
							
					if(flag){
						clearInterval(eleObj.timer);
				
						fn && fn();
					}
				},20)
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	}
})()



	
	

