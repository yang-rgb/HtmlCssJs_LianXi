<template>
	<div class="tabtop">
		<span class="span1" @click.stop="clickSan"></span>
		<div class="touxiang" @click.stop="clickSan"></div>
		<slot></slot>
		<slot name="sousuo"></slot>
		<slot name="icon"></slot>
	</div>
</template>

<script>
import bus from "@/bus.js"
	
export default {
	name:"tabtop",
	data(){
		return{
			
		}	
	},
	components:{
		
	},
	methods:{
		clickSan(){
			bus.$emit("toChang","true");
		}
	}
	
	
}
</script>

<style scoped="scoped">
.tabtop{
	width:9.981481rem;
	height: 2rem;
	background-color: #FF6666;
	display: flex;
	align-items: center;
	position: relative;
}
.tabtop .span1{
	display: inline-block;
	/* background-color: #999999; */
	width: 0.277777rem;
	height: 0.629629rem;
	background:url(../../assets/img/baiyusanheng.png) no-repeat;
	background-size: cover;
}
.touxiang{
	display: inline-block;
	width:0.833333rem;
	height: 0.833333rem;
	background-color: #F6F6F6;
	margin-left: 0.277777rem;
	border-radius: 50%;
	background: url(../../assets/img/2.jpg) center center no-repeat;
	background-size: cover;
	position: relative;
}
.touxiang:after{
	content: "";
	width: 0.185185rem;
	height: 0.185185rem;
	position: absolute;
	right: -0.185185rem;
	top: -0.092592rem;
	background-color: red;
	border: 0.037037rem solid white;
	border-radius: 50%;
}

.pindaozi{
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
	font-size: 0.555555rem;
	color: white; 
}
	
</style>
