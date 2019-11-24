	window.addEventListener('load',function(){
	
	waterFull("main","box");
	
	var timer1=null;
	window.addEventListener("scroll",function(){
			clearTimeout(timer1);
			timer1=setTimeout(function(){
				if(chexkWillLoadNewBox()){
					var dataArr=[
						{"src":"img/4.jpg"},
						{"src":"img/6.jpg"},
						{"src":"img/8.jpg"},
						{"src":"img/5.jpg"},
						{"src":"img/3.jpg"},
						{"src":"img/12.jpg"},
						{"src":"img/14.jpg"}
					];
					for (var i=0;i<dataArr.length;i++){
						var newBox=document.createElement("div");
						newBox.className='box';
						mytool.$("main").appendChild(newBox);
						
						var newPic=document.createElement("div");
						newPic.className='pic';
						newBox.appendChild(newPic);
						
						var newImg=document.createElement("img");
						newImg.src=dataArr[i].src;
						newPic.appendChild(newImg);
						
					}
					waterFull("main","box");
				}
				
		
			},200)
	})
		

	var timer=null;
	window.addEventListener("resize",function(){
		clearTimeout(timer);
		timer=setTimeout(function(){
			waterFull("main","box");

		},200)
	})
	
	
	
})

function waterFull(parent,child){
	var allBox=mytool.$(parent).getElementsByClassName(child);
	
	var boxWidth=allBox[0].offsetWidth;
	
	var screenW=document.documentElement.clientWidth||document.body.clientWidth;

	var cols=parseInt(screenW/boxWidth);

	mytool.$(parent).style.width=cols*boxWidth+"px";
	mytool.$(parent).style.margin="0 auto";
	
	// 定位
	var heightArr=[],boxHeight=0,minBoxHeight=0,minBoxIndex=0;
	for (var i=0;i<allBox.length;i++){
		boxHeight=allBox[i].offsetHeight;
		
		if(i<cols){
			heightArr.push(boxHeight);
				allBox[i].style="";
		}else{
			minBoxHeight=_.min(heightArr);
			
			minBoxIndex=getMinBocIndex(heightArr,minBoxHeight);
			
			allBox[i].style.position="absolute";
			allBox[i].style.left=minBoxIndex*boxWidth+"px";
			allBox[i].style.top=minBoxHeight+"px";
			
			heightArr[minBoxIndex]+=boxHeight;
		}

	}
// console.log(heightArr,minBoxHeight,minBoxIndex);
}

function getMinBocIndex(arr,val){
	
	for(var i=0;i<arr.length;i++){
		if(arr[i]===val){
			return i;
		}
	}
}

function chexkWillLoadNewBox(){
	var allBox=mytool.$("main").getElementsByClassName("box");
	var lastBox=allBox[allBox.length-1];
	
	var lastBoxDis=lastBox.offsetHeight*0.5+lastBox.offsetTop;
	
	var screenH=document.documentElement.clientHeight||document.body.clientHeight;
	
	var scrollTopH=window.pageYOffset || document.documentElement.scrollTop;

	
	return lastBoxDis<=screenH+scrollTopH;
	
}