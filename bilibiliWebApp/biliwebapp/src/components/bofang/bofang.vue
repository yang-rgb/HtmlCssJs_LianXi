<template>
	<div class="bofang">
		<div class="bofangtop">
			<div class="shi" v-pan="pan" v-panend="panend" @dblclick="auangzan"  ref="quanbing">
				<video ref="vi"  muted="muted" autoplay="autoplay"  style="object-fit: contain;" class="video" poster="../../assets/shipin/e3.png" >
					<source src="../../assets/shipin/1.mp4" type="video/mp4">
				</video>
				<div class="kongzhi">
					<div class="zanting" @click="zanbo" v-show="zantinbofan">
						<img v-if="shizan" src="../../assets/img/zanting.png" alt="">
						<img v-else src="../../assets/img/bofangba8.png" alt="">
					</div>
					<div class="jingdutiao" @click="jingtap" v-show="jiangzang" ref="jiabox">
							<div class="tiao" ref="tiaoshu"></div>
							<img class="huakuai" v-panstart="panstart" v-panmove="huapanmove" ref="huakuai" src="../../assets/img/04-bear.png" alt="">	
					</div>
					<div class="shijian" v-show="huadongyi">
						<span ref="xianshijian">00:00</span>
						<span>/</span>
						<span ref="zongshibu">00:00</span>
					</div>
					<div class="aunping clearfix"  v-show="quanbiangying">
						<img class="quan" @click="quanbingclick" src="../../assets/img/quanbing.png" alt="">
					</div>
					
				</div>
				<div class="shijiandong" v-show="dongxian">  
					<span ref="huadongshi">00:00</span>
					<span>/</span>
					<span ref="zongshi">{{zongshijian}}</span>
				</div>
				<div class="fanhiu" @click="fanhiu" ref="fanhiule">
					<img src="../../assets/img/zhixiangzuo.png" alt="">
				</div>
			</div>
			<div class="tabr">
				<div class="jian on" ref="jianjie" @click="clickon(0)">简介</div>
				<div class="pinglun" ref="pinglun" @click="clickon(1)">评论<span ref="plun2" class="pinglunshu">2561</span></div>
				<div class="dawai">
					<div class="danmu clearfix" ref="danmu">
						<span class="fat" v-show="isclick">点我发弹幕</span>
						<span class="tant" ref="tant" @click="dianclick">弹
							<i class="t" v-if="isclick"></i>
							<i class="t2" v-else></i>
						</span>
					</div>
				</div>
				
				<div class="bottomtab" ref="bottomtab"></div>
			</div>
		</div>
			<Scroll2 class="heigScr" @scroll="scrollshu" @scrollend="scrollend"  :lunbo="true" ref="scol">
		<div class="nong" ref="nong">	
			<div class="bofangcontent" ref="nong0">
				<div class="touxiang">
					<div class="touxiangtu">
						<img src="../../assets/img/2.jpg" alt="">
					</div>
					<div class="touxiang-content">
						<h1>大家的音乐姬</h1>
						<span>73.7万粉丝</span>
					</div>
					<div class="touxiang-right" @click="guanclick" ref="guanclick">
						<span v-if="guancl">+</span>
						<i class="cian" v-else></i>
						<span ref="con">关注</span>
					</div>
				</div>
				
				<div class="zhuti clearfix" @click="xiangjian">
					<p class="zhuti-p dfd" ref="zhutiP">怪异君致经典2】《神探狄仁杰》第五案 上篇v【怪异君致经典2】《神探狄仁杰》第一案【怪异君致经典2】《神探狄仁杰》第二案</p>
					<i class="jian" ref="jian" @click="xiangjian"></i>
				</div>

				<div class="content-ic" @click="xiangjian" ref="contentPcont">
					<span class="p3">134.3万</span>
					<span class="p4">2344</span>
					<span class="xiao">22小时前</span>
					<span class="av">AV122121</span>
					<div class="contentP" ref="contentP">
						aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
						aaaaaaaaaaaaaaa啊啊啊啊啊啊啊啊啊啊啊aaaa
						啊啊啊啊啊啊啊啊啊啊啊啊啊aaaaaaaaaaaaaaaa
						aaaaaaaaaaaaaaaaaaaaaaa
					</div>
				</div>
				
				<div class="fengxiang">
					<div >
						<i @click="yanclick(0)" class="iconfont icon-dianzan tu1"></i>
						<span>1.1万</span>
					</div>
					<div>
						<i @click="yanclick(1)" class="iconfont icon-zan-copy-copy tu1"></i>
						<span>不喜欢</span>
					</div>
					<div>
						<i @click="yanclick(2)" class="iconfont icon-bibi tu1"></i>
						<span>8304</span>
					</div>
					<div>
						<i @click="yanclick(3)" class="iconfont icon-shoucang tu1"></i>
						<span>5601</span>
					</div>
					<div>
						<i @click="yanclick(4)" class="iconfont icon-fenxiang tu1"></i>
						<span>4520</span>
					</div>
				</div>
				
				<div class="biaoti clearfix" ref="biaoti" >
					<div class="duo" @click="fanzhuanclick" v-show="fanzhuanxi">
						<span>更多<span class="shulian">{{fanshu}}</span>个</span>
						<i class="ico" ref="fanzhuan"></i>
					</div>
					<div class="biaocon" ref="biaocon">
						<span>海贼王</span>
						<span>海贼王</span>
						<span>日本电影</span>
						<span>电影杂谈</span>
						<span>电影杂谈</span>
						<span>海贼王</span>
						<span>海贼王</span>
						<span>海贼王</span>
						<span>日本电影</span>
						<span>电影杂谈</span>
						<span>海贼王</span>
						<span>海贼王</span>
						<span>日本电影</span>
						<span>电影杂谈</span>
						<span>海贼王</span>
						<span>海贼王</span>
						<span>日本电影</span>
						<span>电影杂谈</span>
					</div>
					
				</div>
				
				<div class="katu">
					<div class="ka">
						<div class="ka-left">
							<img src="../../assets/img/2.jpg" alt="">
						</div>
						<div class="ka-right">
							<div class="ka-right-top">
								【怪异君致经典2】《神探狄仁杰》第一案
								【怪异君致经典2】《神探狄仁杰》第一案
								【怪异君致经典2】《神探狄仁杰》第一案
								【怪异君致经典2】《神探狄仁杰》第一案
							</div>
							<div class="ka-right-bottom">
								<span class="ka1">怪异君致经典</span>
								<p class="ka-p">
									<span class="ka2">111.5万</span>
									<span class="ka3">1.5万</span>
									<i class="ka4"></i>
								</p>
							</div>
						</div>
					</div>
					
					<div class="ka">
						<div class="ka-left">
							<img src="../../assets/img/2.jpg" alt="">
						</div>
						<div class="ka-right">
							<div class="ka-right-top">
								【怪异君致经典2】《神探狄仁杰》第一案
								【怪异君致经典2】《神探狄仁杰》第一案
								【怪异君致经典2】《神探狄仁杰》第一案
								【怪异君致经典2】《神探狄仁杰》第一案
							</div>
							<div class="ka-right-bottom">
								<span class="ka1">怪异君致经典</span>
								<p class="ka-p">
									<span class="ka2">111.5万</span>
									<span class="ka3">1.5万</span>
									<i class="ka4"></i>
								</p>
							</div>
						</div>
					</div>
					
					<div class="ka">
						<div class="ka-left">
							<img src="../../assets/img/2.jpg" alt="">
						</div>
						<div class="ka-right">
							<div class="ka-right-top">
								【怪异君致经典2】《神探狄仁杰》第一案
								【怪异君致经典2】《神探狄仁杰》第一案
								【怪异君致经典2】《神探狄仁杰》第一案
								【怪异君致经典2】《神探狄仁杰》第一案
							</div>
							<div class="ka-right-bottom">
								<span class="ka1">怪异君致经典</span>
								<p class="ka-p">
									<span class="ka2">111.5万</span>
									<span class="ka3">1.5万</span>
									<i class="ka4"></i>
								</p>
							</div>
						</div>
					</div>
					
					<div class="ka">
						<div class="ka-left">
							<img src="../../assets/img/2.jpg" alt="">
						</div>
						<div class="ka-right">
							<div class="ka-right-top">
								【怪异君致经典2】《神探狄仁杰》第一案
								【怪异君致经典2】《神探狄仁杰》第一案
								【怪异君致经典2】《神探狄仁杰》第一案
								【怪异君致经典2】《神探狄仁杰》第一案
							</div>
							<div class="ka-right-bottom">
								<span class="ka1">怪异君致经典</span>
								<p class="ka-p">
									<span class="ka2">111.5万</span>
									<span class="ka3">1.5万</span>
									<i class="ka4"></i>
								</p>
							</div>
						</div>
					</div>
					<div class="ka">
						<div class="ka-left">
							<img src="../../assets/img/2.jpg" alt="">
						</div>
						<div class="ka-right">
							<div class="ka-right-top">
								【怪异君致经典2】《神探狄仁杰》第一案
								【怪异君致经典2】《神探狄仁杰》第一案
								【怪异君致经典2】《神探狄仁杰》第一案
								【怪异君致经典2】《神探狄仁杰》第一案
							</div>
							<div class="ka-right-bottom">
								<span class="ka1">怪异君致经典</span>
								<p class="ka-p">
									<span class="ka2">111.5万</span>
									<span class="ka3">1.5万</span>
									<i class="ka4"></i>
								</p>
							</div>
						</div>
					</div>
					<div class="ka">
						<div class="ka-left">
							<img src="../../assets/img/2.jpg" alt="">
						</div>
						<div class="ka-right">
							<div class="ka-right-top">
								【怪异君致经典2】《神探狄仁杰》第一案
								【怪异君致经典2】《神探狄仁杰》第一案
								【怪异君致经典2】《神探狄仁杰》第一案
								【怪异君致经典2】《神探狄仁杰》第一案
							</div>
							<div class="ka-right-bottom">
								<span class="ka1">怪异君致经典</span>
								<p class="ka-p">
									<span class="ka2">111.5万</span>
									<span class="ka3">1.5万</span>
									<i class="ka4"></i>
								</p>
							</div>
						</div>
					</div>
					<div class="ka">
						<div class="ka-left">
							<img src="../../assets/img/2.jpg" alt="">
						</div>
						<div class="ka-right">
							<div class="ka-right-top">
								【怪异君致经典2】《神探狄仁杰》第0案
								【怪异君致经典2】《神探狄仁杰》第0案
								【怪异君致经典2】《神探狄仁杰》第0案
								【怪异君致经典2】《神探狄仁杰》第0案
							</div>
							<div class="ka-right-bottom">
								<span class="ka1">怪异君致经典</span>
								<p class="ka-p">
									<span class="ka2">111.5万</span>
									<span class="ka3">1.5万</span>
									<i class="ka4"></i>
								</p>
							</div>
						</div>
					</div>
				
				</div>
				
				
			</div>
		
			
			<div class="pinglunjia" ref="nong1">
				<div class="pinglunjiamian">
					<div class="pinjie-top">
						<h1><span>{{anredudata?"热度":"时间"}}</span>评论</h1>
						<div class="an" @click="anredu">
							<i></i>
							按<span>{{anredudata?"热度":"时间"}}</span>
						</div>
					</div>
					<div class="pinjie-content">
						
						<div class="con1" v-for="(item,index) in pinlun" :key="index">
							<div class="con1-left">
								<img src="../../assets/img/2.jpg" alt="">
							</div>
							<div class="con1-right">
								<div class="right-top clearfix">
									<span class="upstle">UP</span>
									<span>文西与阿漆</span>
									<i class="dengji"></i>
									<span class="pinguan" ref="pain" @click="huiguanclick(index)">+&nbsp;关注</span>
								</div>
								<p class="shijian3"  @click="bianse(index)">3小时前</p>
								<div class="cond">
									<div class="contentzhi"  @click="bianse(index)">
										<label for="bang">
										<p ref="tip" class="tip" >																		<span v-if="item.zhi" class="zhiding">置顶</span>{{item.cont}}
										</p>
										</label>
									</div>
									<div class="toop">
										<div class="toop1" @click="too1(0,index)">
											<i class="toop1zi iconfont icon-dianzan"></i>
											<span>{{tanArr[0]}}</span>
										</div>
										<div class="toop2" @click="too1(1,index)">
											<i class="toop1zi iconfont icon-zan-copy-copy"></i>
											<span>{{tanArr[1]}}</span>
										</div>
										<div class="toop3" @click="too1(2,index)">
											<i class="toop1zi iconfont icon-fenxiang"></i>
											<span>{{tanArr[2]}}</span>
										</div>
										<div class="toop4">
											<i class="t4"></i>
										</div>
									</div>
								</div>
							
								<div class="hiufu" v-if="item.huifu">
									<div class="huifu1" >
										<span class="huifuyong">{{item.yonghu}}</span>:
										<p class="huifucont">{{item.huifu}}</p>
									</div>
									
									<p class="shuliang">
										共<span>8</span>条回复&nbsp;>
									</p>
								</div>
							</div>
						</div>
						
						<!-- <div class="con1">
							<div class="con1-left">
								<img src="../../assets/img/2.jpg" alt="">
							</div>
							<div class="con1-right">
								<div class="right-top clearfix">
									<span class="upstle">UP</span>
									<span>文西与阿漆</span>
									<i class="dengji"></i>
									<span class="pinguan" ref="pain" @click="huiguanclick(1)">+&nbsp;关注</span>
								</div>
								<p class="shijian3">3小时前</p>
								<div class="cond">
									<div class="contentzhi">
										<span class="zhiding">置顶</span>
										怪异君致经典2】《神探狄仁杰》第五案 上篇v
										【怪异君致经典2】《神探狄仁杰》第一案【怪异君致经典2】
										《神探狄仁杰》第二案
										
									</div>
									<div class="toop">
										<div class="toop1" @click="too1(0)">
											<i class="toop1zi iconfont icon-dianzan"></i>
											<span>3055</span>
										</div>
										<div class="toop2" @click="too1(1)">
											<i class="toop1zi iconfont icon-zan-copy-copy"></i>
											<span>35</span>
										</div>
										<div class="toop3" @click="too1(2)">
											<i class="toop1zi iconfont icon-fenxiang"></i>
											<span>54</span>
										</div>
										<div class="toop4">
											<i class="t4"></i>
										</div>
									</div>
								</div>
							
								<div class="hiufu">
									<div class="huifu1">
										<span class="huifuyong">灰暗的蜗牛</span>:
										<p class="huifucont">灰暗的蜗牛回复灰暗的
										蜗牛回复灰暗的蜗牛回复
										灰暗的蜗牛回复灰暗的蜗牛回复
										灰暗的蜗牛回复灰暗的蜗牛回复
										灰暗的蜗牛回复灰暗的蜗牛回复</p>
									</div>
									<div class="huifu1">
										<span class="huifuyong">灰暗的蜗牛</span>:
										<p class="huifucont">灰暗的蜗牛回复灰暗的
										蜗牛回复灰暗的蜗牛回复
										灰暗的蜗牛回复灰暗的蜗牛回复</p>
									</div>
									<div class="huifu1">
										<span class="huifuyong">灰暗的蜗牛</span>:
										<p class="huifucont">灰暗的蜗牛回复灰暗的
										蜗牛回复灰暗的蜗牛回复
										灰暗的蜗牛回复灰暗的蜗牛回复</p>
									</div>
									<p class="shuliang">
										共<span>8</span>条回复&nbsp;>
									</p>
								</div>
							</div>
						</div> -->
						
					</div>
				</div>
			</div>
	
		</div>
		</Scroll2>
		
		<div class="pingluntiao" ref="pingluntiao" v-show="wenbenoon">
			<div class="shuru">
				<textarea  name="" id="bang" ref="wenben" @input="gaodu" class="wenben" placeholder="发个友善的评论"></textarea>
			</div>
			<div class="tubiao" @click="biaoxian">
				<img src="../../assets/img/xiaolian.png" alt="">
			</div>
			<span class="fabu" @click="fabuclick">发布</span>
			<div class="biaoqing" ref="biaoqing" v-show="biaoqingt">
				<span @click="biaoqing(0)">😀</span>
				<span @click="biaoqing(1)">😁</span>
				<span @click="biaoqing(2)">😂</span>
				<span @click="biaoqing(3)">😃</span>
				<span @click="biaoqing(4)">😎</span>
			</div>
		</div>
	</div>
</template>

<script>

	export default{
		name:"bofang",
		components:{
			
		},
		data(){
			return{
				pinlun:[
					{cont:"怪异君致经典2】《神探狄仁杰》第五案 上篇【怪异君致经典2】《神探狄仁杰》第一案【怪异君致经典2】《神探狄仁杰》第二案",
					id:1,
					yonghu:"灰暗的蜗牛",
					zhi:1,
					huifu:"蜗牛回复灰暗的蜗牛回复灰暗的蜗牛回复灰暗的蜗牛回复灰暗的蜗牛回复灰暗的蜗牛回复灰暗的蜗牛回复灰暗的蜗牛回复"
					},
					{cont:"怪异君致经典2】《神探狄仁杰》第五案 上篇【怪异君致经典2】《神探狄仁杰》第一案【怪异君致经典2】《神探狄仁杰》第二案",
					id:2
					}
					
					
				],
				isclick:false,
				iscishu:true,
				iscishufan:true,
				dianzan:false,
				guancl:true,
				fanzhuan:false,
				fanzhuanxi:false,
				fanshu:1,
				windowinnerW:0,
				anredudata:true,
				pinguan:true,
				too1xian:false,
				tiao:"",
				wenbenoon:false,
				vastr:"",
				tanArr:[3055,35,52],
				arrse:[true,true,true,true,true],
				arrse2:[true,true,true],
				id:2,
				biaoqingt:false,
				shizan:true,
				zongshijian:"00:00",
				aongshjianshu:"",
				xianzaishijianshu:"",
				dong:"",
				dongxian:false,
				huakuaidian:0,
				huaju:0,
				dianju:"",
				quanbiangying:true,
				boxwidth:"",
				jiangzang:true,
				tiaofan:true,
				timer:'',
				screenH:"",
				screenW:"",
				zantinbofan:true,
				huadongyi:true,
				huadongxiaoshi:false
			}
		},
		computed:{
			jiandu(){
				return (this.dianju*this.aongshjianshu)/(this.$refs.jiabox.offsetWidth-30)
			}
		},
		mounted(){
			
			this.screenH=window.screen.height;
			this.screenW=window.screen.width;
			
			for(var i=0;i<this.$refs.biaocon.children.length;i++){
				if(this.$refs.biaocon.children[i].offsetTop>10){
					this.fanzhuanxi=true;
					this.fanshu++
				}else{
					this.fanzhuanxi=false
				}
				
			}
			function num(num){
				var num1=Math.floor(num/60)
				var num2=Math.floor(num%60)
				num1=num1>9? num1:'0'+num1;
				num2=num2>9? num2:'0'+num2;
				return num1+":"+num2
			}
			this.$refs.vi.ondurationchange=()=>{
					this.zongshijian=num(this.$refs.vi.duration)
					this.$refs.zongshibu.innerText=this.zongshijian;
					this.aongshjianshu=this.$refs.vi.duration
				
			} 
		
			this.boxwidth=this.$refs.jiabox.offsetWidth;
			if(this.timer!=" ") clearInterval(this.timer)
			this.timer=setInterval(jingdu.bind(this),1000)
			function jingdu(){
				this.xianzaishijianshu=this.$refs.vi.currentTime;
				var cha=this.$refs.vi.currentTime/this.aongshjianshu;
				this.$refs.tiaoshu.style.width=(cha*this.boxwidth)/this.windowinnerW+"rem";
				this.$refs.xianshijian.innerText=num(this.$refs.vi.currentTime)
				this.$refs.huakuai.style.left=(cha*(this.boxwidth-20))/this.windowinnerW+"rem"
			
				if(this.$refs.vi.ended){
					clearInterval(this.timer)
				}
			}
			window.addEventListener("orientationchange",()=>{
				if(window.orientation==90|| window.orientation==-90){
					this.jiangzang=false;
					this.quanbiangying=false;
				}
				if(window.orientation===180|| window.orientation===0){
					this.tiaofan=true;
				}
				
			})
			
				
			
			this.windowinnerW=window.innerWidth/10>=54?54:window.innerWidth/10;
		
			this.$refs.bottomtab.style.width=(this.$refs.jianjie.offsetWidth+10)/this.windowinnerW+"rem"
			
		
			this.$refs.bottomtab.style.left=((this.$refs.jianjie.offsetLeft-4)/this.windowinnerW)+"rem";
			
		},
		methods:{
			dianclick(){
				if(this.iscishu){
					this.isclick=true;
					this.$refs.danmu.style.width="2.962962rem";
					this.$refs.tant.style.backgroundColor="#fff";
					this.iscishu=false;
				}else if(!this.iscishu){
					this.isclick=false;
					this.$refs.danmu.style.width="0.74074rem";
					this.$refs.tant.style.backgroundColor="#E0E0E0";
					this.iscishu=true;
				}
				
			},
			xiangjian(){
				if(this.iscishufan){
					this.$refs.zhutiP.classList.remove("zhuti-p")
					this.$refs.zhutiP.classList.add("zhuti-p2")
					
					this.$refs.contentPcont.style.height=(0.74074+((this.$refs.contentP.offsetHeight+10)/54))+"rem"; 
					
					this.$refs.jian.style.transform="rotate(180deg)";
					this.iscishufan=false;
					
					this.$refs.scol.scroll.refresh()
				}else{
					this.$refs.zhutiP.classList.remove("zhuti-p2")
					this.$refs.zhutiP.classList.add("zhuti-p")
					
					this.$refs.contentPcont.style.height="0.555555rem";
					
					this.$refs.jian.style.transform="rotate(0deg)";
					this.iscishufan=true;
					this.$refs.scol.scroll.refresh()
				}
	
			},
			yanclick(index){
				switch (index) {
					case 0:
						if(this.arrse[index]){
							document.querySelectorAll(".tu1")[index].style.color="#ff6666";
						}else{
							document.querySelectorAll(".tu1")[index].style.color="";
						}
						this.arrse[index]=!this.arrse[index];
						break;
					case 1:
						if(this.arrse[index]){
							document.querySelectorAll(".tu1")[index].style.color="#ff6666";
						}else{
							document.querySelectorAll(".tu1")[index].style.color="";
						}
						this.arrse[index]=!this.arrse[index];
						break;
					case 2:
						if(this.arrse[index]){
							document.querySelectorAll(".tu1")[index].style.color="#ff6666";
						}else{
							document.querySelectorAll(".tu1")[index].style.color="";
						}
						this.arrse[index]=!this.arrse[index];
						break;
					case 3:
						if(this.arrse[index]){
							document.querySelectorAll(".tu1")[index].style.color="#ff6666";
						}else{
							document.querySelectorAll(".tu1")[index].style.color="";
						}
						this.arrse[index]=!this.arrse[index];
						break;
					case 4:
						if(this.arrse[index]){
							document.querySelectorAll(".tu1")[index].style.color="#ff6666";
						}else{
							document.querySelectorAll(".tu1")[index].style.color="";
						}
						this.arrse[index]=!this.arrse[index];
						break;
					
				}
		
			},
			guanclick(){
				this.guancl=!this.guancl;
				if(!this.guancl){
					this.$refs.guanclick.style.color="#999"
					this.$refs.guanclick.style.backgroundColor="#ccc"
					this.$refs.con.innerText="已关注"
				}else{
					this.$refs.guanclick.style.color="#fff"
					this.$refs.guanclick.style.backgroundColor="#ff6666"
					this.$refs.con.innerText="关注"
					
				}
			},
			fanzhuanclick(){
				this.fanzhuan=!this.fanzhuan;
				if(this.fanzhuan){
					this.$refs.fanzhuan.style.transform="rotate(180deg)";
					this.$refs.biaoti.style.maxHeight="none"
					this.$refs.scol.scroll.refresh()
				}else{
					this.$refs.fanzhuan.style.transform="rotate(0deg)";
					this.$refs.biaoti.style.maxHeight="0.925925rem"
				}
				
			},
			clickon(index){
				switch (index) {
					case 0:
						this.$refs.pinglun.classList.remove("on")
						this.$refs.jianjie.classList.add("on")
						this.$refs.plun2.classList.remove("on")
						this.wenbenoon=false;
						this.$refs.scol.scroll.prev();
						
						this.$refs.bottomtab.style.left=((this.$refs.jianjie.offsetLeft-4)/this.windowinnerW)+"rem";
						this.$refs.bottomtab.style.width=(this.$refs.jianjie.offsetWidth+10)/this.windowinnerW+"rem"
						
						break;
					case 1:
						this.$refs.plun2.classList.add("on")
						this.$refs.pinglun.classList.add("on")
						this.$refs.jianjie.classList.remove("on")
						this.wenbenoon=true;
						this.$refs.scol.scroll.next();
					
						this.$refs.bottomtab.style.left=((this.$refs.pinglun.offsetLeft-4)/this.windowinnerW)+"rem";
						this.$refs.bottomtab.style.width=(this.$refs.pinglun.offsetWidth+10)/this.windowinnerW+"rem"
						
						break;
				}
			},
			scrollshu(posit){
				
				
				this.$refs.bottomtab.style.left=((this.$refs.jianjie.offsetLeft-4+this.tiao)/this.windowinnerW)+"rem";
				if(this.$refs.scol.scroll.getCurrentPage().pageX==0){
					this.$refs.pinglun.classList.remove("on")
					this.$refs.jianjie.classList.add("on")
					this.$refs.plun2.classList.remove("on")
					this.wenbenoon=false;
					this.$refs.bottomtab.style.width=(this.$refs.jianjie.offsetWidth+10)/this.windowinnerW+"rem"
					
				}else{
					this.$refs.bottomtab.style.width=(this.$refs.pinglun.offsetWidth+10)/this.windowinnerW+"rem"
					this.$refs.plun2.classList.add("on")
					this.$refs.pinglun.classList.add("on")
					this.$refs.jianjie.classList.remove("on")
					this.wenbenoon=true;
					
				}
				this.tiao=-((posit.x/(this.windowinnerW*10)).toFixed(1))*126/(540/(this.windowinnerW*10))
				
			},
			scrollend(e){
				if(this.$refs.scol.scroll.getCurrentPage().pageX==0){
					this.$refs.nong.style.height=this.$refs.nong0.offsetHeight+"px";
					this.$refs.scol.scroll.refresh()
				}else{
					this.$refs.nong.style.height=this.$refs.nong1.offsetHeight+"px";
					this.$refs.scol.scroll.refresh()
				}
			},
			anredu(){
				this.anredudata=!this.anredudata;
			},
			huiguanclick(index){
				this.pinguan=!this.pinguan;
				if(!this.pinguan){
					document.querySelectorAll(".pinguan")[index].style.color="#999"
					document.querySelectorAll(".pinguan")[index].innerText="已关注"
				}else{
					document.querySelectorAll(".pinguan")[index].innerText="+ 关注"
					document.querySelectorAll(".pinguan")[index].style.color="#ff6666"
				}
			},
			too1(index,ji){
				var con1=document.querySelectorAll(".con1")
				switch (index) {
					case 0:
						con1[ji].querySelectorAll(".toop1zi")[index].classList.toggle("redse");
						if(con1[ji].querySelectorAll(".toop1zi")[index].classList.contains("redse")){
							this.tanArr[0]++;
							this.$set(this.tanArr,0,this.tanArr[0]++)
						
						}else{
							this.tanArr[0]--;
							this.$set(this.tanArr,0,this.tanArr[0]--)
						}
						break;
					case 1:
						con1[ji].querySelectorAll(".toop1zi")[index].classList.toggle("redse")
						break;
					case 2:
						con1[ji].querySelectorAll(".toop1zi")[index].classList.toggle("redse")
						break;
					
				}
	
			},
			bianse(index){
				document.querySelectorAll(".con1")[index].classList.add("onse")
			},
			gaodu(){
				if(this.$refs.wenben.value==" "){
					return ;
				}
				this.vastr=this.$refs.wenben.value
				
				this.vastr=this.vastr.replace(/\n/g,'<br/>')
				
				if(this.$refs.wenben.scrollTop>100){
					this.$refs.wenben.style.height=100+"px";
				}else if(this.$refs.wenben.scrollTop<=100){
					this.$refs.wenben.style.height=this.$refs.wenben.scrollTop+50+"px";
				}
				
			},
			fabuclick(){
				this.$refs.wenben.style.height="0.925925rem";
				this.$refs.pingluntiao.style.bottom="0";
				this.$refs.scol.scroll.refresh()
				this.biaoqingt=false;
				if(this.$refs.wenben.value==""){
					return ;
				}else{
					this.id+=1;
					this.pinlun.push({cont:this.vastr,id:this.id})
				}
				this.$refs.wenben.value=" ";
				this.$nextTick(function () {
				       
				   var newstr=document.querySelectorAll(".tip")[document.querySelectorAll(".tip").length-1].innerText;
				   document.querySelectorAll(".tip")[document.querySelectorAll(".tip").length-1].innerHTML=newstr.replace(/@/g,'<br/>');
					this.$refs.scol.scroll.refresh()
	
					
				    })
					
			
				 
			},
			biaoqing(index){
				this.$refs.wenben.value+=this.$refs.biaoqing.children[index].innerText
				this.vastr=this.$refs.wenben.value;
				this.$refs.wenben.focus();
			},
			biaoxian(){
				this.$refs.wenben.focus();
				this.biaoqingt=!this.biaoqingt?true:false;
			},
			quanbingclick(){
				this.quanbiangying=false;
				this.tiaofan=false;
				this.$refs.quanbing.webkitRequestFullScreen();
				this.$refs.vi.style.width=(this.screenH/this.windowinnerW)+"rem";
				this.$refs.vi.style.transform="rotate(90deg)"
				this.jiangzang=false;
				this.zantinbofan=false;
				this.huadongxiaoshi=true;
				this.huadongyi=false;
				this.$refs.fanhiule.style.transform="rotate(90deg)"
				this.$refs.fanhiule.style.left=((this.screenW-20)/this.windowinnerW)+"rem"
				
			},
			zanbo(){
				this.shizan=!this.shizan;
				if(this.shizan){
					this.$refs.vi.play();
					this.$refs.zongshi.innerText=this.zongshijian;
					
				}else{
					this.$refs.vi.pause();
				}
				
			},
			auangzan(){
				if(this.$refs.vi.paused){
					this.shizan=true;
					this.$refs.vi.play();
					
				}else{
					this.shizan=false;
					this.$refs.vi.pause();
				}
			},
			fanhiu(){
				if(this.tiaofan){
					this.$router.back();
					clearInterval(this.timer)
				}else{
					if(document.webkitCancelFullScreen){
						document.webkitCancelFullScreen()
					}else if(document.exitFullscreen){
						document.exitFullscreen();
					}
					this.jiangzang=true;
					this.quanbiangying=true;
					this.tiaofan=true;
					this.zantinbofan=true;
					this.huadongxiaoshi=false;
					this.huadongyi=true;
					this.$refs.vi.style="none"
					this.quanbiangying=true;
					this.$refs.fanhiule.style="none"
				}
				
				
				
			},
			pan(s){
				if(this.huadongxiaoshi){return;}
				this.dongxian=true;
				if(s.deltaX<0){
					this.dong=this.$refs.vi.currentTime-(Math.abs(s.deltaX)*60)/(this.windowinnerW*10)
					if(this.dong>0){
						this.$refs.huadongshi.innerText=this.num(this.dong)
					}
				}else if(s.deltaX>0){
					this.dong=this.$refs.vi.currentTime+(Math.abs(s.deltaX)*60)/(this.windowinnerW*10)
					if(this.dong<this.aongshjianshu){
						this.$refs.huadongshi.innerText=this.num(this.dong)
					}
				}
			},
			panend(s){
				if(!this.huadongxiaoshi){
					this.$refs.vi.currentTime=this.dong;
				}
				this.dongxian=false;
				
			},
			huapanmove(s){
				this.huaju=this.huakuaidian+s.deltaX;
				if(this.huaju<0){
					this.huaju=20;
				}else if(this.huaju>this.$refs.jiabox.offsetWidth){
					this.huaju=this.$refs.jiabox.offsetWidth
				}
				
				this.$refs.tiaoshu.style.width=(this.huaju)/this.windowinnerW+"rem"
				this.$refs.huakuai.style.left=(this.huaju-20)/this.windowinnerW+"rem"
				this.$refs.vi.currentTime=this.xianzaishijianshu+((s.deltaX*this.aongshjianshu)/this.$refs.jiabox.offsetWidth);
				this.$refs.xianshijian.innerText=this.num(this.$refs.vi.currentTime)
			},
			panstart(){
				this.huakuaidian=this.$refs.huakuai.offsetLeft
			},
			jingtap(e){
				this.$refs.huakuai.style.left=this.rem(e.pageX-this.$refs.jiabox.offsetLeft-(document.documentElement.clientWidth-(this.windowinnerW*10))/2)+"rem"
				
				this.$refs.tiaoshu.style.width=this.rem(e.pageX-this.$refs.jiabox.offsetLeft-(document.documentElement.clientWidth-(this.windowinnerW*10))/2)+"rem"
				this.dianju=e.pageX-this.$refs.jiabox.offsetLeft-(document.documentElement.clientWidth-(this.windowinnerW*10))/2;
				
				this.$refs.vi.currentTime=this.jiandu;
				
			},
			num(num){
				var num1=Math.floor(num/60)
				var num2=Math.floor(num%60)
				num1=num1>9? num1:'0'+num1;
				num2=num2>9? num2:'0'+num2  
				return num1+":"+num2
			},
			rem(num){
				return num/this.windowinnerW;
			}
			
			
			
			
		}
	}
</script>

<style scoped="scoped">
@import url("../../assets/img/tu/iconfont.css");
.redse{
	color: #ff6666;
}
.pingluntiao{
	width: 100%;

	background: #fff;
	box-shadow: 0 -1px 3px #ccc;
	padding: 0.185185rem 0.37037rem;
	box-sizing: border-box;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	
	position: fixed;
	bottom: 0;
	left: 0;
}
.biaoqing{
	position: absolute;
	top: -20px;
	left: 50px;
}
.biaoqing>span{
	font-size: 20px;
}
.pingluntiao .shuru{
	width: 7.407407rem;

}
.pingluntiao .fabu{
	margin-left: 0.37037rem;
	color: #FF6666;
}
.pingluntiao .shuru .wenben{
	width: 7.407407rem;
	height: 0.925925rem;
	resize: none;
	padding: 0.37037rem 0.37037rem;
	box-sizing: border-box;
	overflow-y: scroll;
	outline: 0;
	border: 0;
	background: #eee;
	border-radius: 0.37037rem;
}
.pingluntiao .shuru .wenben::-webkit-scrollbar{ 
        width:0px;
        height: 0px;
        background-color: #ffff;
    } 
	
.pingluntiao .tubiao{
	width: 0.555555rem;
	width: 0.555555rem;
	margin-top: 0.092592rem;
	margin-left: 0.185185rem;
}
.pingluntiao .tubiao>img{
	width: 100%;
	width: 100%;
}

.onse{
	animation: bianse 2s ease-in-out;
}
@keyframes bianse{
	0%{ 
		background-color: rgba(189,189,189,1);
	}
	50%{
		background-color: rgba(189,189,189,0.5);
	}
	100%{
		background-color: rgba(189,189,189,0);
	}
}

.heigScr{
	height: calc(100vh - 6.629629rem);
	overflow: hidden;
}
.nong{
	width: 200%;
	position: relative;
}

.bofang{
	position: absolute;
	top: 0;
	left: 50%;
	margin-left: -5rem;
	z-index: 100;
	width: 10rem;
	height: 100%;
	background: #EEEEEE;
	touch-action: none;
	height: 1050px;
}
.bofangtop{
	width: 100%;
	
}
.bofangtop .shi{
	width: 100%;
	height: 5.7rem;
	display: flex;
	justify-content: center;
	background: #000;
	position: relative;
}
.bofangtop .shi .fanhiu{
	width: 0.555555rem;
	height: 0.555555rem;
	position: absolute;
	top: 0;
	left: 0;
}
.bofangtop .shi .fanhiu>img{
	width: 100%;
	height: 100%;
}
.bofangtop .shi .video{
	width: 100%;
	height: 100%;
}
.bofangtop .shi .shijiandong{
	position: absolute;
	top: 50%;
	color: white;
}

.bofangtop .shi .kongzhi{
	width: 100%;
	height: 0.925925rem;
	position: absolute;
	left: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	padding: 0 0.185185rem;
	box-sizing: border-box;
}
@media screen and (orientation:landscape) {
	.bofangtop .shi .kongzhi{
		width: 100%;
		height: 0.925925rem;
		position: absolute;
		left: 0;
		bottom: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 0.185185rem;
		box-sizing: border-box;
	}
}
.bofangtop .shi .kongzhi img{
	width: 0.555555rem;
	height: 0.555555rem;
}
.bofangtop .shi  .kongzhi .zanting{
	width: 0.555555rem;
	height: 0.555555rem;
	margin-right: 0.092592rem;
}
.bofangtop .shi  .kongzhi .jingdutiao{
	width: 70%;
	height: 0.092592rem;
	border-radius: 0.092592rem;
	margin-right: 0.092592rem;
	background: #ccc;
	position: relative;
}


.bofangtop .shi  .kongzhi .quan{
	line-height: 0.555555rem;
}
.bofangtop .shi  .kongzhi .jingdutiao .huakuai{
	background: white;
	border-radius: 0.092592rem;
}
.bofangtop .shi  .kongzhi .jingdutiao .huakuai{
	position: absolute;
	left: 0;
	top: -0.185185rem;
}
.bofangtop .shi  .kongzhi .jingdutiao .tiao{
	width: 0;
	height: 0.092592rem;
	background: #FF6666;	
}
.bofangtop .shi .kongzhi .shijian>span{
	color: white;
}

.bofangtop .tabr{
	width: 100%;
	background: white;
	height: 0.907407rem;
	display: flex;
	justify-content: space-around;
	align-items: center;
	font-size: 0.259259rem;
	position: relative;
}
.bofangtop .tabr .pinglunshu{
	font-size: 12px;
	color: #ccc;
	margin-left: 0.037037rem;
	display: inline-block;
	transform: scale(0.85);
}
.bofangtop .tabr .on{
	color: #FF6666;
}
.bofangtop .tabr .bottomtab{
	height: 0.092592rem;
	position: absolute;
	left: 0.74074rem;
	bottom: 0;
	background-color: #FF6666;
	transition: left 0.3s, width 0.3s;
}
.bofangtop .tabr .dawai{
	width: 2.962962rem;
	height: 0.74074rem;
}
.bofangtop .tabr .danmu{
	width: 0.74074rem;
	height: 0.74074rem;
	background-color: #E0E0E0;
	border-radius: 0.74074rem;
	line-height: 0.74074rem;
	border: 0.018518rem #aaa solid;
	overflow: hidden;
	transition: all 0.3s;
	float: right;
	color: #666;
}
.bofangtop .tabr .danmu .fat{
	float: left;
	margin-left: 0.185185rem;
}
.bofangtop .tabr .danmu .tant{
	float: right;
	width: 0.74074rem;
	height: 100%;
	text-align: center;
	background-color: #E0E0E0;
	border-left: 0.018518rem #ccc solid;
	position: relative;
	transition: all 0.3s;
}
.bofangtop .tabr .danmu .tant .t{
	display: inline-block;
	position: absolute;
	right: 0.129629rem;
	bottom: 0.074074rem;
	width: 0.37037rem;
	height: 0.37037rem;
	background: url(../../assets/img/duiGou.png) no-repeat;
	background-size: cover;
}

.bofangtop .tabr .danmu .tant .t2{
	display: inline-block;
	position: absolute;
	right: 0.24074rem;
	bottom: 0.148148rem;
	width: 0.185185rem;
	height: 0.185185rem;
	background: url(../../assets/img/shixiao.png) no-repeat;
	background-size: cover;
}
.bofangcontent{
	background: #eee;
	width: 10rem;
}
.bofangcontent .touxiang{
	width: 100%;
	height: 1.111111rem;
	display: flex;
	align-items: center;
	padding: 0 0.185185rem;
	box-sizing: border-box;
}
.bofangcontent .touxiang .touxiang-content>h1{
	font-size: 0.277777rem;
	margin-bottom: 0.092592rem;
	color: #FF6666;
}
.bofangcontent .touxiang .touxiang-content>span{
	color: #999;
}
.bofangcontent .touxiang .touxiangtu{
	width: 0.74074rem;
	height: 0.74074rem;
	border-radius: 50%;
	overflow: hidden;
	margin-right: 0.185185rem;
}
.bofangcontent .touxiang .touxiangtu>img{
	width: 100%;
	height: 100%;
}
.bofangcontent .touxiang .touxiang-right{
	margin-left: auto;
	display: inline-block;
	padding:0 0.185185rem;
	height: 0.462962rem;
	background-color: #FF6666;
	text-align: center;
	line-height: 0.462962rem;
	color: white;
	border-radius: 0.092592rem;
	font-size: 0.222222rem;
}
.bofangcontent .touxiang .touxiang-right .cian{
	display: inline-block;
	width: 10px;
	height: 10px;
	background: url(../../assets/img/sanheng2.png) no-repeat;
	background-size: cover;
	margin-right: 5px;
}
.bofangcontent .touxiang .touxiang-right span{
	margin-right: 0.092592rem;
}
.bofangcontent .zhuti{
	padding: 0 0.185185rem;
	box-sizing: border-box;
}
.bofangcontent .zhuti .zhuti-p{
	font-size: 0.277777rem;
	width: 9.259259rem;
	line-height: 0.37037rem;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	max-height: 0.37037rem;
	display: inline-block;
	
}
.zhuti-p2{
	font-size: 0.277777rem;
	width: 9.259259rem;
	line-height: 0.37037rem;
	display: inline-block;
}
.bofangcontent .zhuti .jian{
	display: inline-block;
	width: 0.37037rem;
	height: 0.37037rem;
	background: url(../../assets/img/jiantou.png) no-repeat;
	background-size: cover;
	float: right;
}
.bofangcontent .content-ic{
	width: 100%;
	height: 0.555555rem;
	vertical-align: middle;
	display: inline-block;
	line-height: 0.648148rem;
	padding: 0 0.185185rem;
	box-sizing: border-box;
	color: #666;
	overflow: hidden;
	transition: height 0.3s;
	margin-bottom: 0.277777rem;
}
.bofangcontent .content-ic .p3,
.bofangcontent .content-ic .p4{
	margin-right: 0.185185rem;
}

.bofangcontent .content-ic .p3:before{
	content: "";
	display: inline-block;
	width: 0.37037rem;
	height: 0.37037rem;
	background: url(../../assets/img/bofang.png) no-repeat;
	background-size: cover;
	margin-right: 0.092592rem;
	vertical-align: middle;
	margin-bottom: 0.037037rem;
}
.bofangcontent .content-ic .p4:before{
	content: "";
	display: inline-block;
	width: 0.24074rem;
	height: 0.24074rem;
	background: url(../../assets/img/pinglun.png) no-repeat;
	background-size: cover;
	vertical-align: middle;
	margin-right: 0.092592rem;
}
.bofangcontent .content-ic .xiao{
	margin-right: 0.185185rem;
}
.bofangcontent .content-ic .contentP{
	line-height: 0.296296rem;
	word-break: break-all;
}
.bofangcontent .fengxiang{
	padding: 0 0.185185rem;
	box-sizing: border-box;
	width: 100%;
	height: 1.296296rem;
	display: flex;
	align-items: center;
	justify-content: space-around;
	border-bottom: 0.018518rem #ccc solid;
}
.bofangcontent .fengxiang>div{
	display: flex;
	flex-direction: column;
}
.bofangcontent .fengxiang>div>i{
	font-size: 24px;
	margin-bottom: 0.185185rem;
}

.bofangcontent .biaoti{
	padding: 0 0.185185rem;
	box-sizing: border-box; 
	max-height: 0.925925rem; 
	overflow: hidden;
}
.bofangcontent .biaoti .biaocon{
	display: flex;
	flex-wrap: wrap;
	position: relative;
}
.bofangcontent .biaoti .biaocon>span{
	display: inline-block;
	padding: 0.185185rem 0.185185rem;
	background-color: #ccc;
	margin-right: 0.185185rem;
	border-radius: 0.37037rem;
	margin-top: 0.185185rem;
}
.bofangcontent .biaoti .duo{
	float: right;
	margin-top: 0.185185rem;
	width: 80px;
	height: 0.74074rem;

	padding: 0 0.185185rem;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #666;
}
.bofangcontent .biaoti .duo .ico{
	display: inline-block;
	width: 0.37037rem;
	height: 0.37037rem;
	background: url(../../assets/img/jiantou.png) no-repeat;
	background-size: cover;
	margin-left: 0.092592rem;
}

.bofangcontent .katu{
	margin-top: 0.37037rem;
	padding: 0 0.185185rem;
	padding-bottom: 0.37037rem;
}
.bofangcontent .katu .ka{
	width: 100%;
	height: 1.851851rem;
	display: flex;
	margin-bottom: 0.185185rem;
}
.bofangcontent .katu .ka-left{
	width: 2.962962rem;
	height: 1.851851rem;
	border-radius: 0.092592rem;
	overflow: hidden;
	margin-right: 0.185185rem;
}
.bofangcontent .katu .ka-left>img{
	width: 100%;
	height: 100%;
}
.bofangcontent .katu .ka-right{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.bofangcontent .katu .ka-right .ka-right-top{
	height: 0.74074rem;
	width: 6.481481rem;
	overflow: hidden;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	display: -webkit-box;
	line-height: 15px;
}

.bofangcontent .katu .ka-right .ka-right-bottom{
	height: 0.888888rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.bofangcontent .katu .ka-right .ka-right-bottom .ka-p{
	display: flex;
	justify-content: space-between;
}
.bofangcontent .katu .ka-right .ka-right-bottom .ka1:before{
	content: "";
	display: inline-block;
	width: 0.37037rem;
	height: 0.37037rem;
	background: url(../../assets/img/UPzhu.png) no-repeat;
	background-size: cover;
	vertical-align: middle;
	margin-right: 0.092592rem;
}

.bofangcontent .katu .ka-right .ka-right-bottom .ka2:before{
	content: "";
	display: inline-block;
	width: 0.37037rem;
	height: 0.37037rem;
	background: url(../../assets/img/bofang.png) no-repeat;
	background-size: cover;
	vertical-align: middle;
	margin-right: 0.092592rem;
	margin-bottom: 0.037037rem;
}
.bofangcontent .katu .ka-right .ka-right-bottom .ka3:before{
	content: "";
	display: inline-block;
    width: 0.296296rem;
    height: 0.259259rem;
	background: url(../../assets/img/pinglun.png) no-repeat;
	background-size: cover;
	vertical-align: middle;
	margin-right: 0.092592rem;
}
.bofangcontent .katu .ka-right .ka-right-bottom .ka4{
	display: inline-block;
	width: 0.37037rem;
	height: 0.37037rem;
	background: url(../../assets/img/sandia.png) no-repeat;
	background-size: cover;
	vertical-align: middle;
}

.pinglunjia{
	position: absolute;
	top: 0;
	left: 10rem;
	width: 10rem;
	padding-bottom: 0.925925rem;
}
.pinglunjia .pinglunjiamian{
	padding: 0.185185rem 0.185185rem 0.185185rem 0.185185rem;
	box-sizing: border-box;
	
}
.pinglunjia .pinglunjiamian .pinjie-top{
	width: 100%;
	height: 0.555555rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.pinglunjia .pinglunjiamian .pinjie-top .an{
	color: #888;
}
.pinglunjia .pinglunjiamian .pinjie-top .an>i{
	display: inline-block;
	width: 0.277777rem;
	height: 0.277777rem;
	background: url(../../assets/img/sanheng2.png) no-repeat;
	background-size: cover;
}
.pinglunjia .pinglunjiamian .pinjie-content .con1{
	padding: 0.185185rem;
	box-sizing: border-box;
	display: flex;
	min-height: 2.777777rem;
	border-bottom: 0.018518rem solid #ccc;
}
.pinglunjia .pinglunjiamian .pinjie-content .con1 .con1-left{
	flex: 2;
	height: 100%;
	display: flex;
	justify-content: center;
}
.pinglunjia .pinglunjiamian .pinjie-content .con1 .con1-left>img{
	width: 0.925925rem;
	height: 0.925925rem;
	border-radius: 50%;

}
.pinglunjia .pinglunjiamian .pinjie-content .con1 .con1-right{
	flex: 8;
	height: 100%;
}
.pinglunjia .pinglunjiamian .pinjie-content .con1 .con1-right .hiufu{
	width: 100%;
	padding: 0.185185rem 0.185185rem;
	box-sizing: border-box;
	background: #ccc;
	border-radius: 0.092592rem;
	margin-top: 10px;
	max-height: 2.87037rem;
}
.pinglunjia .pinglunjiamian .pinjie-content .con1 .con1-right .hiufu .shuliang{
	color: #007AFF;
}
.pinglunjia .pinglunjiamian .pinjie-content .con1 .con1-right .hiufu .huifu1{
	width: 100%;
	overflow: hidden;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	display: -webkit-box;
}
.pinglunjia .pinglunjiamian .pinjie-content .con1 .con1-right .hiufu .huifuyong{
	color:#0086B3;
}
.pinglunjia .pinglunjiamian .pinjie-content .con1 .con1-right .hiufu .huifucont{
	display: inline;
	
}
.pinglunjia .pinglunjiamian .pinjie-content .con1 .con1-right .shijian3{
	margin-bottom: 0.185185rem;
}
.pinglunjia .pinglunjiamian .pinjie-content .con1 .con1-right .right-top{
	margin-bottom: 0.092592rem;
}
.pinglunjia .pinglunjiamian .pinjie-content .con1 .con1-right .right-top .dengji{
	display: inline-block;
	width: 0.462962rem;
	height: 0.259259rem;
	background: url(../../assets/img/dengji4.png) no-repeat;
	background-size: contain;
	margin-left: 0.092592rem;
	vertical-align: middle;
	
}
.pinglunjia .pinglunjiamian .pinjie-content .con1 .con1-right .right-top .upstle{
	display: inline-block;
	padding: 0 0.148148rem;
	border: 0.018518rem solid #FF6666;
	border-radius: 0.092592rem;
	color: #FF6666;
	transform: scale(0.85);
	margin-right: 0.092592rem;
}
.pinglunjia .pinglunjiamian .pinjie-content .con1 .con1-right .right-top .pinguan{
	float: right;
	color: #FF6666;
}

.pinglunjia .pinglunjiamian .pinjie-content .con1 .con1-right .cond{
	
}
.pinglunjia .pinglunjiamian .pinjie-content .con1 .con1-right .cond .zhiding{
	padding: 0.018518rem 0.092592rem;
	border: 0.018518rem solid #FF6666;
	color: #ff6666;
	border-radius: 0.092592rem;
	transform: scale(0.85);
	box-sizing: border-box;
	display: inline-block;
	
}
.pinglunjia .pinglunjiamian .pinjie-content .con1 .con1-right .cond .tip{
	display: inline-block;
}
.pinglunjia .pinglunjiamian .pinjie-content .con1 .con1-right .cond .toop{
	display: flex;
	margin-top: 0.185185rem;
}
.pinglunjia .pinglunjiamian .pinjie-content .con1 .con1-right .cond .toop i{
	margin-right: 0.092592rem;
}
.pinglunjia .pinglunjiamian .pinjie-content .con1 .con1-right .cond .toop2{
	margin: 0 0.925925rem;
}
.pinglunjia .pinglunjiamian .pinjie-content .con1 .con1-right .cond .toop4{
	margin-right: 0;
	margin-left: auto;
}
.pinglunjia .pinglunjiamian .pinjie-content .con1 .con1-right .cond .toop .t4{
	display: inline-block;
	width: 0.277777rem;
	height: 0.277777rem;
	background: url(../../assets/img/sandia.png) no-repeat;
	background-size: cover;
	
}
</style>
