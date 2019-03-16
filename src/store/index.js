import Vue from 'vue'
import Vuex from 'vuex'

import home from './home'
import goods from './goods'
import cart from './cart'
import user from './user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    home,
    goods,
    cart,
    user
  }
})

export default store
