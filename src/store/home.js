import api from '../api'
export default {
  namespaced: true,
  state: {
    title: '首页',
    menuList: [],
    bannerList: [],
    cateBannerUrl: '',
    cateList: [],
    oneMenuList: []
  },
  mutations: {
    // 操作菜单数据
    setMenu (state, param) {
      state.menuList = param
    },
    // 操作轮播图数据
    setBanner (state, param) {
      state.bannerList = param
    },
    // 赋值分类列表的数据
    setCategoryList (state, param) {
      state.cateBannerUrl = param.bannerUrl
      state.cateList = param.data
    },
    // 首页的轮播图下面的第一个菜单栏的数据
    setOneMenu (state, param) {
      state.oneMenuList = param
    }
  },
  actions: {
    // 请求首页的菜单数据
    getMenuAction: function (context) {
      // 显示加载的提示
      wx.showLoading({
        mask: true
      })
      wx.request({
        url: api.HOME_MENU_LIST,
        success: (res) => {
          let newData = res.data.data.map(({id, name}) => ({id, name}))
          // this.menuList = newData
          context.commit('setMenu', newData)
          // console.log(newData)
        },
        fail (error) {
          console.log(error)
        },
        complete () {
          // 隐藏加载的提示
          wx.hideLoading()
        }
      })
    },
    // 请求首页的轮播图数据
    getBannerAction: function (context) {
      // 显示加载的提示
      wx.showLoading({
        mask: true
      })
      wx.request({
        url: api.HOME_BANNER_LIST,
        success: (res) => {
          // console.log(res)
          let listData = res.data.data.map(({id, picUrl}) => ({id, picUrl}))
          context.commit('setBanner', listData)
          // console.log(listData)
        },
        fail (error) {
          console.log(error)
        },
        complete () {
          // 隐藏加载的提示
          wx.hideLoading()
        }
      })
    },
    // 请求首页的菜单列表数据
    getCategoryListAction: function (context, param) {
      // 显示加载小圈圈
      wx.showLoading({
        title: '正在玩命加载中...',
        mask: true
      })
      // console.log(param)
      wx.request({
        url: api.HOME_CATE_LIST,
        data: {id: param.id},
        success (res) {
          console.log(res)
          // 数据中拿出来的 banner 图地址
          let bannerUrl = res.data.data.currentCategory.bannerUrl
          // 数据处理
          let data = res.data.data.categoryItemList.map(item => {
            let newItem = {
              id: item.category.id,
              name: item.category.name,
              frontName: item.category.frontName
            }
            newItem.itemList = item.itemList.map(value => {
              return {
                id: value.id,
                name: value.name, // 全棉针织条纹四件套 新款
                colorNum: value.colorNum, // 几色可选
                counterPrice: value.counterPrice, // 原价
                retailPrice: value.retailPrice, // 现价
                picUrl: value.primaryPicUrl,
                promTag: value.promTag, // 居家特惠
                simpleDesc: value.simpleDesc, // 简单描述 超柔针织棉，亲肤可裸睡
                productPlace: value.productPlace // 丹麦制造
              }
            })
            return newItem
          })
          context.commit('setCategoryList', {
            bannerUrl,
            data: data
          })
        },
        fail (error) {
          console.log(error)
        },
        // 无论失败还是成功都会执行 接口调用结束的回调函数（调用成功、失败都会执行）
        complete () {
          // 隐藏加载的提示
          wx.hideLoading()
        }
      })
    },
    // 请求首页的轮播图下面的第一个菜单栏
    getIndexServiceAction: function (context) {
      // 显示加载的提示
      wx.showLoading({
        mask: true
      })
      wx.request({
        url: api.HOME_ONE_MENU_LIST,
        success: (res) => {
          // console.log(res)
          let OneListData = res.data.data.map(({desc, icon}) => ({desc, icon}))
          // console.log(OneListData)
          context.commit('setOneMenu', OneListData)
        },
        fail: (error) => {
          console.log(error)
        },
        complete () {
          // 隐藏加载的提示
          wx.hideLoading()
        }
      })
    },
    // 请求首页下面的品牌制造商数据
    getBrandAction: function (context) {
      // 请求加载的小提示
      wx.showLoading({
        mask: true
      })
      // 发送请求
      wx.request({
        url: api.HOME_BRAND_LIST,
        success: (res) => {
          // console.log(res)
          let brandList = res.data.data.map(({floorPrice, id, name, newOnShelf, picUrl}) => ({floorPrice, id, name, newOnShelf, picUrl}))
          console.log(brandList)
        },
        fail (error) {
          console.log(error)
        },
        complete () {
          wx.hideLoading()
        }
      })
    }
  }
}
