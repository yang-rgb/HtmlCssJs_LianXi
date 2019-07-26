var box1=document.getElementById("box1");

document.onmousemove=function(event){
	
	event=event || window.event;
	
	// Chrome认为浏览器的滚动条是body的,可以通过.scrollTop来获取
	// 火狐等浏览器认为浏览器的滚动条是html的
	var sl=document.body.scrollLeft || document.documentElement.scrollLeft;
	var st=document.body.scrollTop || document.documentElement.scrollTop;
	
	var left=event.clientX;
	var top=event.clientY;
	
	box1.style.left=left+sl+"px";
	box1.style.top=top+st+"px";
	
	
}