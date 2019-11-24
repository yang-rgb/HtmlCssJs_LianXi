import Vue from "vue";

import tanchuang from "@/components/tanchuangzujian/tanchuang/tanchuang.vue"

var Mycompont=Vue.extend(tanchuang);

export var tanchuang2=(function(){
	
	var defaults={   //默认值
		title:"",
		content:'',
		handleOk:null
	};
	
	return function(opts){ //配置参数
		
		for(var attr in opts){
			defaults[attr]=opts[attr];
		}
		
		
		var vm=new Mycompont({
			el:document.createElement("div"),
			data:{
				title:defaults.title,
				content:defaults.content
			},
			methods:{
				handleOk(){
					defaults.handleOk && defaults.handleOk.call(this);
					document.body.removeChild(vm.$el);
				}
			}
			
		})
		
		document.body.appendChild(vm.$el);
		
	}
	
	
	
})()