import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import page1 from '@/page/page1'
import page11 from '@/page/page11'
import page12 from '@/page/page12'
import page13 from '@/page/page13'
import page14 from '@/page/page14'
import page15 from '@/page/page15'
import page16 from '@/page/page16'
import page17 from '@/page/page17'
import page18 from '@/page/page18'
import indexmk from '@/page/indexmk'
import indexcallapply from '@/page/indexcallapply'
import indexanquan from '@/page/indexanquan'
import indexemoji from '@/page/indexemoji'
import indexbind from '@/page/indexbind'
import indexflex from '@/page/indexflex'
import indexsort from '@/page/indexsort'










import AmazeVue from 'amaze-vue'
import 'amaze-vue/dist/amaze-vue.css'


import jQuery from 'jquery'


Vue.use(Router);
Vue.component('c-button', {
    data: function (){
        return {
            count: 0
        }
    },
    mounted() {
        console.log('全局c-button加载了');
    },
    template: '<button @click="count++">你点击了我{{ count }}次</button>'
});

export default new Router({
    routes: [
        {
            path: '/',
            name: '',
            component: page1
        },{
            path: '/index',
            name: 'index',
            component: index
        },
        {
            path: '/page1',
            name: 'page1',
            component: page1
        },
        {
            path: '/indexmk',
            name: 'indexmk',
            component: indexmk
        },
        {
            path: '/indexcallapply',
            name: 'indexcallapply',
            component: indexcallapply
        },
        {
            path: '/indexanquan',
            mame: 'indexanquan',
            component: indexanquan
        },
        {
            path: '/indexemoji',
            mame: 'indexemoji',
            component: indexemoji
        },
        {
            path: '/indexbind',
            mame: 'indexbind',
            component: indexbind
        },
        {
            path: '/indexflex',
            mame: 'indexflex',
            component: indexflex
        },
        {
            path: '/indexsort',
            mame: 'indexsort',
            component: indexsort
        }
    ]
})
