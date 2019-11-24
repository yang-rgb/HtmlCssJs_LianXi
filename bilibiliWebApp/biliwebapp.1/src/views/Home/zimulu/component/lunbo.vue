<template>
	<div class="lunbo" v-pan="pandong">
		<swiper :options="swiperOption" ref="myswipt">
		    <!-- slides -->
		    <swiper-slide>
		        <img class="swipe-img" @load="imgload" src="../../../../assets/img/lunbo/1.jpg" alt="去哪儿门票" style="opacity: 1;">
		    </swiper-slide>
		    <swiper-slide>
		        <img class="swipe-img" src="../../../../assets/img/lunbo/2.jpg" alt="去哪儿门票" style="opacity: 1;">
		    </swiper-slide>
		    <swiper-slide>
		        <img class="swipe-img" src="../../../../assets/img/lunbo/3.jpg" alt="去哪儿门票" style="opacity: 1;">
		    </swiper-slide>
		     <swiper-slide>
			<img class="swipe-img" src="../../../../assets/img/lunbo/4.jpg" alt="去哪儿门票" style="opacity: 1;">
		    </swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
		 </swiper>

	</div>
</template>

<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

	export default{
		name:"lunbo",
		components: {
		    swiper,
		    swiperSlide
		 },
		data(){
			return{
				swiperOption:{
					pagination:{el:".swiper-pagination"},
					loop:true,
					 autoplay:{
						delay:2000,
						disableOnInteraction:false
					}
					 
				}
			}
		},
		props:{
			hig:{
				type:Number,
				default:150
			}
			
		},
		 mounted(){
			this.$refs.myswipt.$el.style.height=this.hig+"px";
			
		 },
		 methods:{
			 imgload(){
				 // console.log("00909")
			 },
			 pandong(){
				 window.sessionStorage.setItem("lun",'false')
			 }
			 
		 }
	}
</script>

<style scoped="scoped">
.lunbo{
	padding: 0.185185rem 0.185185rem 0 0.185185rem;
	box-sizing: border-box;
	width: 10rem;
}

.lunbo >>> .swiper-pagination-bullet{
	background-color: white;
	opacity: 1;
}
.lunbo >>> .swiper-pagination-bullet-active{
	background-color: #FF6666;
}
.swipe-img{
	border-radius: 0.185185rem;
	width: 100%;
	height: 100%;
} 
.lunbo >>> .swiper-pagination{
	text-align: right;
}
</style>
