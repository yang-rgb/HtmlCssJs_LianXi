(function(){
	window.mytool={
		$:function(id){
			return typeof id==="string" ? document.getElementById(id):null;
			},
			
		scroll:function(){
					if(window.pageYOffset !== null){
						return {
							"top":window.pageYOffset,
							"left":window.pageXOffset
						}
					}else if(document.compatMode==="CSS1Compat"){
						return {
							"top":document.documentElement.scrollTop,
							"left":document.documentElement.scrollLeft
						}	
					}
					return {
						"top":document.body.scrollTop,
						"left":document.body.scrollLeft
					}
				}
	}
})()


