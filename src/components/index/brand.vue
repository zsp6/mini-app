<template>
  <div>
    <!-- 品牌制造商直供 -->
    <div>
      <div class="module-title">
        <div class="left"><span>品牌制造商直供</span></div>
        <div class="right"><span>更多 > </span></div>
      </div>
      <ul class="list">
        <li>
          <image src=""></image>
          <p></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import store from '../../store'
export default {
  name: 'brand',
  computed: {

  },
  created () {
    // 请求品牌制造商直供的数据
    store.dispatch('home/getBrandAction')
  }
}
</script>

<style>
/* 品牌制造商直供 */
.module-title{
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  box-sizing: border-box;
}
.left span, .right span{
  font-size: 16px;
  color: #333;
}
.list{
  position: relative;
  overflow: hidden;
  background: #fff;
  margin-bottom: 10px;
  padding: 0 10px 10px 10px;
}
</style>
