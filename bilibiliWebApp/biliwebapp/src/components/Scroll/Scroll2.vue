<template>
	<div class="wrapper" ref="wrapper">

			<slot></slot>
	</div>
</template>

<script>
import BScroll from "better-scroll";
export default{
	name:"wrapper",
	props:["lunbo"],
	data(){
		return{
			scroll:null
		}
	},
	mounted(){
		this.scroll=new BScroll(this.$refs.wrapper,{
			bounce:false,
			// 	top:false,
			// 	right:false,
			// 	left:false,
			// 	bottom:true
			// },
			click:true,
			scrollX:true,
			snap:this.lunbo,
			momentum:false,
			// freeScroll:true,
			probeType:3
		})
		
		this.scroll.on("scrollEnd",(e)=>{
			// console.log( this.scroll.getCurrentPage().pageX )
			this.$emit("scrollend",e)
		})
		this.scroll.on("scroll",(position)=>{
			 // console.log(position )
			this.$emit("scroll",position)
		})
	},
	methods:{
		scrollTo(x,y,time=300){
			this.scroll && this.scroll.scrollTo(x,y,time);
		}
	}
	
}
</script>

<style scoped="scoped">
	
</style>
