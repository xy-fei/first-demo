import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import VueLazyLoad from 'vue-lazyload'
import toast from 'components/common/toast'



Vue.config.productionTip = false
Vue.prototype.$bus = new Vue() //中央事件

Vue.use(toast)
Vue.use(VueLazyLoad)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')



