import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'


import AmazeVue from 'amaze-vue'
import 'amaze-vue/dist/amaze-vue.css'


import jQuery from 'jquery'



Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: '',
            component: index
        },{
            path: '/index',
            name: 'index',
            component: index
        }
    ]
})
