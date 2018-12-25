<template>
    <div class="container">
        <pre>
        vue模板语法
        1. 数据绑定Mustache语法(双大括号) ，只绑定一次（v-once）
        2. v-html 输出真正的html代码，当成代码解析。容易到值xss攻击，只给信任的内容使用，比如不能给用户提供的内容使用
        3. v-bind 绑定属性，可以省略。绑定的属性的值可以是变量值，也可以是变量名（前面加:）
        4. v-on 监听dom事件
            1. v-on:click/@click = "hundle(aa)"  aa是参数，如果不穿，默认是鼠标event；如果有实参，则第一个参数是实参；如果想继续使用$event，则使用$event作为实参；
            6. 修饰符 
                1. .连接的特殊后缀，支出一个指令以何种特殊方式绑定。
                2. 类别：.stop组织冒泡；.prevent组织默认事件；.self只在dom本身触发 ；.capture捕获模式；.passive，不阻止默认行为；.exact精确修饰符
                3. .stop.prevent可以连载；并且连载后的顺序很重要，会按照顺序执行。
                4. 按键修饰符：.13 = .enter键；全部按键：.tab/.enter/.delete/.esc/.space/.up/.down/.left/.right；可以通过config.keyCode自定义按键修饰别名。Vue.config.keyCodes.f1 = 112;(有一些按键（esc）在IE9中的key值不同，如果要支持要hack)；系统修饰符;

        4. 使用表达式：(1)一元，二元，三元表达式；js基础语法(字符串\数组所有拼接，裁剪等)。
        5. v-if v-show 
            1. v-if v-else v-else-if  
            2. if else的切换过程中，可以用key管理需要缓存的元素，默认元素是相同的key；dom节点会缓存，属性会修改；现象：在dom中可以看到dom节点重新渲染还是属性chong新渲染；
            3. v-show的元素始终会渲染在dom中，只是切换css的display属性；v-show不支持template元素，也不支持v-else
            4. v-if惰性渲染：只有在值为true的时候才真正的渲染，为false的时候不渲染；
            5. 性能：v-show初始化时开销较大；v-if切换时开销较大
            6. v-if和v-for不推荐一起使用；v-for优先级更高，先循环，再渲染if逻辑；解决办法：定义一个计算属性，返回过滤if逻辑判断之后的新数组循环。
        6. v-for列表渲染
            1. 渲染数组或者对象，(value, key, index) in/of items的形式；
                1. 如果是数组，只有value和index两个参数，没有key；
                2. 如果是对象，有三个参数分别是value, key, index；
                3. 如果是对象，使用Object.key()的结果遍历，在es5中有兼容问题，如果参数不是一个对象，会抛出typeerror的错误；但是工程会解决。
            2. key缓存，如果已经有渲染过的相同key的相同元素，会就地复用。唯一标识的元素会在重排中高效复用。
            3. 数组更新检测
                1. 数组本身发生变化会触发更新：push,pop,shift,unshift,splice,sort,reverse；
                2. 数组重新赋值。有些方法不会改变原始数组，但是会返回新的想要渲染的数组：filter,concat,slice；
                3. 高效的检测更新：如果新数组和旧数组中有相同的元素，会就地复用。
                4. 不能检测到的变动：
                    1. 利用索引设置一个元素的值：this.items[1] = 'new';
                    2. 直接操作修改数组长度时。this.items.length = 5;
                    3. 对象属性的增删改查。 
                    3. 如何解决这个问题：
                        1. 使用Vue.set方法，Object.assign
                        2. 使用能触发更新的方法代替完成相同操作
                        3. 使用lodash等工具箱深度拷贝。cloneDeep;
                        4. 显示排序或者其他结果：使用深度拷贝或者计算属性生成新的变量。
            4. items可以是一个具体的整数n，表示从1开始循环至n
        
        7. 缩写：v-bind: -> :   v-on: -> @  
        </pre>
        <s-title />
        <ul>
            <li v-for="(item, index) of liList">{{item}}-----{{index}}</li>
        </ul>
        <p >{{num1 + '2222'}}</p>
        <p v-html="testArr.indexOf(1)"></p>
        <input :aaa="Date()" class="aaa" v-if="showInput" placeholder="if" key="if">
        <input v-else placeholder="else" key="else">
        <el-button :class="testWord.slice(1,2)" :disabled="disabledData" @click="handleChange('aa', $event)">按钮</el-button><br>
        <el-input-number v-model="num1" @change="handleChange" :min="1" :max="100" label="描述文字"></el-input-number>
        
    </div>
    
</template>

<script>
import tool from  '@/assets/js/tool.js'
import dataFile from  '@/assets/js/dataFile.js'
import sTitle from '@/components/title'
import _ from 'lodash';


export default {
    name: 'page1',
    components: {
        's-title': sTitle
    },
    data () {
        return {
            cWidth: 400,
            cHeight: 400,
            liList: ['1', '2'],
            num1:1,
            htmlData: '<span style="color:red;">这是测试</span>',
            disabledData: undefined,
            testWord: 'helloworld',
            testArr: [1,2,3,4],
            showInput: false,
            obj: {
                name: 'name111',
                age: 'age111',

            }
        }
    },
    methods:{
        handleChange(aaa, bbb) {
            console.log(111111);
            console.log(aaa);
            console.log(bbb);
            // this.liList = this.liList * 1 + 1;
            // console.log(this.num1);
            // this.num1 = this.num1 * 1;
            // console.log(this.num1);
            this.liList[1] = 'new';
            this.liList = _.cloneDeep(this.liList);
            console.log(this.liList);
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
