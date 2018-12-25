<template>
    <div class="container">
        <pre>
            插槽--实现内容分发
            1. 语法：组件使用时候，自定义组件标签内容可以包含在标签内部：
                1. 父组件：&lg;Content>这是slot内容&lg;/Content>
                2. 子组件：&lt;template&gt;&lt;slot&gt;&lt;/slot&gt;&lt;/template&gt;
                3. 现象：父组件标签中间的部分会自动分发给子组件中slot的显示；这是默认的；
                4. 备注：需要分发的内容可以是人员html性质的内容，比如：标签，其他组件等；
            2. 具名插槽：一个组件内有多个插槽，子组件使用name标识；可以用在普通话标签上，也可以用在template标签上
                1. 父组件：&lt;Content&gt;&lt;p slot="slot1"&gt;这是slot内容&lt;/p&gt;&lt;p slot="slot2">这是slot内容&lt;/p>&lt;/Content>
                2. 子组件：&lt;template>&lt;slot name="slot1">&lt;slot name="slot2">&lt;/template>
            3. 插槽的默认内容：默认插槽，匿名插槽；
                1. 如果一个插槽你希望有默认值，可以再子组件的slot标签中预留内容，这样即使没有使用到这个插槽也会显示；
                2. 如果父组件为这个插槽提供了内容，那么默认的内容就会替换掉；
            4. 插槽作用域
                1. 插槽默认的作用域是父组件的作用域：父组件的所有东西都会在父组件的作用域内编译，子组件在子组件的作用域内编译；
                2. 子组件在定义slot的时候可以传递变量&lt;slot :data="list">&lt;slot>；父组件使用slot的时候：&lt;p slot-scope="slotProps">{ { slotProps }}&lt;/p>
        </pre>

        <hr>
        <!-- <p>{{ name }}</p> -->
        <CList >
            <template slot-scope="user">
                <p>{{ user }}</p>
            </template>
        </CList>
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
