<template>
    <div class="container">
        <pre>
            表单
            1. 基础语法：v-model，本身是处理数据双向绑定的语法糖；vue中优先级高于value，checked，selected等值；
            2. 表单元素：input textarea 复选框  单选框 select
            3. 修饰符：
                1. .lazy不会在input的时候实时出发，而是在change的时候触发
                2. .number 转换为数值类型
                3. .trim过滤首尾空格
        </pre>
       
        <p>{{ name }}</p>
        <input v-model.number="texta" type="number">
        <el-button @click="handleChange">按钮</el-button><br>
        <!-- <textarea name="" id="" cols="30" rows="10" v-model.lazy="texta"></textarea> -->
        <p>{{ texta }}</p>
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
            texta: '这是textarea'
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
