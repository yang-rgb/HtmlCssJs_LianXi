var btno1=document.getElementById("bton01");
var box=document.getElementById("box");

btno1.onclick=function(){
	
	// addClass(box,"b2");
	
	removeClass(box,"r6");
	// hasClass(box,"r6")

}


//增加class，参数:
	// obj 要添加class属性的元素
	// cn  要添加class值
function addClass(obj,cn){
	
	if(!hasClass(obj,cn)){
		obj.className+=" "+cn;
	}
}

// 判断一个元素是否含有指定的class属性值
	// 有		返回 true;
	// 没有 		返回 false;
function hasClass(obj,cn){
	// var reg=/\bb2\b/
	var reg=new RegExp("\\b"+cn+"\\b");
	console.log(obj.className) 
	return reg.test(obj.className);
}

// 删除一个元素中的指定的clss属性
function removeClass(obj,cn){
	var reg=new RegExp("\\b"+cn+"\\b"); 
	// 删除class
	console.log(obj.className+"w") 
	console.log(obj.className.replace(reg,""))
	obj.className=obj.className.replace(reg,"")
}

// 切换一个类
// 	如果元素具有该类,则删除
// 	如果元素没有该类,则增加
function toggleClass(obj,cn){
	if(hasClass(obj,cn)){
		removeClass(obj,cn);
	}else{
		addClass(obj,cn);
	}
}
