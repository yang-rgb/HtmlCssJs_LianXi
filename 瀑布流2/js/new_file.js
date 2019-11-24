
waterFull("main");

var timer1=null;
window.onscroll=function(){
	clearInterval(timer1);
	timer1=setInterval(function(){
		if(jiazai()){
			var dateArr=[
				{"src":"img/4.jpg"},
				{"src":"img/6.jpg"},
				{"src":"img/8.jpg"},
				{"src":"img/5.jpg"},
				{"src":"img/3.jpg"},
				{"src":"img/12.jpg"},
				{"src":"img/14.jpg"}
			];
			var main=document.getElementById("main");
			for(var i=0;i<dateArr.length;i++){
				var div1=document.createElement("div");
				div1.className="box";
				main.appendChild(div1);
				
				var div2=document.createElement("div");
				div2.className="boxli";
				div1.appendChild(div2);
				
				var img=document.createElement("img");
				img.src=dateArr[i].src;
				div2.appendChild(img);
			}
			waterFull("main");
		}
	},200)
	
	
}

var timer=null;
window.onresize=function(){
	clearInterval(timer);
	timer=setInterval(function(){
		waterFull("main");
	},200)
}







function waterFull(mainid){
	var main=document.getElementById(mainid);
	var boxs=main.children;
	var pinmuW=document.documentElement.clientWidth|| document.body.clientWidth;
	var boxW=boxs[0].offsetWidth;
	var cols=parseInt(pinmuW/boxW);
	
	main.style.width=cols*boxW+"px";
	main.style.margin="0 auto";
	
	var boxH=0,Arr=[],minHeight,minhao;
	for(var i=0;i<boxs.length;i++){
		boxH=boxs[i].offsetHeight;
		if(i<cols){
			Arr.push(boxH);
			boxs[i].style="";
		 }
		else{
		 	minHeight=minH(Arr);
		 	minhao=minxunhao(Arr,minHeight);
		 	
		 	boxs[i].style.position="absolute";
		 	boxs[i].style.left=minhao*boxW+"px";
		 	boxs[i].style.top=minHeight+"px";
		 	
		 	Arr[minhao]+=boxH;
		 }
		 
	}
}


function minH(arr){
	var min=arr[0];
	for(var i=0;i<arr.length;i++){
		min>arr[i]?min=arr[i]:min;
	}
	return min;
}
function minxunhao(arr,minshu){
	for(var i=0;i<arr.length;i++){
		if(arr[i]===minshu){
			return i;
		}
	}
}



function jiazai(){
	var main=document.getElementById("main");
	var boxs=main.children;
	var lastbox=boxs[boxs.length-1];
	var lastboxH=lastbox.offsetTop+lastbox.offsetHeight*0.5;
	
	var pinmuH=document.documentElement.clientHeight|| document.body.clientHeight;
	
	var scrooH=window.pageYOffset || document.documentElement.scrollTop||document.body.scrollTop;
	
	return lastboxH<=pinmuH+scrooH;
	
}