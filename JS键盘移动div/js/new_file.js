
var speed=10;

var dir=0;

setInterval(function(){
	switch(dir){
		case 37:
			box1.style.left=box1.offsetLeft-speed+"px";
			break;
		case 39:
			box1.style.left=box1.offsetLeft+speed+"px";
	
			break;
		case 38:
			box1.style.top=box1.offsetTop-speed+"px";
	
			break;
		case 40:
			box1.style.top=box1.offsetTop+speed+"px";
	
			break;
	}
},30)


document.onkeydown=function(event){
	event=event || window.event;
	
	dir=event.keyCode;
}
	
document.onkeyup=function(){
	dir=0;
}