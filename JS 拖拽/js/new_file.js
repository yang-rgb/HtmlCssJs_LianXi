//拖拽流程
	// 1.当鼠标在被拖拽元素上,开始拖拽						onmousedown
	// 2.当鼠标移动是被拖拽元素跟随鼠标移动					onmousemove
	// 3.当鼠标松开时,被拖拽元素固定在当前位置				onmouseup
	
var box1=document.getElementById("box1");



box1.onmousedown=function(event){
	
	event=event || window.event;

	var ol=event.clientX-box1.offsetLeft;
	var ot=event.clientY-box1.offsetTop;
	
	document.onmousemove=function(event){
		
		event=event || window.event;
		
		var left=event.clientX-ol;
		var top=event.clientY-ot;
		
		box1.style.left=left+"px";
		box1.style.top=top+"px";
	}
	
	document.onmouseup=function(){
		document.onmousemove=null;
		
		 document.onmouseup=null;
	}
	
	return false;
	
}