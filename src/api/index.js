const HOST = 'http://129.204.72.71:8000'
// 首页顶部菜单
const HOME_MENU_LIST = HOST + '/api/catelist'
// 首页的轮播图
const HOME_BANNER_LIST = HOST + '/api/home/bannerlist'
// 首页的菜单列表数据
//  参数： id
const HOME_CATE_LIST = HOST + '/api/home/catelist/itemlist'
// 首页轮播图下面的第一个菜单栏
const HOME_ONE_MENU_LIST = HOST + '/api/policylist'
// 首页品牌制造商直供的数据
const HOME_BRAND_LIST = HOST + '/api/home/tagList'
export default {
  HOME_MENU_LIST,
  HOME_BANNER_LIST,
  HOME_CATE_LIST,
  HOME_ONE_MENU_LIST,
  HOME_BRAND_LIST
}
