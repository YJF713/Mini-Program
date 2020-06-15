// compontents/in_theaters/in_theaters.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
      activeNames: [1,2,3],
      theaters:[
        {
          tit:'影院热映',
          name:1,
          data:[
            {
              img:'/images/theaters/p2522497098.jpg',
              title:'六月的秘密',
              value:'3.5',
              val:'6.5'
            },
            {
              img:'/images/theaters/p2559864767.jpg',
              title:'马茹娜的非凡旅程',
              value:'4',
              val:'8.2'
            },
            {
              img:'/images/theaters/p2570280248.jpg',
              title:'鲁邦三世 The First',
              value:'4',
              val:'7.6'
            },
            {
              img:'/images/theaters/p2571473945.jpg',
              title:'知晓天空之蓝的人啊',
              value:'4',
              val:'7.5'
            },
            {
              img:'/images/theaters/p2579398648.jpg',
              title:'秘密访客',
              value:'3',
              val:'5.5'
            },
            {
              img:'/images/theaters/p2604517782.jpg',
              title:'春潮',
              value:'3.5',
              val:'7.2'
            }
          ]  
        },
        {
          tit:'豆瓣热门',
          name:2,
          data:[
            {
              img:'/images/Bean_curd/p2315672647.jpg',
              title:'疯狂动物城',
              value:'4.5',
              val:'9.2'
            },
            {
              img:'/images/Bean_curd/p2557573348.jpg',
              title:'千里千寻',
              value:'5',
              val:'9.4'
            },
            {
              img:'/images/Bean_curd/p2561305376.jpg',
              title:'我不是药神',
              value:'4.5',
              val:'9.0'
            },
            {
              img:'/images/Bean_curd/p2563780504.jpg',
              title:'少年的你',
              value:'4.5',
              val:'8.3'
            },
            {
              img:'/images/Bean_curd/p2572166063.jpg',
              title:'秘密访客',
              value:'3',
              val:'5.5'
            },
          ]  
        },
        {
          tit:'近期热门剧集',
          name:3,
          data:[
            {
              img:'/images/teleplay/p2602398693.jpg',
              title:'传闻中的陈芊芊',
              value:'4',
              val:'7.5'
            },
            {
              img:'/images/teleplay/p2603121645.jpg',
              title:'我才不要和你做朋友呢',
              value:'4',
              val:'8.2'
            },
            {
              img:'/images/teleplay/p2603414380.jpg',
              title:'幸福，触手可及',
              value:'4.5',
              val:'9.0'
            },
            {
              img:'/images/teleplay/p2604745826.jpg',
              title:'酋长的男人',
              value:'3.5',
              val:'7.1'
            },
            {
              img:'/images/teleplay/p2608297477.jpg',
              title:'乘风破浪的姐姐',
              value:'4.5',
              val:'8.5'
            },
            {
              img:'/images/teleplay/p2604118213.jpg',
              title:'奔跑吧，第四季',
              value:'3',
              val:'6.0'
            }
          ]  
       }
      ]

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      this.setData({
        activeNames: event.detail,
      });
    },
  }
})
