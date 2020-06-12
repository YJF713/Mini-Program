// compontents/compontent.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    info:String,
    // 带有默认值的接受方式
    arr:{
      type:Array,
      value:[1,2,5,6]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    vall:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
      add(){
        let num =this.data.vall;
        num++
        this.setData({
          vall:num
        })
        //子组件向父组件传值
        this.triggerEvent('changeVal',this.data.vall)
      }
  }
})
