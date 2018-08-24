// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App'
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import index from "./components/index.vue";
import musicList from "./components/musiclist.vue";
import play from "./components/Play.vue";
import login from "./components/login.vue";
import reg from "./components/reg.vue";
import cl from "./components/main.vue"


Vue.config.productionTip = false;
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
