<template>
	<div class="loading" ref="topload">
		<div class="load2" ref="load2">
			<div class="loader1">
				<div class="t1" ref="t1">
					<transition>
						<span class="t1t1" ref="t1t1" v-show="isNuew"></span>
					</transition>
				</div>
			</div>
			<div class="loader2">
				<div class="t2" ref="t2"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	name:"loading",
	props:["loadtop","isdt","disn"],
	data(){
		return{
			isNuew:false
		}
	},
	watch:{
		 loadtop(){
			 if(this.loadtop<40){
				this.$refs.t2.style.transform="rotate("+(225+(this.loadtop*4.5))+"deg)";
			}else if(this.loadtop>=40){
				this.$refs.t2.style.transform="rotate(405deg)";
			}
			if(this.loadtop>40 && this.loadtop<73){
				this.isNuew=true
				this.$refs.t1.style.transform="rotate("+(225+((this.loadtop%40)*4.5))+"deg)";
			}else if(this.loadtop>80){
				this.$refs.t1.style.transform="rotate(370deg)";
				this.$refs.load2.style.transform="rotate("+((this.loadtop%40)*4.5)+"deg)";
				
			}		 
		 },
		
		 isdt(){
			 this.isNuew=false;
			 this.$refs.t2.style.transform="rotate(225deg)";
			 this.$refs.t1.style.transform="rotate(225deg)";
			 clearInterval(this.timer)
			 var seep=0;
			
			 this.timer=setInterval(()=>{

				if(this.disn==false){ clearInterval(this.timer)}
				 seep+=10;
				 seep=seep%360;
				 if(seep<=180){
					this.$refs.t2.style.transform="rotate("+(225+seep)+"deg)"; 
					this.$refs.t1.style.transform="rotate(225deg)";
				 }else if(seep>180){
					this.$refs.t1.style.transform="rotate("+(225+(seep%180))+"deg)";
				 }
				 this.$refs.load2.style.transform="rotate("+seep+"deg)";
				
			 },40)


				clearTimeout(timer2)
				var timer2=setTimeout(()=>{
					this.$emit("disncl","false")
					this.$emit("xing","true")
						clearInterval(this.timer)
						clearTimeout(timer2)	
					this.$refs.load2.style.transform="rotate(30deg)";
					this.$refs.topload.style.top="40px";
						
				},3000)
			
			
			  
		 }
	 },
	mounted(){
		
	},
	methods:{
		xiaoshi(){
			
		}
	}
}
</script>

<style scoped="scoped">
	.loading{
		position: absolute;
		z-index: 1;
		top: 40px;
		left: 4.444444rem;
		display: inline-block;
		transform: scale(0.21);
		transform-origin: left top;
	}
	.load2{
		width: 220px;
		height: 220px;
		margin: 0px auto;
		position: relative;
		border-radius: 50%;
		overflow: hidden;
		background: white;
	}
	.loader1,.loader2{
		width: 50%;
		height: 100%;
		overflow: hidden;
	}
	.loader1{
		padding: 20px 0px 20px 20px;
		box-sizing: border-box;
	}
	.loader2{
		padding: 20px 20px 20px 0px;
		box-sizing: border-box;
		position: absolute;
		top: 0;
		right: 0;
	}	
	.t2{
		position: absolute;
		top: 20px;
		right: 20px;
		width: 180px;
		height: 180px;
		box-sizing: border-box;
		border: 20px solid #FF6666;
		border-bottom-color: transparent;
		border-left-color: transparent;
		border-radius: 50%;
		transform: rotate(225deg);
	}
	.t1{
		width: 180px;
		height: 180px;
		box-sizing: border-box;
		border: 20px solid #FF6666;
		border-top-color: transparent;
		border-right-color: transparent;
		border-radius: 50%;
		transform: rotate(225deg);
		position: relative;
	}
	
	.t1t1{
		display: inline-block;
		width: 0;
		height: 0;
		border: 30px solid #FF6666;
		border-top-color: transparent;
		border-left-color: transparent;
		border-right-color: transparent;
		position: absolute;
		top: -36px;
		left: 4px;
		transform: rotate(45deg);
		border-radius: 5px;
}

</style>
