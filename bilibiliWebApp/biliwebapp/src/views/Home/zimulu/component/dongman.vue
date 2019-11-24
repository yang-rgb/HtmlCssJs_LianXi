<template>
<div class="dongman clearfix">
	<div class="dongman-top">
		<ul @click="dianji" ref="dongul">
			<li>三</li>
			<li>四</li>
			<li>五</li>
			<li class="on">周六</li>
			<li>日</li>
			<li>一</li>
			<li>二</li>
		</ul>
	</div>
	<div class="cont-dong" ref="cont">
		<div class="dongman-content">
			<img class="imgh" src="../../../../assets/img/2.jpg" alt="">
			<span class="d1">{{datati[gai][0].d1}}</span>
			<span class="d2">更新至{{datati[gai][0].geng}}话</span>
		</div>
		<div class="dongman-content">
			<img class="imgh" src="../../../../assets/img/2.jpg" alt="">
			<span class="d1">{{datati[gai][1].d1}}</span>
			<span class="d2">更新至{{datati[gai][1].geng}}话</span>
		</div>
		<div class="dongman-content">
			<img class="imgh" src="../../../../assets/img/2.jpg" alt="">
			<span class="d1">{{datati[gai][2].d1}}</span>
			<span class="d2">更新至{{datati[gai][2].geng}}话</span>
		</div>
		<div class="dongman-content">
			<img class="imgh" src="../../../../assets/img/2.jpg" alt="">
			<span class="d1">{{datati[gai][3].d1}}</span>
			<span class="d2">更新至{{datati[gai][3].geng}}话</span>
		</div>
		<div class="dongman-content">
			<img class="imgh" src="../../../../assets/img/2.jpg" alt="">
			<span class="d1">{{datati[gai][4].d1}}</span>
			<span class="d2">更新至{{datati[gai][4].geng}}话</span>
		</div>
		<div class="dongman-content">
			<img class="imgh" src="../../../../assets/img/2.jpg" alt="">
			<span class="d1">{{datati[gai][5].d1}}</span>
			<span class="d2">更新至{{datati[gai][5].geng}}话</span>
		</div>
		<div class="dongman-content">
			<img class="imgh" src="../../../../assets/img/2.jpg" alt="">
			<span class="d1">{{datati[gai][6].d1}}</span>
			<span class="d2">更新至{{datati[gai][6].geng}}话</span>
		</div>
		<div class="dongman-content">
			<img class="imgh" src="../../../../assets/img/2.jpg" alt="">
			<span class="d1">{{datati[gai][7].d1}}</span>
			<span class="d2">更新至{{datati[gai][7].geng}}话</span>
		</div>
		
	</div>
	
</div>
</template>

<script>
export default{
	name:"dongman",
	data(){
		return{
			zhou:["三","四","五","六","日","一","二"],
			gai:"3",
			datati:[
				[
					{d1:"少女前线少女前线",geng:"15"},
					{d1:"少年阿贝",geng:"15"},
					{d1:"少女前线少女前线",geng:"15"},
					{d1:"黑色的四叶草",geng:"15"},
					{d1:"少女前线少女前线",geng:"15"},
					{d1:"少女前线少女前线",geng:"15"},
					{d1:"少女前线少女前线",geng:"15"},
					{d1:"香蕉喵不可思议的伙",geng:"12"}	
				],
				[
					{d1:"少女前线1",geng:"2"},
					{d1:"少女前线1",geng:"3"},
					{d1:"少女前线1",geng:"3"},
					{d1:"少女前线1",geng:"3"},
					{d1:"少女前线1",geng:"3"},
					{d1:"少女前线1",geng:"3"},
					{d1:"少女前线1",geng:"3"},
					{d1:"少女前线1",geng:"3"}
				],
				[
					{d1:"少年阿贝2",geng:"6"},
					{d1:"少年阿贝2",geng:"6"},
					{d1:"少年阿贝2",geng:"6"},
					{d1:"少年阿贝2",geng:"6"},
					{d1:"少年阿贝2",geng:"6"},
					{d1:"少年阿贝2",geng:"6"},
					{d1:"少年阿贝2",geng:"6"},
					{d1:"少年阿贝2",geng:"6"}	
				],
				[
					{d1:"少女前线少女前线3",geng:"5"},
					{d1:"少女前线少女前线3",geng:"15"},
					{d1:"少女前线少女前线3",geng:"15"},
					{d1:"少女前线少女前线3",geng:"15"},
					{d1:"少女前线少女前线3",geng:"15"},
					{d1:"少女前线少女前线3",geng:"15"},
					{d1:"少女前线少女前线3",geng:"15"},
					{d1:"少女前线少女前线3",geng:"12"}	
				],
				[
					{d1:"少女线少女前线4",geng:"5"},
					{d1:"少年阿贝4",geng:"15"},
					{d1:"少前线少女前线4",geng:"15"},
					{d1:"黑色四叶草4",geng:"15"},
					{d1:"少女线少女前线4",geng:"15"},
					{d1:"少女前线少女前线4",geng:"15"},
					{d1:"少女线少女前线4",geng:"15"},
					{d1:"香喵可思议的伙4",geng:"12"}	
				],
				[
					{d1:"少女线少女前线5",geng:"5"},
					{d1:"少年阿贝5",geng:"15"},
					{d1:"少前线少女前线5",geng:"15"},
					{d1:"黑色四叶草5",geng:"15"},
					{d1:"少女线少女前线5",geng:"15"},
					{d1:"少女前线少女前线5",geng:"15"},
					{d1:"少女线少女前线5",geng:"15"},
					{d1:"香喵可思议的伙5",geng:"12"}	
				],
				[
					{d1:"香蕉喵不可思议的伙6",geng:"5"},
					{d1:"香蕉喵不可思议的伙6",geng:"15"},
					{d1:"香蕉喵不可思议的伙6",geng:"15"},
					{d1:"香蕉喵不可思议的伙6",geng:"15"},
					{d1:"香蕉喵不可思议的伙6",geng:"15"},
					{d1:"香蕉喵不可思议的伙6",geng:"15"},
					{d1:"香蕉喵不可思议的伙6",geng:"15"},
					{d1:"香蕉喵不可思议的伙6",geng:"12"}	
				]
				
					
			]
		}
	},
	methods:{
		dianji(e){
			if(e.target!=this.$refs.dongul){
				for(var i=0;i<this.$refs.dongul.children.length;i++){
					this.$refs.dongul.children[i].classList.remove("on");
					this.$refs.dongul.children[i].innerText=this.zhou[i];
				}
				
				this.gai=suoying(e.target.innerText,this.zhou)
				e.target.classList.add("on")
				e.target.innerText="周"+e.target.innerText;
			}
			
			function suoying(val,zhou){
				for(var i=0;i<zhou.length;i++){
					if(zhou[i]==val){
						return i;
					}
				}
			}
		}
	}
}
</script>

<style scoped="scoped">
.dongman{
	padding: 0 0.185185rem 0.277777rem;
	margin-top: 0.185185rem;
	border-bottom: 0.018518rem #999 solid;
}
.dongman .dongman-top{
	height: 0.555555rem;
}
.dongman .dongman-top ul{
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 100%;
	font-size: 0.259259rem;
}
.dongman .dongman-top ul>li{
	width: 30px;
	height:  30px;
	line-height: 30px;
	text-align: center;
	position: relative;
	padding: 0px 0.092592rem;
}
.on{
	background-color: #FF6666;
	border-radius: 30%; 
	color: white;
}
.dongman-content{
	width: 1.574074rem;
	height: 2.222222rem;
	float: left;
	margin-right: 10px;
	margin-top: 5px;
	/* margin: 10px 10px; */
}
.dongman-content .imgh{
	width: 1.574074rem;
	height: 1.111111rem;	
}
.dongman-content .d1{
	display: block;
	width: 1.481481rem;
	height: 26px;
	overflow: hidden;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	display: -webkit-box;
}
.dongman-content .d2{
	display: block;
	width: 1.481481rem;
	height: 0.37037rem;
	/* margin-top: 15px; */
	color: #999;
	font-size: 0.222222rem;
	white-space: nowrap;
	transform: rotate(0.85);
}
.cont-dong{
	padding-left: 10px;
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
}
</style>
