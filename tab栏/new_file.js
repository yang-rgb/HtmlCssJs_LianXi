var that;
class Tab{
	constructor(id){
		// 获取元素
		that=this;
		this.main=document.querySelector(id);
		this.add=this.main.querySelector(".tabadd");
		
		// li
		this.ul=this.main.querySelector(".fisrstnav ul:first-child");
		// section
		this.fsection=this.main.querySelector(".tabscon");
		this.init();
		
		
	}

	init(){
		// init 初始化操作让相关的元素绑定时间
		this.updateNode();
		this.add.onclick=this.addTab;
		for(var i=0;i<this.lis.length;i++){
			this.lis[i].index=i;
			this.lis[i].onclick=this.toggleTab.bind(this.lis[i],this);
			this.remove[i].onclick=this.removeTab;
			this.spans[i].ondblclick=this.editTab;
			this.sections[i].ondblclick=this.editTab;
		}
	}
	
	
	// 获取所有的Li 和 section
	updateNode(){
		this.lis=this.main.querySelectorAll("li");
		this.sections=this.main.querySelectorAll("section");
		this.remove=this.main.querySelectorAll('.iconfont');
		this.spans=this.main.querySelectorAll(".fisrstnav li span:first-child");
	}
	
	
	// 切换功能
	toggleTab(that){
		that.clearClass();
		this.className="liactive";
		that.sections[this.index].className="conactive";
	}
	clearClass(){
		for(var i=0;i<this.lis.length;i++){
			this.lis[i].className="";
			this.sections[i].className="";
		}
	}
	// 添加功能
	addTab(){
		that.clearClass();
		// li
		var li='<li class="liactive"><span>z测试1</span><sapn class="iconfont">&#xe873;</sapn></li>';
		var section='<section class="conactive">测试1</section>';
		// ->li
		that.ul.insertAdjacentHTML("beforeend",li);
		that.fsection.insertAdjacentHTML("beforeend",section);
		that.init();
	}
	// 删除功能
	removeTab(e){
		e.stopPropagation();
		var index=this.parentNode.index;
		that.lis[index].remove();
		that.sections[index].remove();
		that.init();
		// 当我们删除的不是选中状态li的时候，原来的选中状态li保持不变
		if(document.querySelector('.liactive')) return;
		
		index--;
		that.lis[index] && that.lis[index].click(); //手动调用我们的点击事件,不需要鼠标触发
		
		
	}
	// 修改功能
	editTab(){
		var str=this.innerHTML;
		window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();
		this.innerHTML='<input type="text" />';
		var input=this.children[0];
		input.value=str;
		input.select();
		input.onblur=function(){
			this.parentNode.innerHTML=this.value;
		};
		input.onkeyup=function(e){
			if(e.keyCode===13){
				this.blur();
			}
		}
		
	}
	
}

var tab=new Tab("#tab");
