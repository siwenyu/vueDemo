<template>
    <div class="container">
        <pre>
            动态组件和异步组件
            1. keep-live 
            2. 异步组件
            3. 处理加载状态
            4. 处理边界情况 这几种情况都是不是太推荐的，因为组件化的目标是各个模块不耦合，及时父子关系，也应该尽量把自己的作用域维护好；比如子组件访问父组件的变量，一旦父组件的变量更改，子组件很难控制；
                1. 访问根元素  this.$root  会访问到Vue实例的所有属性和方法；在小应用中很方便，但是大型应用中，应该用xuex管理应用的状态；
                2. 访问父元素  this.$parent  有代替props的功能；
                3. 访问子元素  this.$refs  
                4. 依赖注入  要解决的问题是，无法访问父组件的父组件：&lt;a>&lt;b>&lt;c>&lt;/c>&lt;/b>&lt;/a>
            
        </pre>
       
        <CTabs></CTabs>
        
        <el-button @click="handleChange">按钮</el-button><br>
        
    </div>
    
</template>

<script>
import tool from  '@/assets/js/tool.js'
import dataFile from  '@/assets/js/dataFile.js'
import _ from 'lodash';


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
