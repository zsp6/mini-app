<template>
  <div>
    <scroll-view :scroll-x="true" class="scroll">
      <ul class="menu-list" :style="{width: width+'px'}">
        <li
          v-for="(item, index) in menuList"
          :key="item.id"
          :class="{active: index === selectIndex}"
          @click="selectMenu(index)"
          class="menu-li"
        >
          {{item.name}}
        </li>
      </ul>
    </scroll-view>
  </div>
</template>

<script>
import store from '../../store'
export default {
  data () {
    return {
      selectIndex: 0
    }
  },
  computed: {
    menuList: () => {
      let list = store.state.home.menuList
      return [{id: 0, name: '推荐'}, ...list]
    },
    width: () => {
      // console.log(this.menuList)
      let list = store.state.home.menuList
      let num = [{id: 0, name: '推荐'}, ...list]
      // console.log(num)
      return num.length * 80
    }
  },
  created () {
    // 请求菜单数据
    store.dispatch('home/getMenuAction')
  },
  methods: {
    // 切换菜单
    selectMenu (index) {
      // 修改样式
      this.selectIndex = index
      // 传递下标给index页面，切换组件
      this.$emit('selected', index)
    }
  }
}
</script>

<style>
  .menu-list{
    display: flex;
    width: 800px;
  }
  .menu-li{
    flex: 1;
    font-size: 12px;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
  .menu-li.active{
    color: #b4282d;
    border-bottom: 2px solid #b4282d;
  }
</style>
