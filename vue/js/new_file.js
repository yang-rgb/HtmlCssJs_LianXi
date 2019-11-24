// 实例化vue对象
new Vue({
	el:"#app-vue",
	data:{
		name:"vue",
		agee:30,
		x:0,
		y:0,
		web:"https://www.baidu.com",
		html:'<a href="https://www.baidu.com">html</a>',
		
		iput:"",
		iput1:""
	},
	methods:{
		greet:function(time){
			return "go vue"+time+" "+this.name;
		},
		age:function(time){
			this.agee-=time;
		},
		upxy:function(e){
			this.x=e.offsetX;
			this.y=e.offsetY;
		},
		dddd:function(){
			this.iput=this.$refs.ipt.value;
		}
	}
	
})