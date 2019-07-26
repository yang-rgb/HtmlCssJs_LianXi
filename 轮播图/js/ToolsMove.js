
// move
// 参数:
// 	obj:要执行动画的对象,
// 	attr:要执行动画的样式,比如 left top width Height,
// 	target:执行动画的目标位置,
// 	speed:移动的速度,
// 	callback:回调函数,这个函数将会在动画执行完毕以后执行
	

function move(obj,attr,target,speed,callback){
	
	clearInterval(obj.timer);
	
	var current=parseInt(getstyle(obj,attr));
	 
	 if(current>target){
		 speed=-speed;
	 }
	obj.timer=setInterval(function(){
		
		var olddiv=parseInt(getstyle(obj,attr));
		
		var newdiv=olddiv+speed;
		
		if((speed<0 && newdiv<target ) || (speed>0 && newdiv>target)){
			newdiv=target;
		}
		
		obj.style[attr]=newdiv+"px";
		
		if(newdiv==target){
			clearInterval(obj.timer);
			
			//动画执行完毕，调用回调函数
			callback && callback();
		}
		
	},30)
			
}

// 获取当前样式

function getstyle(obj,name){
	if(window.getComputedStyle){
		return getComputedStyle(obj,null)[name];
	}else{
		return obj.CurrentStyce[name];
	}
	
}

