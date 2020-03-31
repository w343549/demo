import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    index:1
  },
  mutations: {
    activeHand(state,id){
      state.index=id
    }
  },
  actions: {
    activeHand({commit},id){
      commit('activeHand',id)
    }
  },
  modules: {
  }
})
