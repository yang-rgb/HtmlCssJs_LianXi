import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible.js'
import "hammerjs/hammer.js"

Vue.config.productionTip = false

import Scroll from '@/components/Scroll/Scroll.vue'
Vue.component("Scroll",Scroll);

import Scroll2 from "@/components/Scroll/Scroll2.vue"
Vue.component("Scroll2",Scroll2);

// Vue.prototype.$bus=new Vue();


import {tap,swipeleft,swiperight,press,pan,panend,panmove,panstart} from "@/assets/js/touchevue.js"

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import  FastClick  from  'fastclick'
FastClick.attach(document.body);


Vue.directive('demo', {
  bind: function (el, binding, vnode) {
    el.style.width="100%";
  }
})

// Vue.directive("hammer",{
// 	bind:function(el,binding){
// 		var hammertime=new Hammer(el);
// 		hammertime.on(binding.expression,binding.value);
// 	}
// })


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
