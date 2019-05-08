import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CssDemo from '@/components/CssDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/a',
      redirect: HelloWorld

    },
    {
      path: '/css',
      component: CssDemo
    }
  ]
})
