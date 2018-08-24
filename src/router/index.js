import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import login from "../components/login.vue"
import index from "../components/index.vue"
import musiclist from "../components/musiclist.vue";
import reg from "../components/reg.vue"
import Play from "../components/Play.vue"
import zhuye from "../components/main.vue"
import search from "../components/search.vue"
import mymusic from "../components/mymusic.vue"
import mycollect from "../components/mycollect.vue"
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index,
      children: [
        {
          path: 'a1',
          name: `zhuye`,
          component: zhuye
        },
        {
          path: 'a2',
          name: `mymusic`,
          component: mymusic
        },
        {
          path: 'a3',
          name: `musiclist`,
          component: musiclist
        },
        {
          path: 'a6',
          name: `search`,
          component: search
        },
        {
          path: 'a7',
          name: `mycollect`,
          component: mycollect
        }


      ]
    },
     {
      path: '/a5',
      name: `Play`,
      component: Play
    }
  ]
})
