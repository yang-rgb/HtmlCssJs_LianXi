<template>
<div id="sousuoye">
	<div class="sousuoye1">
		<form onsubmit="return false" >
			<i></i>
			<input @keyup.enter="huoqu" ref="huoqu" type="search" placeholder="自制迷你披萨自制迷你披萨自制迷你披萨自制迷你披萨自制迷你披萨自制迷你披萨"/>
		</form>
		<span @click="hiudao">取消</span>
	</div>
	<div class="sousuoye2" ref="sousuoye2">
		<div class="sousuoye2-top">
			<span>大家都在搜</span>
			<span @click="zhankaiclick">{{zhankaix?"展开":"收起"}}</span>
		</div>
		<div class="sousuoye2-content">
			<span>jg</span>
			<span v-for="(key,index) in datas" :key="index" >{{key}}</span>
		</div>
	</div>
	<div class="sousuoye3">
		<img src="../../../assets/img/2.jpg" alt="">
	</div>
	<div class="sousuoye31">
		<div class="sousuoye31-top">
			<span>搜索历史</span>
			<span v-show="zhankaix3topxian" @click="zhankaiclick3">{{zhankaix3?"展开":"收起"}}</span>
		</div>
		<div class="sousuoye31-content"  ref="sousuoye3">
			<span>jg</span>
			<span v-for="(key,index) in datas2" :key="index" >{{key}}</span>
		</div>
		<div class="aingchu">
			<i></i>
			<span @click="qingkong">清空搜索历史</span>
		</div>
		<div class="queren" v-show="qingkongx">
			<div class="mengban"></div>
			<div class="yuansu clearfix">
				<div>确认清除全部历史记录吗？</div>
				<span @click="queren">确定</span>
				<span @click="qiuxiao">取消</span>
			</div>
			
		</div>
	</div>
	<div class="sousuoyefa">
		<div class="sousuoyefa-top">
			<span>搜索发现</span>
			<span @click="clicksousuoyefa">{{zhankaixfa?"隐藏":"显示"}}</span>
		</div>
		<div class="sousuoyefa-bottom clearfix" ref="xy">
				<span>刺客伍六七</span>
				<span>刺客伍六七</span>
				<span>刺客伍六七</span>
				<span>鬼灭之刃</span>
				<span>刺客伍六七</span>
				<span>刺客伍六七</span>
			
		</div>
	</div>
</div>
</template>

<script>
export default{
	name:"sousuoye",
	data(){
		return{
			zhankaix:true,
			zhankaix3:true,
			zhankaix3top:"",
			zhankaix3topju:"",
			zhankaix3topxian:false,
			qingkongx:false,
			zhankaixfa:true,
			datas:[
				"刺客伍六七2","刺客伍六七3","刺客伍六七4","刺客伍六七5","刺客伍六七6","刺客伍六七7","刺客伍六七8","刺客伍六七9","刺客伍六七10"
			],
			datas2:[
				"刺客伍六七01","刺客伍六七02","刺客伍六七4","刺客伍六七5","刺客伍六七6","刺客伍六七7","刺客伍六七8","刺客伍六七9","刺客伍六七10"
			]
		}
	},
	mounted(){
		this.zhankaix3top=this.$refs.sousuoye3.children;
		this.zhankaix3topju=this.zhankaix3top[this.zhankaix3top.length-1].offsetTop-this.zhankaix3top[0].offsetTop;
		if(this.zhankaix3topju>=65){this.zhankaix3topxian=true}
	},
	methods:{
		zhankaiclick(){	
			this.zhankaix=!this.zhankaix;
			if(this.zhankaix==true){
				this.$refs.sousuoye2.style.maxHeight="90px";
			}
			if(this.zhankaix==false){
				this.$refs.sousuoye2.style.maxHeight="none";
			}
		},
		zhankaiclick3(){
			this.zhankaix3=!this.zhankaix3;
			if(this.zhankaix3==true){
				this.$refs.sousuoye3.style.maxHeight="65px";
			}
			if(this.zhankaix3==false){
				this.$refs.sousuoye3.style.maxHeight="none";
			}
		},
		qingkong(){
			this.qingkongx=true;
		},
		qiuxiao(){
			this.qingkongx=false;
		},
		queren(){
			this.qingkongx=false;
			for(var i=this.zhankaix3top.length-1;i>=0;i--){
				this.$refs.sousuoye3.removeChild(this.zhankaix3top[i]);
			}
		},
		huoqu(){
			this.datas2.unshift(this.$refs.huoqu.value)	
			this.$refs.huoqu.value="";
		},
		clicksousuoyefa(){
			console.log(this.$refs.xy.children)
			this.zhankaixfa=!this.zhankaixfa;
			if(this.zhankaixfa){
				this.$refs.xy.style.display="block";
			}else{
				this.$refs.xy.style.display="none";
			}
		},
		hiudao(){
			this.$router.back();
		}
	}
}
</script>

<style scoped="scoped">

#sousuoye{
	position: absolute;
	top: 0;
	left: 50%;
	margin-left: -5rem;
	z-index: 4;
	width: 10rem;
	height: 100%;
	background: white;
	overflow-y: scroll;
	animation: sousuodong 0.3s linear;
}
@keyframes sousuodong{
	from{
		transform: translateX(100%);
	}
	to{
		transform: translateX(0);
	}
}
#sousuoye::-webkit-scrollbar{ 
        width:0px;
        height: 0px;
        background-color: transparent;
    } 

#sousuoye .sousuoye1{
	height: 1.111111rem;
	width: 100%;
	background: #FF6666;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
#sousuoye .sousuoye1 form input{
	width: 8rem;
	height: 0.833333rem;
	border-radius: 0.555555rem;
	padding: 0.092592rem 0.37037rem 0.092592rem 0.925925rem;
	box-sizing: border-box;
	outline: 0;
	border: 0;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
#sousuoye .sousuoye1 form i{
	display: inline-block;
	width: 0.37037rem;
	height: 0.37037rem;
	margin-top: 0.222222rem;
	margin-left: 0.185185rem;
	background-color: #0077AA;
	position: absolute;
	background: url(../../../assets/img/fangdajing.png) no-repeat;
	background-size: cover;
}
#sousuoye .sousuoye1>span{
	color: white;
	font-size: 20px;
}
#sousuoye .sousuoye2{
	width: 100%;
	max-height: 90px;
	background-color: white;
	overflow: hidden;
	margin-bottom: 10px;
}
#sousuoye .sousuoye2 .sousuoye2-top{
	display: flex;
	justify-content: space-between;
	padding: 0.185185rem 0.185185rem;
}
#sousuoye .sousuoye2 .sousuoye2-top span:nth-child(1){
	font-size: 12px;
}
#sousuoye .sousuoye2 .sousuoye2-top span:nth-child(2){
	font-size: 12px;
	color: #ccc;
}
#sousuoye .sousuoye2 .sousuoye2-content{
	padding: 0 0.185185rem;
	display: flex;
	flex-wrap: wrap;
}
#sousuoye .sousuoye2 .sousuoye2-content span{
	padding: 5px 5px;
	margin: 5px 0;
	background: #eee;
	margin-right: 0.185185rem;
	border-radius: 0.092592rem;
	white-space: nowrap;

}
#sousuoye .sousuoye3{
	box-sizing: border-box;
	padding: 0px 0.185185rem;
	border-radius: 0.37037rem;
	width: 100%;
	height: 1.851851rem;
	overflow: hidden;
}
#sousuoye .sousuoye3 img{
	width: 100%;
}

.sousuoye31{
	margin-top: 0.37037rem;
}
.sousuoye31 .sousuoye31-top{
	display: flex;
	justify-content: space-between;
	padding: 0.185185rem 0.185185rem;
}
.sousuoye31 .sousuoye31-content{
	padding: 0 0.185185rem;
	max-height: 65px;
	overflow: hidden;
	display: flex;
	flex-wrap: wrap;
}
.sousuoye31 .sousuoye31-content span{
	padding: 5px 5px;
	margin: 5px 0;
	background: #eee;
	margin-right: 0.185185rem;
	border-radius: 0.092592rem;
	white-space: nowrap;
}
.sousuoye31 .aingchu{
	width: 100%;
	height: 40px;
	padding: 0 0.185185rem;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
}
.sousuoye31 .aingchu>i{
	display: inline-block;
	width: 20px;
	height: 20px;
	background: url(../../../assets/img/lajitong.png) no-repeat;
	background-size: contain;
	margin-right: 0.185185rem;
}
.sousuoye31 .queren .mengban{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.5);
}
.sousuoye31 .queren .yuansu{
	position: absolute;
	top: 50%;
	left: 50%;
	margin-left: -40%;
	margin-top: -35px;
	width: 80%;
	height: 70px;
	border-radius: 5px;
	box-sizing: border-box;
	padding: 10px 20px;
	background: white;
}
.sousuoye31 .queren .yuansu>div{
	font-size: 16px;
	margin-bottom: 15px;
}
.sousuoye31 .queren .yuansu>span{
	float: right;
	font-size: 14px;
	color: #FF6666;
}
.sousuoye31 .queren .yuansu span:nth-of-type(2){
	margin-right: 20px;
}

.sousuoyefa .sousuoyefa-top{
	display: flex;
	justify-content: space-between;
	padding: 0.185185rem 0.185185rem;
}
.sousuoyefa .sousuoyefa-bottom{
	padding: 0px 0.185185rem;
	box-sizing: border-box;
	/* line-height: 30px; */
	display: flex;
	flex-wrap: wrap;
}
.sousuoyefa .sousuoyefa-bottom span{
	float: left;
	padding: 5px 5px;
	margin: 5px 0;
	background: #eee;
	margin-right: 0.185185rem;
	border-radius: 0.092592rem;
	white-space: nowrap;
}

</style>
