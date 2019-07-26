//全选
var checkedAllBtn=document.getElementById("checkedAllBtn");
checkedAllBtn.onclick=function(){
	var items=document.getElementsByName("items");
	
	for(var i=0; i<items.length; i++){
		items[i].checked=true;
	}
	checkedAllBox.checked=true;
}

//全不选
var checkedNoBtu=document.getElementById("checkedNoBtn");
checkedNoBtu.onclick=function(){
	var items=document.getElementsByName("items");
	
	for(var i=0; i<items.length; i++){
		items[i].checked=false;
	}
	checkedAllBox.checked=false;

}

//反选
var checkedRevBtu=document.getElementById("checkedRevBtn");
checkedRevBtn.onclick=function(){
	var items=document.getElementsByName("items");
	
	checkedAllBox.checked=true;
	
	for(var i=0; i<items.length; i++){
		
		// if(items[i].checked){
		// 	items[i].checked=false;
		// }else{
		// 	items[i].checked=true;
		// }
		
		items[i].checked=!items[i].checked;
		
		if(!items[i].checked){
			checkedAllBox.checked=false;
		}
		
	}
	
		//在反选时也要判断四个多选框是否全都选中。能写在上面  
		
// 					checkedAllBox.checked=true;
// 					
// 					for(var j=0; j<items.length; j++){
// 						if(!items[j].checked){
// 							checkedAllBox.checked=false;
// 							break;
// 						}
// 						
// 					}
}
	
//提交
var sendBth=document.getElementById("sendBth");
sendBth.onclick=function(){
		var items=document.getElementsByName("items");
		
	for(var i=0; i<items.length; i++){
	
		if(items[i].checked){
			alert(items[i].value);
		}
	}
}

//全选/全不选
var checkedAllBox=document.getElementById("checkedAllBox");

checkedAllBox.onclick=function(){
	var items=document.getElementsByName("items");
	
	for(var i=0; i<items.length; i++){
		
		// if(checkedAllBox.checked){
		// 	items[i].checked=true;			
		// }else{
		// 	items[i].checked=false;			
		// }
		
		//alert(this===checkedAllBox)
		
		items[i].checked=this.checked;
		
	}
}

//判断四个复选框
var items=document.getElementsByName("items");

for(var i=0; i<items.length; i++){
	items[i].onclick=function(){
		
		checkedAllBox.checked=true;

		for(var j=0; j<items.length; j++){
			if(!items[j].checked){
				checkedAllBox.checked=false;
				break;
			}
			
		}

	}
}