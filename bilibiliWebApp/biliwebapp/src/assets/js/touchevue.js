import Vue from "vue"

import "hammerjs/hammer.js"


function hammerfun(el,name,value){
	var hammertime=new Hammer(el);
	hammertime.on(name,value);
}

const tap=Vue.directive("tap",{
	bind:function(el,binding){
		hammerfun(el,binding.name,binding.value)	
	}
})
const swipeleft=Vue.directive("swipeleft",{
	bind:function(el,binding){
		hammerfun(el,binding.name,binding.value)
	}
})
const swiperight=Vue.directive("swiperight",{
	bind:function(el,binding){
		hammerfun(el,binding.name,binding.value)
	}
})
const swipet=Vue.directive("swipe",{
	bind:function(el,binding){
		hammerfun(el,binding.name,binding.value)
	}
})
const press=Vue.directive("press",{
	bind:function(el,binding){
		hammerfun(elbinding.name,binding.value)
	}
})
const pan=Vue.directive("pan",{
	bind:function(el,binding){
		hammerfun(el,binding.name,binding.value)
	}
})
const panend=Vue.directive("panend",{
	bind:function(el,binding){
		hammerfun(el,binding.name,binding.value)
	}
})
const panmove=Vue.directive("panmove",{
	bind:function(el,binding){
		hammerfun(el,binding.name,binding.value)
	}
})
const panstart=Vue.directive("panstart",{
	bind:function(el,binding){
		hammerfun(el,binding.name,binding.value)
	}
})

export {tap,swipeleft,swiperight,press,pan,panend,panmove,panstart}