// component/z-tabber.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    current:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    hanshuclick(event){
      
      const index = event.currentTarget.dataset.index;
      this.setData({
        current: index
      })
      this.triggerEvent("itemclick",{index,title:this.properties.titles[index]},{})
    }
  }
})
