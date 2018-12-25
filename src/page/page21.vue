<template>
    <div class="container">
        <pre>
            自定义事件
            1. 命名：不会像组件和props一样自动转换大小写，必须完全匹配；官方推荐：始终使用 kebab-case 的事件名。不喜欢。
            2. 原生事件绑定到组件，如果组件颞部有多个元素，可以使用$listeners自定义监听规则，以达到指定监听的目的。
            3. .sync 双向绑定；
                1. 语法父组件：<Content :contentProps.sync="testWord"></Content>
                2. 子组件：this.$emit('update:contentProps', name); 
                3. contentProps的值  在父组件发生改变时，会传递给子组件；子组件发生改变时，通过emit传递给父组件。
                4. 原理：语法糖
        </pre>
       
        <p>{{ name }}</p>
        
        <el-button @click="handleChange">按钮</el-button><br>
        <Content :contentProps.sync="testWord"></Content>

        {{valueChild}} {{testWord}}
        
        <button @click="changeValue">toggle</button>
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
            },
            valueChild:true,
        }
    },
    methods:{
        handleChange() {
            
        },
        changeValue(){
            this.valueChild = !this.valueChild;
            this.testWord = this.testWord + 1;
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
