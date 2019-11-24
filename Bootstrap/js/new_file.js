$(function(){
	$(window).on("resize",function(){
		
		let clientW=$(window).width();
		
		let isShowBigImage=clientW>=900;
		
		let $allItems=$("#lk_carousel .carousel-item");
		
		$allItems.each((index,item)=>{
			let src=isShowBigImage?$(item).data('lg-img'):$(item).data('sm-img');
			let imgUrl=`url(${src})`;
			$(item).css({
				backgroundImage:imgUrl
			})
			if(!isShowBigImage){//大屏幕
				let imgEle=`<img src='${src}'>`;
				$(item).empty().append(imgEle);
			}else{//小屏幕
				$(item).empty();
			}
			
			
			
		})
		
		
	})
	

	let startX=0,end=0;
	let carouselInner=$("#lk_carousel .carousel-inner")[0];
	let $carousel=$("#lk_carousel");
	let carousel=$carousel[0];
	
	carouselInner.addEventListener("touchstart",(e)=>{
		startX=e.targetTouches[0].clientX;
		
	})
	carouselInner.addEventListener("touchmove",(e)=>{
		endX=e.targetTouches[0].clientX;
		if((endX-startX)>0){
			$carousel.carousel("prev");
		}else if((endX-startX)<0){
			$carousel.carousel("next");
		}
	})
	
	
	
	$(window).on("resize",()=>{
		 let $ul=$("#lk_product .nav");
		 let $allLis=$(".nav-item",$ul);
		
		 let totalW=0;
		 $allLis.each((index,item)=>{
			 totalW+=$(item).width(); 
		 })
		 totalW=Math.ceil(totalW);
		 
		 let parentW=$ul.parent().width();
		  
		 if(totalW>parentW){
			 $ul.css({
				 width:totalW+"px"
			 })
		 }else {
			 $ul.removeAttr("style");
		 }
		 
		 
		}).trigger("resize");
		
		
	
	
	
	$(window).trigger("resize");
})