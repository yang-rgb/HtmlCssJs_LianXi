<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>
	
<script>
import BScroll from "better-scroll";

export default{
	name:"Scoller",
	props:{
		probeType:{
			type:Number,
			default:0
		},
		pullUpLoad:{
			type:Boolean,
			default:false
		}
	},
	data(){
		return{
			scroll:null
		}
	},
	mounted(){
		this.scroll=new BScroll(this.$refs.wrapper,{
			bounce:false,
			click:true,
			probeType:this.probeType, //监听滚动
			pullUpLoad:this.pullUpLoad,//监听上拉
            scrollX:true,
			scrollY: true,
			pullDownRefresh:true
			// pullDownRefresh: { //当设置为 true 开启下拉刷新
			// 	threshold: 30, // 下拉距离超过30px触发pullingDown事件
			// 	stop: 20 // 回弹停留在距离顶部20px的位置
			// }
			// bounce:false 这个要设置成true
		})
		// 监听滚动位置
		this.scroll.on("scroll",(position)=>{
			this.$emit("scroll",position)
		})
		// 监听上拉事件
		this.scroll.on('pullingUp',()=>{
			this.$emit("pullingUp")
		})
		// this.scroll.refresh() 重新计算高度、宽度（刷新）
		//this.scroll.finishPullUp()
		
		//监听下拉刷新事件
		this.scroll.on('pullingDown', () => {
				// console.log("下拉刷新")
		     this.scroll.finishPullDown(); 
			// 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则下拉事件只会执行一次
		})
		if(true){
			this.scroll.on("touchEnd",(pos)=>{
				// console.log(87)
			})
		}
		
		
	},
	methods:{
		scrollTo(x,y,time=300){
			this.scroll && this.scroll.scrollTo(x,y,time)
		},
		finishPullUp(){
			this.scroll && this.scroll.finishPullUp();
		},
		 refresh(){
			  this.scroll.refresh();
		 }
		
	}
	
}
</script>

<style scoped="scoped">
</style>
