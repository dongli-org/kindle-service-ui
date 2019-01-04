import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
// import products from './modules/products'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

const globalStore = {
  state: {
    global: {
      name: 'global-var'
    }
  },
  mutations: { },
  actions: { },
  getters: { }
}

export default new Vuex.Store({
  modules: {
    cart
  },
  ...globalStore
})
