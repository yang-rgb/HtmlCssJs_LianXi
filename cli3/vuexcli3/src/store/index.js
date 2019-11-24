import Vue from "vue"
import Vuex from "vuex"

// 安装插件
Vue.use(Vuex)

// 创建对象
const store=new Vuex.Store({
	state:{
		counter:1000
	},
	
	mutations:{
		// 方法
		increment(state){
			state.counter++
		},
		decrement(state){
			state.counter--
		}
		
	},
	actions:{
		
	},
	getters:{
		
	},
	modules:{
		
	}
})

export default store