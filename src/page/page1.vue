<template>
    <div class="container">
        <pre>
            混入
            1. 概念，多个组件用到了相同的可复用的功能，可以定义一个混入对象，改对象可以包含任意组件选项，组件使用改混入对象，可继承该混入对象的选项。发生冲突时，以组件内部优先
            
        </pre>
       
        <p>{{ name }}</p>
        
        <el-button @click="handleChange">按钮</el-button><br>
        
        <CTabs></CTabs>  
        
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
        setTimeout(function (){
            console.log(111);
            console.log(this);
        }, 1000)
        
        
        
    },
    computed: {
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
