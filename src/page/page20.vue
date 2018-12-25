<template>
    <div class="container">
        <pre>
            组件-mvvm的核心
            1. 语法（全局）：Vue.component('name',{template,data,method,mounted等})；let componentA = {'name',{template,data,method,mounted等};components:{'component-a': componentA};
            2. 组件特点：名字唯一，创建在根节点，可以复用；组件复用的时候，所有的组件内部的变量都是组件作用域内的局部变量，多次复用的组件内部的变量分别维护。
            3. 组件的组织：组件树。
            3. 组件命名：连字符或者驼峰式。引用连字符都可以；建议全部使用连字符；
            4. 全局组件和局部组件
            5. 模块系统：export导出，import导入；自动化：require.context('路径./component', false是否查询子目录,匹配规则)；返回对象，使用list.keys()拿到每个组件名；也可以用这个方法拿到page下的文件。
            6. props
                1. 父到子组件通信，子组件接受的值。使用驼峰命名；静态传值和动态传值；注意：命名时为什么不全部使用驼峰式命名？因为使用变量的时候-连字符不可用。
                2. 语法：props: ['title', 'footer']；props: {title:{default: 'title', type: String}};type类型可以是数组：[String, Number]
                3. 如果props是Number类型，使用动态传值，比如：:num="1"；如果是num="1"，则是按照字符串传值；
                4. 布尔值也是这样，比如：isShow="false"，传进去的是一个字符串'false'，是转换之后是true，应该是:isShow="false"
                5. 数组：:arr="[1,2,3]"；如果arr="[1,2,3]"，按照字符串规则解析数组，长度是字符串的长度；
                6. 对象：:obj="{name:1,age:2}"；如果obj="{name:1,age:2}"，按照字符串规则解析，长度是字符串的长度；动态变量可以简写：v-bind="obj"
                7. 传入对象的所有属性：v-bind="obj"; props:['name','age']；
                7. type也可以是一个构造函数，
                8. 注意 ：以上如果默认type不符合，vue会返回异常信息，比如：[Vue warn]: Invalid prop: type check failed for prop "arr". Expected Array, got String.；
                9. props是单向数据流，父组件的值改变时，props会自动更新本身的数据，反过来则不会；并且在子组件中，不允许props发生改变，如果强制改变，会报警
                比如：[Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "name"；
                解决办法：data中使用新的组件内部变量写逻辑，比如data中使用初始值，或者计算属性。
                10. props的验证是在组件创建之前，所以computed中的变量在props中是不可用的。
            7. 除了props以外，可以想子组件的根目录传递任何属性比如：isselect="haha"
        </pre>
       
        <p>{{ name }}</p>
        
        <el-button @click="handleChange">按钮</el-button><br>
        <c-button></c-button>
        <ca></ca>
        <Content 
            picker="activated"
            v-bind="post" 
            :obj="{name:1,age:2}" 
            :arr="[1,2,3]" 
            :isShow="false" 
            :contentProps="22"></Content>
        <Footer></Footer>
    </div>
    
</template>

<script>
import tool from  '@/assets/js/tool.js'
import dataFile from  '@/assets/js/dataFile.js'
import _ from 'lodash';

var ca = {
            template: '<p>局部注册组件</p>'
        };

export default {
    name: 'page1',
    components: {
        'ca': ca
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
            post: {
                name: 'post'
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
            
        }, 1000);

        

        
    },
    computed: {
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
