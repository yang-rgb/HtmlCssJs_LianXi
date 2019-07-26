var prev=document.getElementById("prev");
var next=document.getElementById("next");

var img=document.getElementsByTagName("img")[0];

var imgarr=["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg"];

var index=0;

var info=document.getElementById("info");

info.innerHTML="一共"+imgarr.length+"张，当前第"+(index+1)+"张";

prev.onclick=function(){
	index--;

	if (index<0){
		index=imgarr.length-1;
	}
	 
	 info.innerHTML="一共"+imgarr.length+"张，当前第"+(index+1)+"张";
	 
	img.src=imgarr[index];

}

next.onclick=function(){
	index++;

	if (index>imgarr.length-1){
		index=0;
	}
	info.innerHTML="一共"+imgarr.length+"张，当前第"+(index+1)+"张";
	img.src=imgarr[index];
}