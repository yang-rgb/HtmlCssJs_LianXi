var imglist=document.getElementById("imglist");

var imgarr=document.getElementsByTagName("img");

imglist.style.width=520*imgarr.length+"px";


//设置导航按钮居中
var navdiv=document.getElementById("navdiv");
 
var dadiv=document.getElementById("dadiv");

navdiv.style.left=(dadiv.offsetWidth-navdiv.offsetWidth)/2+"px";

var index=0;

var alla=document.getElementsByTagName("a");

alla[index].style.backgroundColor="black";

//点击超链接切换图片

for(var i=0; i<alla.length; i++){
	alla[i].num=i;
	alla[i].onclick=function(){
		
		clearInterval(timer);
		
		index=this.num;
		
		// imglist.style.left=-520*index+"px";
		
		setA();
		
		// 使用Move
		move(imglist,"left",-520*index,20,function(){
			// 动画执行完毕，开启自动切换
			autoChange();

			
		});
	}
}
	// 开启自动切换
	 autoChange();


// 创建一个方法用来设置a的颜色
function setA(){
	
	//判断当前索引是否是最后一张图片
	if(index >= imgarr.length-1){
		index=0;
		
		// 此时显示的最后一张图片，而是最后一张图片和第一张是一模一样
		// 通过CSS将最后一张切换第一张
		imglist.style.left=0;
	}
	
	for(var i=0;i<alla.length;i++){
		alla[i].style.backgroundColor="";
	}
	alla[index].style.backgroundColor="#000000";
}


var timer;
function autoChange(){
	
	timer=setInterval(function(){
		index++;
		
		index%=imgarr.length;
		
		move(imglist,"left",-520*index,20,function(){
			setA();
		});
		
	},3000)
	
}