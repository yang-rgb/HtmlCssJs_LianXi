var lis=$("nav").getElementsByTagName("li");
var divs=$("centent").getElementsByTagName("div");

for(var i=0;i<lis.length;i++){
	var li=lis[i];
	(function(i){
		console.log(i);

		li.onmouseover=function(){
		    console.log(i);
			for(var j=0;j<lis.length;j++){
				lis[j].className="";
				divs[j].style.display="none";
			}
			
			this.className="beijing";
			divs[i].style.display="block";
		    console.log(i);
			console.log(divs[i]);

		}
	})(i)
	
	
	// li.index=i;
	// li.onmouseover=function(){
	// 	
	// 	for(var j=0;j<lis.length;j++){
	// 		lis[j].className="";
	// 		divs[j].style.display="none";
	// 	}
	// 	
	// 	this.className="beijing";
	// 	divs[this.index].style.display="block";
	// 
	// }
}







function $(id){
	return typeof id === "string" ? document.getElementById(id):null;
}