<template>
	<div class="celan" v-show="shows"  @touchstart.stop="touchstart" @touchmove.stop="touchmove" @touchend.stop="touchend" ref="celan">
		<div  class="mengban"></div>
		<div class="celan2" ref="celan2">
		<div class="scoll">
			<div class="celan-top">
				<div class="celan-top1">
					<div class="celan-top1-left">
						<div class="touxiang">
							<img src="../../assets/img/2.jpg" alt="">
						</div>
						<div class="mingcheng">
							<span>哔哩哔哩</span>
							<span>Lv0</span>
							<span>正式会员</span>
						</div>
						<div class="xingxi">
							B币: <span>0.0</span>
							硬币: <span>0.0</span>
						</div>
					</div>
					<div class="celan-top1-right">
						<i></i>
						<span></span>
					</div>
				</div>
				<div class="celan-top2 clearfix">
					<div class="celan-top2-zi"><span>我的大会员</span>了解更多权益</div>
					<span>成为会员</span>
					<i></i>
				</div>
			</div>
			<div class="xingxiZ">
				<div class="xingxi1">
					<span>5</span>
					<span>动态</span>
				</div>
				<div class="xingxi1">
					<span>175</span>
					<span>关注</span>
				</div>
				<div class="xingxi1">
					<span>5</span>
					<span>粉丝</span>
				</div>
			</div>
			<div class="suoyin">
				<div class="suoyinZ no">
					<span class="iconfont icon-shouye"></span>
					<span>首页</span>
				</div>
				<div class="suoyinZ">
					<span class="iconfont icon-lishi-"></span>
					<span>历史记录</span>
				</div>
				<div class="suoyinZ">
					<span class="iconfont icon-xiazai"></span>
					<span>下载管理</span>
				</div>
				<div class="suoyinZ">
					<span class="iconfont icon-xingji"></span>
					<span>我的收藏</span>
				</div>
				<div class="suoyinZ">
					<span class="iconfont icon-shaohouzaizuo"></span>
					<span>稍后再看</span>
				</div>
				<div class="suoyinZ">
					<span class="iconfont icon-zhenggaotougao-copy"></span>
					<span>投稿</span>
				</div>
				<div class="suoyinZ">
					<span class="iconfont icon-chuangzuo"></span>
					<span>创作中心</span>
				</div>
				<div class="suoyinZ">
					<span class="iconfont icon-remen"></span>
					<span>热门活动</span>
				</div>
				<div class="suoyinZ">
					<span class="iconfont icon-zhibo"></span>
					<span>直播中心</span>
				</div>
				<div class="suoyinZ">
					<span class="iconfont icon--duanxinneirongmianliu
"></span>
					<span>免流服务</span>
				</div>
				<div class="suoyinZ">
					<span class="iconfont icon-sanzhuanhuan"></span>
					<span>青少年模式</span>
				</div>
				<div class="suoyinZ">
					<span class="iconfont icon-zhidingfangan"></span>
					<span>我的订单</span>
				</div>
				<div class="suoyinZ">
					<span class="iconfont icon-huiyuan"></span>
					<span>会员购中心</span>
				</div>
				
				<div class="suoyinZ">
					<span class="iconfont icon-lianxikefu"></span>
					<span>联系客服</span>
				</div>
				
			</div>
			
		</div>
		<div class="scoll-bottom">
			<div class="scoll-bottom2">
				<span class="iconfont icon-shezhi"></span>
				<span>设置</span>
			</div>
			<div class="scoll-bottom2">
				<span class="iconfont icon-zhuti"></span>
				<span>主题</span>
			</div>
			<div class="scoll-bottom2">
				<span class="iconfont icon-yejian"></span>
				<span>夜间</span>
			</div>

		</div>
		</div>
	</div>
</template>

<script>
import bus from "@/bus.js";
	
export default{
	name: 'celan',
	data(){
		return{
			startx:0,
			movex:0,
			shows:false
		}
	},
	computed:{
		cha(){
			return this.startx-this.movex;
		}
	},
	watch:{
		shows:function(val){
			this.$refs.celan2.style.left=0;
		}
	},
	mounted(){
		document.addEventListener('plusready', function() {
		    var webview = plus.webview.currentWebview();
		    plus.key.addEventListener('backbutton', function() {
		        webview.canBack(function(e) {
		            if(e.canBack) {
		                webview.back();
		            } else {
		                webview.close(); //hide,quit
		                //plus.runtime.quit();
		            }
		        })
		    });
		});
		
		bus.$on("toChang",(val)=>{
			this.shows=val;
		});	
	},
	methods:{
		touchstart(e){
			e=e||event;
			this.startx=e.targetTouches[0].pageX;
		}, 
		touchmove(e){
			this.movex=e.targetTouches[0].pageX;
			if(this.cha>20){
				this.$refs.celan2.style.transition="";
				this.$refs.celan2.style.left=-this.cha+"px";
			}

		},
		touchend(){
			if(this.shows=="true"&&parseInt(getComputedStyle(this.$refs.celan2,null).left)!=0){
				this.$refs.celan2.style.transition="all 0.2s";
				this.$refs.celan2.style.left=0;
			}
			if(parseInt(getComputedStyle(this.$refs.celan2,null).left)>-110){
				this.$refs.celan2.style.transition="all 0.2s";
				this.$refs.celan2.style.left=0;
			}else{
				this.shows=false;
				
			}
		}
	}
}

</script>

<style scoped="scoped">
@import url("../../assets/img/icon/iconfont.css");
	

.celan{
	position: absolute;
	height: 100% ;
	z-index: 200;
}
.celan2{
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	animation: celan 0.3s linear;
}
@keyframes celan{
	from{
		transform: translateX(-200px);
	}
	to{
		transform: translateX(0);
	}
}
.mengban{
	width: 10rem;
	height: 100% ;
	position: absolute;
	z-index: -1;
	background: rgba(0,0,0,0.3);
}
.scoll{
	width: 6rem;
	height: calc(100% - 40px);
	background: #CCCCCC;
	overflow-y:scroll; 
	/* overflow: hidden; */
}
.scoll::-webkit-scrollbar{ 
	width:0px;
	height: 8px;
	background-color: transparent;
} 

.celan .scoll .celan-top{
	width: 100%;
	background: #FF6666;
}
.celan .scoll .celan-top .celan-top1{
	width: 100%;
	display: flex;
	padding: 0.462962rem 0.185185rem 0.185185rem;
	box-sizing: border-box;
}
.celan .scoll .celan-top .celan-top1 .celan-top1-left{
	flex: 70%;
	
}
.celan .scoll .celan-top .celan-top1 .celan-top1-left .touxiang{
	width: 1.111111rem;
	height: 1.111111rem;
	overflow: hidden;
	text-align: center;
	border-radius: 50%;
	border: 2px solid white;
	box-sizing: border-box;
	margin-bottom: 0.185185rem;
}
.celan .scoll .celan-top .celan-top1 .celan-top1-left .touxiang>img{
	height: 100%;
	margin: 0 -100%;
}
.celan .scoll .celan-top .celan-top1 .celan-top1-left .mingcheng{
	margin-bottom: 0.092592rem;
	white-space: nowrap;
}
.celan .scoll .celan-top .celan-top1 .celan-top1-left .mingcheng span:nth-child(1){
	font-weight: 300;
	color: white;
}
.celan .scoll .celan-top .celan-top1 .celan-top1-left .mingcheng span:nth-child(2){
	border: 1px solid white;
	padding: 1px 2px;
	border-radius: 3px;
	color: white;
	margin: 0px 0.092592rem;
	display: inline-block;
	transform: scale(0.85);
}
.celan .scoll .celan-top .celan-top1 .celan-top1-left .mingcheng span:nth-child(3){
	background-color: #CCCCCC;
	border: 1px solid white;
	padding: 1px 2px;
	border-radius: 3px;
	color: red;
	font-size: 12px;
	display: inline-block;
	transform: scale(0.85);
}
.celan .scoll .celan-top .celan-top1 .celan-top1-left .xingxi{
	color:#eee;
}
.celan .scoll .celan-top .celan-top1 .celan-top1-left .xingxi span:nth-child(1){
	margin-right: 0.092592rem;
}

.celan .scoll .celan-top .celan-top1 .celan-top1-right{
	flex: 30%;
	display: flex;
	justify-content: flex-end;
}
.celan .scoll .celan-top .celan-top1 .celan-top1-right>i{
	display: inline-block;
	width: 0.555555rem;
	height: 0.555555rem;
	background: url(../../assets/img/qianbao.png) no-repeat;
	background-size: contain;
}
.celan .scoll .celan-top .celan-top1 .celan-top1-right>span{
	display: inline-block;
	width: 0.555555rem;
	height: 0.555555rem;
	background: url(../../assets/img/SAOYISAO_4.png) no-repeat;
	background-size: contain;
	margin-left: 0.185185rem;
}

.celan .scoll .celan-top .celan-top2{
	width: 100%;
	background-color: white;
	padding: 0.185185rem 0.37037rem 0.185185rem 0.37037rem;
	box-sizing: border-box;
}
.celan .scoll .celan-top .celan-top2 .celan-top2-zi{
	color: #999999;
	margin-bottom: 0.092592rem;
}
.celan .scoll .celan-top .celan-top2 .celan-top2-zi>span{
	font-size: 16px;
	color: red;
	font-weight: 900;
	margin-right: 0.092592rem;
	vertical-align: middle;
}
.celan .scoll .celan-top .celan-top2>i{
	float: right;
	width: 0.37037rem;
	height: 0.37037rem;
	margin-top: -0.333333rem;
	background: url(../../assets/img/xiangyou.png) no-repeat;
	background-size: cover;	
}
.celan .scoll .celan-top .celan-top2>span{
	color: #666666;
}

.celan .scoll .xingxiZ{
	display: flex;
	margin-top:0.092592rem;
	padding-left: 0.555555rem;
	background-color: white;
	padding-bottom: 0.092592rem;
}
.celan .scoll .xingxiZ .xingxi1{
	flex: 1;
	text-align: center;
}
.celan .scoll .xingxiZ .xingxi1 span:nth-child(1){
	display: block;
	margin: 0.185185rem 0;
}
.celan .scoll .xingxiZ .xingxi1 span:nth-child(2){
	color: #999999;
}

.celan .scoll .suoyin{
	margin-top: 0.092592rem;
	width: 100%;
}
.celan .scoll .suoyin .suoyinZ{
	width:100%;
	height: 40px;
	background: white;
	line-height: 40px;
	padding-left: 0.277777rem;
	font-size: 15px;
	box-sizing: border-box;
}
.celan .scoll .suoyin .suoyinZ:nth-child(5),
.celan .scoll .suoyin .suoyinZ:nth-child(8){
	border-bottom: 1px solid #ccc;
}
.celan .scoll .suoyin .suoyinZ{
		color: #333;
}
.celan .scoll .suoyin .suoyinZ span:nth-child(1){
	margin-right: 0.555555rem;
	font-size: 20px;
	vertical-align: bottom;
}

.celan .scoll .suoyin .no{
	color: #FF6666;
	background-color: #eee;
}

.celan .scoll-bottom{
	width: 6rem;
	height: 40px;
	background-color: white;
}
.celan .scoll-bottom{
	display: flex;
	justify-content: center;
	align-items: center;
}
.celan .scoll-bottom .scoll-bottom2{
	flex: 1;
	color: #333;
}
.celan .scoll-bottom .scoll-bottom2>span:nth-child(1){
	margin: 0 0.092592rem;
}
</style>
