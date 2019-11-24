<template>
	<div class="tab-bar-item" @click="itemClick">
		<div v-if="!isActive"><slot name="item-icon"></slot></div>
		<div v-else><slot name="item-icon-active"></slot></div>
		<div :class="{active:isActive}"><slot name="item-text"></slot></div>
	</div>
</template>
<script>
	export default {
		name:"tabbarItem",
		props:{
			path:String
		},
		data(){
			return {
				 isActive:true
			}
		},
		computeds:{
			isActive(){
				return this.$route.path.indexof(this.path)!==-1
			}
		},
		methods:{
			itemClick(){
				this.$router.replace(this.path);
			}
		}
		
	}
</script>

<style scoped="scoped">
	.tab-bar-item{
		flex: 1;
		text-align: center;
		height: 49px;
	}
	.tab-bar-item div{
		font-size: 16px;
	}
	.tab-bar-item img{
		width:24px;
		height: 24px;
		vertical-align: middle;
		margin-bottom: 1px;
	}
	.active{
		color: red;
	}
</style>
