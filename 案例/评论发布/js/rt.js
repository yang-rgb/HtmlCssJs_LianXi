var my_text=document.getElementById("my_text");

var button=document.getElementById("button");

var ul=document.getElementById("ul");



button.onclick=function(){
	
	var my_text_rong=my_text.value;
	
	if(my_text_rong.length===0){
		alert("输入内容");
		return;
	}
	
	var li=document.createElement("li");
	
	li.innerHTML=my_text_rong+"<a href='javascript:;'>删除</a>";
	
	
	ul.insertBefore(li,ul.children[0]);
	
	my_text.value="";
	
	var as=ul.getElementsByTagName("a");
	 for(var i=0; i<as.length; i++){
		 var a=as[i];
		 a.onclick=function(){
			 this.parentNode.remove();
		 }
	 }
	
	
}