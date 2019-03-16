<template>
  <div>
    <image class="banner" :src="bannerUrl" mode="windthFix"></image>
    <div v-for="(item, i) in cateList" :key="i" class="cate-list-wrap">
      <h3 class="title">{{item.name}}</h3>
      <h6 class="subtitle">{{item.frontName}}</h6>
      <ul class="cate-list">
        <li
          class="cate-item"
          v-for="(cateItem, j) in item.itemList"
          :key="j"
          v-if="j % 2 === 0">
          <div class="left item" @click="goDetail(cateItem)">
            <image
              :src="cateItem.picUrl"
              mode="widthFix"
              :lazy-load="true"
            >
            </image>
            <p class="simpleDesc">{{cateItem.simpleDesc}}</p>
            <p class="goodGrid">{{cateItem.name}}</p>
            <p class="selectColor" v-if="cateItem.colorNum !== 0">{{cateItem.colorNum}}<i>色可选 {{j}}</i></p>
          </div>
          <div
            class="right item"
            @click="goDetail(item.itemList[j+1])"
            v-if="(j+1) < item.itemList.length">
            <image
              :src="item.itemList[j+1].picUrl"
              mode="widthFix"
              :lazy-load="true"
            >
            </image>
            <p class="simpleDesc">{{item.itemList[j+1].simpleDesc}}</p>
            <p class="goodGrid">{{item.itemList[j+1].name}}</p>
            <p class="selectColor" v-if="item.itemList[j+1].colorNum !== 0">{{item.itemList[j+1].colorNum}}<i>色可选{{j+1}}</i></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import store from '../../store'
export default {
  props: {
    index: Number
  },
  computed: {
    pageId () {
      let menuItem = store.state.home.menuList[this.index]
      return menuItem.id
    },
    // 菜单分类列表的每一个banner图
    bannerUrl: () => {
      return store.state.home.cateBannerUrl
    },
    // 菜单分类列表数据
    cateList: () => {
      return store.state.home.cateList
    }
  },
  watch: {
    index: {
      handler (newVal) {
        console.log('newVal', newVal)
        // 根据选中的下标计算 id
        let pageId = store.state.home.menuList[this.index].id
        // 发送请求，请求该页面的数据
        store.dispatch('home/getCategoryListAction', {id: pageId})
      },
      immediate: true
    }
  },
  methods: {
    goDetail (item) {
      // console.log(item)
      wx.navigateTo({
        url: `../../pages/goods-detail/main?id=${item.id}`
      })
    }
  }
  // created () {
  //   console.log('请求数据')
  //   console.log(this.index)
  // }
}
</script>

<style>
  .banner{
    width: 100%;
  }
  .cate-list-wrap .title{
    font-size: 20px;
    text-align: center;
    line-height: 24px;
    padding-top: 14px;
    color: #333;
  }
  .cate-list-wrap .subtitle{
    font-size: 16px;
    text-align: center;
    line-height: 18px;
    margin-top: 10px;
    padding-bottom: 8px;
    color: #999;
  }
  .cate-item{
    width: 100%;
    display: flex;
    position: relative;
  }
  .cate-item .item{
    width: 50%;
    box-sizing: border-box;
    padding: 5px;
  }
  .cate-item .item image{
    width:100%;
  }
  .simpleDesc{
    font-size: 12px;
    background: #F1ECE2;
    color: #9F8A60;
    height: 20px;
    line-height: 20px;
    margin-bottom: 10px;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .goodGrid{
    color: #333333;
    font-size: 14px;
  }
  .selectColor{
    display: flex;
    font-size: 12px;
    color: #b4a078;
    flex-direction: column;
    border-color: #b4a078;
    border-width: .5px;
    border-radius: 2%;
    border-style: solid;
    background-color: #f4f4f4;
    position: absolute;
    top: 5px;
    left: 5px;
    width: 14px;
    padding: 6px 0;
    margin: 5px 0 0 5px;
    text-align: center;
  }
</style>
