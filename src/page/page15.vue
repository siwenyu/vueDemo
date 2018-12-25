<template>
    <div class="container">
        <pre>
        之前遇到的问题：变量在dom中渲染，但是更新变量的值，并没有师徒更新。
        因为没有在初始化数据对象data中注册这个值，只有注册了，这个变量的值再是双向绑定的。
        如果有一些变量会在晚些才需要使用，可以先注册并给一个默认值；并且初始默认值的变量类型不需要考虑，如果arr是个数组，但是也可能是个字符串。


        全局的对象，数据和方法：
        在Vue实例声明的时候声明。

        vue的生命周期：
        1.创建：new Vue() -> Init(Event&Lifecycle事件和生命周期) -> 'beforeCreate' -> Init(双向绑定injections&reactivity)  -> 'created'
        2.init：
        3.mount：'beforeMount' -> 虚拟dom生成 -> 'mounted' -> dataChange(['beforeUpdate' <-> 'updated'])
        4.destroy：'beforeDestroy' -> 'destroyed'
        <img src="https://cn.vuejs.org/images/lifecycle.png">
        </pre>
        <s-title />
        <ul>
            <li v-for="item in liList">{{item}}</li>
        </ul>
    </div>
    
</template>

<script>
import tool from  '@/assets/js/tool.js'
import dataFile from  '@/assets/js/dataFile.js'
import sTitle from '@/components/title'


export default {
    name: 'page1',
    components: {
        's-title': sTitle
    },
    data () {
        return {
            cWidth: 400,
            cHeight: 400,
            liList: '1'
        }
    },
    methods:{
        plus:()=> {
            console.log(1111);
            console.log(this);
        }
    },
    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        console.log('created');
    },
    mounted() {
        let self = this;
        console.log(this);
    },
    updated() {
        console.log('updated');
    },
    beforeUpdate() {
        console.log('beforepUdate');
    },
    beforeDestroy() {
        console.log('beforeDestroy');
    },
    destroyed() {
        console.log('destroyed');
    }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
