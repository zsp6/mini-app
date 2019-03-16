<template>
  <div class="page" id="home">
    <!-- <h1>首页</h1> -->
    <!-- <div v-for="item in menuList" :key="item.id">{{item.name}}</div> -->
    <!-- 首页头部的菜单 -->
    <index-menu @selected="selectedAction"></index-menu>
    <!-- 内容组件 -->
    <!-- 首页推荐的轮播图及下面的小菜单栏 -->
    <top-content v-if="showIndex === 0"></top-content>
    <!-- 首页点击顶部菜单跳转的页面结构 -->
    <menu-content v-if="showIndex !== 0" :index="showIndex-1"></menu-content>
    <!-- <swiper>
      <swiper-item v-for="item in bannerList" :key="item.id">
        <image :src="item.picUrl">aad</image>
      </swiper-item>
    </swiper> -->
    <!-- 首页品牌制造商直供 -->
    <brand></brand>
  </div>
</template>

<script>
// import store from '../../store'
import menu from '../../components/index/menu'
import topContent from '../../components/index/top-content'
import menuContent from '../../components/index/menu-content'
import brand from '../../components/index/brand'
export default {
  // data () {
  //   return {
  //     menuList: []
  //   }
  // },
  data () {
    return {
      showIndex: 0
    }
  },
  components: {
    'index-menu': menu,
    'top-content': topContent,
    'menu-content': menuContent,
    [brand.name]: brand
  },
  methods: {
    selectedAction (index) {
      // console.log(index)
      this.showIndex = index
    }
  },
  computed: {
    // menuList: () => store.state.home.menuList,
    // bannerList: () => store.state.home.bannerList
  },
  created () {
    // 请求菜单数据
    // store.dispatch('home/getMenuAction')
    // 请求轮播图数据
    // store.dispatch('home/getBannerAction')
    // console.log(store)
    // wx.request({
    //   url: 'http://129.204.72.71:8000/api/catelist',
    //   success: (res) => {
    //     // newData.map((item) => {
    //     //   return {id: item.id,name: item.name}
    //     // })
    //     // newData.map(({id, name}) => {
    //     //   return {id: id,name: name}
    //     // })
    //     // newData.map(({id, name}) => {
    //     //   return {id, name}
    //     // })
    //     // 加上小括号 是表示返回一个对象 不被解析
    //     let newData = res.data.data.map(({id, name}) => ({id, name}))
    //     this.menuList = newData
    //     // console.log(newData)
    //   },
    //   fail (error) {
    //     console.log(error)
    //   }
    // })
  }
}
</script>

<style scoped>

</style>
