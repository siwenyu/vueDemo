<template>
    <div class="container">
        <pre>
        vue计算属性与监听器
        计算属性（模板只是简单的声明式逻辑，原则上不建议进行较多的逻辑处理。需要处理的逻辑在计算属性中处理）
        计算属性的key是全局data属性；该属性的值是一个setter函数，返回值是key的值；计算属性在mounted之前执行，setter中依赖（存在）的变量值update的时候执行；
        计算属性缓存概念：setter中存在的变量update时，都会计算该计算属性；换句话说，如果没有变量update，变量就被缓存；所以使用要慎重，一般经常update的变量被依赖时，使用方法代替计算属性。
        计算属性与方法：首次展现有依赖的使用计算属性；一般经常update的变量被依赖时，使用方法代替计算属性；交叉的可以使用其他变量中和。
        计算属性与侦听属性(watch)：监听属性变化观察和响应数据update。如果一个数据受多个数据影响，使用computed，作用域内'高级变量'；如果一个数据影响多个数据，使用watch，作用域'内低级变量'。
        计算属性的setter和getter：默认的函数是getter，也就是计算属性的get方法；如果设置了setter，可以在计算属性的值发生变化时触发，比如重置。
        侦听器：当数据变化时，需要执行开销较大的操作，或者执行异步，优先考虑侦听器。
        </pre>
       
        <p >{{showName}}</p>
        <p v-show="nowData">{{ now }}</p>
        <el-button :class="testWord.slice(1,2)" :disabled="disabledData" @click="handleChange">按钮</el-button><br>
        
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
            }
        }
    },
    methods:{
        handleChange() {
            this.num1 = this.num1 * 1 + 1;
            this.nowData = !this.nowData;
        }
    },
    
    mounted() {
        let self = this;
        console.log(this);
        setTimeout(() => {
            self.name.first = '设置';
            
        }, 1000)
        
        
        
    },
    computed: {
        showName: {
            set: function(thisName) {
                console.log("thisName");
                console.log(thisName);
                this.name.first = 'set';
                this.name.end = 'set';
            },
            get() {
                return this.name.first + ' ' + this.name.end;
            }
            
        },
        now() {
            if (this.nowData) {
                return Date.now();
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
