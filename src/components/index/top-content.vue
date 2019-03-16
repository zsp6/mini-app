<template>
  <div class="top">
    <swiper
      :indicator-dots="true"
      indicator-color="#fff" indicator-active-color="#b4282d"
      :autoplay="true"
      interval="3000"
      :circular="true"
      class="swiper-warp"
     >
      <swiper-item v-for="item in bannerList" :key="item.id">
        <image :src="item.picUrl" :mode="widthFix" class="swiper-img"></image>
      </swiper-item>
    </swiper>
    <div class="m-indexServicePolicy">
      <ul class="g-grow">
        <li v-for="value in OneMenuList" :key="value">
          <a class="flex1">
            <image :src="value.icon" :mode="widthFix" class="icon"></image>
            <span class="icon-text">{{value.desc}}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import store from '../../store'
export default {
  computed: {
    // 轮播图数据
    bannerList: () => {
      return store.state.home.bannerList
    },
    // 轮播图下面第一个菜单栏的数据
    OneMenuList: () => {
      return store.state.home.oneMenuList
    }
  },
  created () {
    // 请求轮播图数据
    store.dispatch('home/getBannerAction')
    // 请求轮播图下面第一个菜单栏的数据
    store.dispatch('home/getIndexServiceAction')
  }
}
</script>

<style>
.swiper-warp{
  /* height: 200rpx; */
  width:100%;
}
.swiper-img{
  width: 100%;
  height: 150px;
}
/* 轮播图下的小菜单 */
.g-grow{
  height: 36px;
  line-height: 36px;
  width: 100%;
  padding: 0 10px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}
.icon{
  width: 18px;
  height: 18px;
  vertical-align: middle;
}
.flex1{
  flex: 1;
}
.icon-text{
  color: #B4282D;
  font-size: 12px;
  margin-left: 5px;
}

</style>
