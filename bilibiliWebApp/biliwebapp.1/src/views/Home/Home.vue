<template>
  <div class="home" >
		 <loading ref="load" @xing="xing" @disncl="disncl" :disn="disn" :loadtop="loadtop" :isdt="isdt" v-show="isNumlo"></loading>
	  <div class="nav" ref="nav" v-show="navfiexd"
	  	:style="{position:'fixed',zIndex:99,top:0}"
	  >
	  	<ul @click="luyouclick" >
	  		<router-link to="/home/zhibo" tag="li" replace>
	  			直播
	  		</router-link>
	  		<router-link  to="/home/tuijian" tag="li" replace>
	  			推荐
	  		</router-link>
	  		<router-link to="/home/remen" tag="li" replace>
	  			热门
	  		</router-link>
	  		<router-link to="/home/zhuifan" tag="li" replace>
	  			追番
	  		</router-link>
	  		<router-link to="/home/yingshi" tag="li" replace>
	  			影视
	  		</router-link>
	  		<router-link to="/home/nian" tag="li" replace>
	  			70年
	  		</router-link>
	  	</ul>
	  	<div class="heng" ref="heng2"></div>
	  </div>
	 <Scroll class="gao" 
				ref="scoll" 
				:probeType="3" 
				@scroll="contentscroll"
				:pullUpLoad="true"
				@pullingUp="Upla"
				>
	<tabtop ref="tab" class="ee">
		<template #sousuo>
			<sousuo></sousuo>
		</template>
		<template #icon> 
			<icon>
				<div class="iconyouxi"></div>
				<div class="iconxiazai"></div>
				<div class="iconxiaoxi">
					<span>10</span>
				</div>
			</icon>
		</template>
	</tabtop>
	<div class="nav" ref="nav">
		<ul @click="luyouclick" ref="ulchilder">
			<router-link to="/home/zhibo" tag="li" replace>
				直播
			</router-link>
			<router-link  to="/home/tuijian" tag="li" replace>
				推荐
			</router-link>
			<router-link to="/home/remen" tag="li" replace>
				热门
			</router-link>
			<router-link to="/home/zhuifan" tag="li" replace>
				追番
			</router-link>
			<router-link to="/home/yingshi" tag="li" replace>
				影视
			</router-link>
			<router-link to="/home/nian" tag="li" replace>
				70年
			</router-link>
		</ul>
		<div class="heng" ref="heng"></div>
	</div>
	<div @touchstart="start" @touchmove="move" @touchend ="end">
	<transition :name="tranname">
		<keep-alive>
			<router-view ref="homee"  class="view-bai"></router-view>
		</keep-alive>
	</transition>
	</div>
	</Scroll>
<!-- 	<div class="huadong" v-swiperight="panhua"></div> -->
	
	<xiang @click.native="backclick" v-show="xiangx"></xiang>
  </div>
</template>

<script>
// @ is an alias to /src
import tabtop from "../tabtop/tabtop.vue"
import sousuo from "./tabtop/sousuo.vue"
import icon from "../../components/tabbar/icon.vue"
import xiang from "@/components/xiangshang/index.vue"
import loading from "../../components/loading.vue"

export default {
  name: 'home',
  components:{
  	 tabtop,
  	 sousuo,
  	 icon,
  	 xiang,
  	 loading
  },
  data(){
	  return{
		  xiangx:false,
		  navtop:"",
		  navfiexd:false,
		  navfiexdtop:"",
		  savey:0,
		  startY:0,
		  moveY:0,
		  stX:0,
		  moX:0,
		  isNumlo:false,
		  loadtop:"",
		  isdt:true,
		  disn:true,
			tranname:"tranleft",
		startX:"",
		moveX:"",
		X:"",
		start2Y:"",
		move2Y:"",
		Y:"",
		toinde:1
		  
	  }
  },
  watch:{
	  '$route'(to,from){
		  this.toinde=to.meta.index
		  this.$refs.heng.style.left= this.$refs.ulchilder.children[this.toinde].offsetLeft+( this.$refs.ulchilder.children[this.toinde].offsetWidth/2)-(this.$refs.heng.offsetWidth/2)+"px";
		  this.$refs.heng2.style.left=this.$refs.heng.style.left;
		  if(to.meta.index>from.meta.index){
			  this.tranname="tranleft"
		  }else{
			  this.tranname="tranright"
		  }
	  }
  },
 mounted(){
	this.navtop=this.$refs.nav.offsetTop;
 },
beforeRouteEnter (to, from, next) {
 next(vm => {
	 vm.$refs.scoll.scrollTo(0,vm.savey,0);
	 vm.$refs.scoll.refresh();
   })
},
 activated(){
	 this.$refs.scoll.scrollTo(0,this.savey,0)
	 this.$refs.scoll.refresh();
	 if(this.$route.path!=window.sessionStorage.getItem("path")){
		 this.$router.replace( window.sessionStorage.getItem("path"))
	 }
 },
 deactivated(){
	 this.savey=this.$refs.scoll.scroll.y;
 },
 methods:{
	 start(e){
		this.startX=e.changedTouches[0].pageX; 
		this.start2Y=e.changedTouches[0].pageY;
	 },
	 move(e){
		 this.moveX=e.changedTouches[0].pageX;
		 this.move2Y=e.changedTouches[0].pageY;
		 
	 },
	 end(e){
		 this.X=this.moveX-this.startX;
		 this.Y=this.move2Y-this.start2Y;
		 clearTimeout(timert)
		 var timert=setTimeout(function(){
			 window.sessionStorage.setItem("lun",'true')
		 },300)
		  if(window.sessionStorage.getItem("lun")=="true"){
			 var inde=this.$route.meta.index;
			 window.sessionStorage.setItem("inde",inde)
			 var index=Number(window.sessionStorage.getItem("inde"))
			 if(Math.abs( this.X)>Math.abs( this.Y)&&this.X>0){
				 if(index==0){
					index=1;
				}
				 var er=this.$router.options.routes[1].children[index].path
				this.$router.replace('/home/'+er)
			 }
			 if(Math.abs( this.X)>Math.abs( this.Y)&&this.X<0){
				if(index==5){
					index=4;
				}
				 var er=this.$router.options.routes[1].children[index+2].path
				 this.$router.replace('/home/'+er)
			 } 
		  }
		
	 },
	 xing(val){
		this.isNumlo=false;
		this.isdt=true;
	 },
	 disncl(val){
		 this.disn=val;
	 },
	 luyouclick(e){
		 this.$refs.heng.style.left=e.target.offsetLeft+(e.target.offsetWidth/2)-(this.$refs.heng.offsetWidth/2)+"px";
		 this.$refs.heng2.style.left=this.$refs.heng.style.left;
		
	 },
	 backclick(){
		 this.$refs.scoll.scrollTo(0,0,500)
	 },
	 contentscroll(position){
	
		 if(position.y==0){
			 this.$refs.homee.$el.addEventListener("touchstart",(e)=>{
			 	this.startY=e.touches[0].pageY;
			 	this.stX=e.touches[0].pageY;
			 })
			 
				 this.$refs.homee.$el.addEventListener("touchmove",(e)=>{
					 this.moX=e.touches[0].pageX-this.stX;
					 this.moveY=e.touches[0].pageY-this.startY;
					
					 if(position.y==0 && Math.abs(this.moveY)>Math.abs(this.moX) && this.moveY>30){	
						this.isNumlo=true;
						this.disn=true;
						if(this.isdt){
						this.loadtop=this.$refs.load.$el.offsetTop-40;
						this.moveY=e.touches[0].pageY-this.startY;
						this.$refs.load.$el.style.opacity=1;
						this.$refs.load.$el.style.transition="none";
						this.$refs.load.$el.style.top=40+(this.moveY)+"px";
						}
						if(this.$refs.load.$el.offsetTop>200){
							this.$refs.load.$el.style.top="200px";
						}
					 } 
					
				 				  
				 })
			
			 
			 this.$refs.homee.$el.addEventListener("touchend",(e)=>{
				
				 if(this.$refs.load.$el.offsetTop>=120 && this.isdt==true){
					this.$refs.load.$el.style.transition="top 0.3s ease-in";
					this.$refs.load.$el.style.top="120px";
					
					clearInterval(timer)
					var timer=setInterval(()=>{
						if(this.$refs.load.$el.offsetTop==120){
							this.isdt=false;
							clearInterval(timer)
						}
					},310)
					
				 }
				 if(this.$refs.load.$el.offsetTop<120 && this.isdt==true){
					 	this.$refs.load.$el.style.top="40px";
						this.$refs.load.$el.style.opacity=0;
						this.$refs.load.$el.style.transition="all 0.3s ease-in";
						clearInterval(timer4)
						var timer4=setInterval(()=>{
							if(this.$refs.load.$el.offsetTop==40){
								this.isNumlo=false;
								clearInterval(timer4)
							}
						},310)
				 }
				 
			 })
		 }
		this.xiangx=-position.y>400;
		
		this.navfiexd=-position.y>75
		
	 },
	 Upla(){
		 // console.log("上拉")
		 this.$refs.scoll.finishPullUp();
	 }
 }
}
</script>
<style scoped>
.home{
	height: 100vh;
}
.gao{
	height: -webkit-calc(100% - 49px);
	
}

.view-bai{
	transition: all 0.3s;
}
.tranleft-enter,
.tranright-leave-active{
	transform: translate(100%,0);
}
.tranright-enter,
.tranleft-leave-active{
	transform: translate(-100%,0);
}

.iconyouxi{
	background: url(../../assets/img/youxi.png) no-repeat;
}
.iconxiazai{
	background: url(../../assets/img/xiazai.png) no-repeat;
}
.iconxiaoxi{
	margin-top: 0.092592rem;
	background: url(../../assets/img/xiaoxi.png) no-repeat;
	position: relative;
}
.iconxiaoxi>span{
	display: inline-block;
	width: 15px;
	height: 15px;
	line-height: 15px;
	position: absolute;
	top: -0.277777rem;
	right: -0.277777rem;
	padding: 0.037037rem 0.037037rem;
	border: 0.037037rem solid #fff;
	background-color: #FF0000;
	border-radius: 50%;
	font-size: 12px;
	color: #fff;
	font-weight: 600;
	transform: scale(0.75);
}

.nav{
	width: 100%;
	height: 0.74074rem;
	background-color: white;
	position: relative;
	border-bottom: 0.018518rem solid #eee;
}
.nav>ul{
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	font-size: 0.37037rem;
	 
}
.nav>ul>li{
	width: 100%;
	text-align: center;
	line-height: 0.74074rem;
}
.router-link-active{
	color: #FF6666;
}
.heng{
	position: absolute;
	left: 2.111111rem;
	bottom: 0;
	width: 0.777777rem;
	height: 0.055555rem;
	background-color: #FF6666;
	transition: left 0.3s;
}
</style>