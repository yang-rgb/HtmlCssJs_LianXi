function functi(obj){
	
	var res=[];
	obj.t=new Date().getTime();
	for(var key in obj){
		res.push(encodeURIComponent(key)+"="+encodeURIComponent(obj[key]));
	}
	return res.join("&");
}

ajax=function(url,obj,time,func,error){
	
	var str=functi(obj);
	console.log(str);

	var xmlhttp,idf;
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	  
	  xmlhttp.open("GET",url+"?"+str,true);
	  xmlhttp.send();
	  xmlhttp.onreadystatechange=function(){
		  if(xmlhttp.readyState===4){
			  if(xmlhttp.status>=200 && xmlhttp.status<300 ||
			  xmlhttp.status===304){
				  func(xmlhttp);
				  
			  }else{
				  error(xmlhttp);
			  }	  
		  }
		  
	  }
	 if(time){
		 idf=setInterval(function(){
			 clearInterval(idf);
		 },time)
	 }
	
}