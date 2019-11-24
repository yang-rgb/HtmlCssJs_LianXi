window.addEventListener("load",function(){
	
	(function(){
		var casualContent=mytool.$("casualContent");
		var contentImg=casualContent.children;
		var casualControl=mytool.$("casualControl");
		var casualControlBottom=casualControl.children[2];
		var lkCasual=mytool.$("lk_casuall");
		var iNow=0;
		
			// 更改背景颜色
		var bgColorArr=["#939","#061","#672","#183","#404"];
		lkCasual.style.backgroundColor=bgColorArr[0];
		
		for(var i=0;i<contentImg.length;i++){
			
			var li=document.createElement("li");
			
			casualControlBottom.insertBefore(li,casualControlBottom.children[0]);
		}
		casualControlBottom.children[0].className="listy";
		
		// 除第一张图片归位
		var scrollmgWidth=casualContent.offsetWidth;
		for(var j=1;j<contentImg.length;j++){
			contentImg[j].style.left=scrollmgWidth+"px";
		}
		
		// 处理左右点击
		var cPrev=casualControl.children[0];
		var cNext=casualControl.children[1];
		//左边
		cPrev.addEventListener("click",function(){
			mytool.buffer(contentImg[iNow],{"left":scrollmgWidth});
			iNow--;
			if(iNow<0){
				iNow=contentImg.length-1;
			}
			contentImg[iNow].style.left=-scrollmgWidth+"px";
			mytool.buffer(contentImg[iNow],{"left":0});
			
			changeIndex();
			
			lkCasual.style.backgroundColor=bgColorArr[iNow];
		});
		//右边
		cNext.addEventListener("click",function(){
			autoPlay();

		});
		
		
		// 底部
		for(var k=0;k<casualControlBottom.children.length;k++){
			// 单个li
			var bottomli=casualControlBottom.children[k];
			(function(index){
				bottomli.addEventListener("mouseover",function(){
					if(index>iNow){
						mytool.buffer(contentImg[iNow],{"left":-scrollmgWidth});
						contentImg[index].style.left=scrollmgWidth+"px";
						// iNow=index;
						// mytool.buffer(contentImg[iNow],{"left":0});
					}else if(index<iNow){
						mytool.buffer(contentImg[iNow],{"left":scrollmgWidth});
						contentImg[index].style.left=-scrollmgWidth+"px";
						
					}
					iNow=index;
					mytool.buffer(contentImg[iNow],{"left":0});
					
					changeIndex();
					
					lkCasual.style.backgroundColor=bgColorArr[iNow];
				})
			})(k)
			
		}
		
	
		
		// 切换索引
		function changeIndex(){
			for(var i=0;i<casualControlBottom.children.length;i++){
				casualControlBottom.children[i].className="";
			}
			casualControlBottom.children[iNow].className="listy";
		}
		
			// 定时器
		var timerId=setInterval(autoPlay,2000);
		
		function autoPlay(){
			mytool.buffer(contentImg[iNow],{"left":-scrollmgWidth});
			iNow++;
			if(iNow>=contentImg.length){
				iNow=0;
			}
			contentImg[iNow].style.left=scrollmgWidth+"px";
			mytool.buffer(contentImg[iNow],{"left":0});
			
			changeIndex();
			
			lkCasual.style.backgroundColor=bgColorArr[iNow];
		}
		
		// 设置、清除定时器
		casualContent.parentNode.addEventListener("mouseover",function(){
			clearInterval(timerId);
		});
		casualContent.parentNode.addEventListener("mouseout",function(){
			
			timerId=setInterval(autoPlay,2000);
		});
		
	
		
	})();
	
	
	
	
})