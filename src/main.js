import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import modal from './plugins'
import contextMenu from './plugins/contextMenu'

Vue.config.productionTip = false
Vue.use(modal);
Vue.use(contextMenu);

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
