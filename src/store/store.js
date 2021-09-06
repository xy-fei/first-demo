import { reject, resolve } from 'core-js/fn/promise'
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import moduleA from './modules/moduleA'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cartList: []

    },
    getters: {
        cartlLength (state) {
            return state.cartList.length
        },
        cartList (state) {
            return state.cartList
        }



    },
    mutations,
    actions,
    modules: {
        a: moduleA
    }
})
