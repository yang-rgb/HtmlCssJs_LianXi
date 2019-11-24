
function waterFull(mainid){
	var main=document.getElementById(mainid);
	var boxs=main.children;
	var pinmuW=document.documentElement.clientWidth|| document.body.clientWidth;
	var boxW=boxs[0].offsetWidth;
	var cols=parseInt(pinmuW/boxW);

	var xyMargin=16;
	// main.style.width=cols*boxW+"px";
	// main.style.margin="0 auto";
	
	var boxH=0,Arr=[],minHeight,minhao;
	for(var i=0;i<boxs.length;i++){
		boxH=boxs[i].offsetHeight+xyMargin;
		
		if(i<cols){
			Arr.push(boxH);
			boxs[i].style="";
			boxs[i].style.position="absolute";
			boxs[i].style.left=i*(boxW+xyMargin)+"px";
			boxs[i].style.top=xyMargin+"px";
		 }
		else{
		 	minHeight=minH(Arr);
		 	minhao=minxunhao(Arr,minHeight);
		 	
		 	boxs[i].style.position="absolute";
		 	boxs[i].style.left=minhao*(boxW+xyMargin)+"px";
		 	boxs[i].style.top=minHeight+xyMargin+"px";
						
		 	Arr[minhao]+=boxH;
						
		 }
		 
	}
	
	var parebtHeight=boxs[boxs.length-1].offsetTop+boxs[boxs.length-1].offsetHeight;
	mytool.$(mainid).style.height=parebtHeight+"px";
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



function jiazai(mainid){
	var main=document.getElementById(mainid);
	
	var boxs=main.children;
	var lastbox=boxs[boxs.length-1];
	var lastboxH=lastbox.offsetTop+lastbox.offsetHeight*0.5;
	
	var pinmuH=document.documentElement.clientHeight|| document.body.clientHeight;
	
	var scrooH=window.pageYOffset || document.documentElement.scrollTop||document.body.scrollTop;
	
	return lastboxH<=pinmuH+scrooH;
	
}