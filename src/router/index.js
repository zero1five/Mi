import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/components/logic/home'  // 默认页面

// 商品详情页

let Item = (resolve) => {
  return import('@/components/details/item')
}

let router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/item',
            component: Item
        }
    ]
})

export default router;