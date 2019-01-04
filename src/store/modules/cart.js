// import shop from '../../api/shop'

// initial state
const state = {
  all: [],
  goods: []
}

// getters
const getters = {}

// actions
const actions = {
  addProduct ({ commit }) {
    // shop.getProducts(products => {
    //   commit('setProducts', products)
    // })
    console.log('进入到了action')
    commit('ADD_GOOD', {name: 'kevin', salary: '$1000M'})
  }
}

// mutations
const mutations = {
  ADD_GOOD (state, good) {
    state.goods.push(good)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
