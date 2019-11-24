<template>
	<div class="tab-bar-item" @click="clickActive">
		<transition name="fade">
		<div class="back" v-if="isActive"></div>
		</transition>
		<div v-if="!isActive" class="tab-tu1"><slot name="tab-tu1"></slot></div>
		<div v-else class="tab-tu2"><slot name="tab-tu2"></slot></div>
		<div :class="{active:isActive}"><slot name="active"></slot></div>
	</div>
</template>
<script>
	export default {
		name:"tabbarItem",
		props:["path"],
		data(){
			return{

			}
		},
		computed:{
			isActive(){
				return this.$route.path.indexOf(this.path)!==-1;
			}
		},
		methods:{
			clickActive(){ 
				if(this.$route.path!=this.path){
					this.$router.replace(this.path);
				}
			}
		}
		
		
	}
</script>

<style scoped="scoped">

.tab-bar-item{
	flex: 1;
	text-align: center;
	height: 49px;
	font-size: 12px;
	position: relative;
	overflow: hidden;
}
.tab-bar-item img{
	width: 24px;
	height: 24px;
	margin-bottom: 1px;
}
.tab-bar-item{
	color: #666;
}
.active{
	color: red;
}
.back{
	background-color: #f6f6f6;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	z-index: -1; 
	width: 100%;
	height: 100%;
	border-radius: 0;
}
.fade-enter{
	background-color: #666;
	opacity: 0;
	width: 0;
	height: 0;
	border-radius: 50%;
}
.fade-enter-active{
  transition-property: background-color,opacity,width,height,border-radius;
  transition-duration: 0.5s,1.5s,0.5s,0.5s,1.5s;
}
	
</style>
