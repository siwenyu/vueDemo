<template>
    <div class="container">
        <pre>
        样式相关：
        class属性值是一个对象或者数组。数组最大，数组元素可以是对象，数组元素可以是三元表达式；对象可以是变量。
        < :class="['aaaa']" :class="{'asdasda': isTrue}">demo</ >
        组件上的class会被渲染在根目录上。
        内联样式：不推荐使用。值是一个对象。每个键值对的属性值是驼峰命名的属性名或者是短横线的，短横线需要用''号；可以是对象；
        :style=""
        vue会自动添加前缀 -webkit-
        多重值，渲染被浏览器支持的。
        </pre>
       
        <p>{{ name }}</p>
        <a :class="['aaaa', {'aaaa':'s'}, activeCla]"></a>
        <a :class="{'aaaa':'s'}"></a>
        <el-button @click="handleChange">按钮</el-button><br>
        
    </div>
    
</template>

<script>
import tool from  '@/assets/js/tool.js'
import dataFile from  '@/assets/js/dataFile.js'


export default {
    name: 'page1',
    components: {
        
    },
    data () {
        return {
            cWidth: 400,
            cHeight: 400,
            liList: '1',
            num1: 1,
            htmlData: '<span style="color:red;">这是测试</span>',
            disabledData: undefined,
            testWord: 'helloworld',
            testArr: [1,2,3,4],
            nowData: true,
            name: {
                first: 'first',
                end: 'end'
            },
            activeCla: {
                aaaaaa: true
            }
        }
    },
    methods:{
        handleChange() {
            
        }
    },
    
    mounted() {
        let self = this;
        console.log(this);
        setTimeout(() => {
            
        }, 1000)
        
        
        
    },
    computed: {
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
