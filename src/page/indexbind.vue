<template>
    <div class="container">
        <pre>
            bind函数

            ## case

            ```
            let objA = {
                name: '我的名字',
                sayName() {
                    console.log(this.name);
                }
            }

            objA.sayName();  // 输出name

            let fB = objA.sayName;

            fB();  //报错:TypeError: Cannot read property 'name' of undefined
            
            ```

            分析：this指向问题。fB执行的时候，是window.fB，此时在sayName函数中对应的this是window，而在window上是没有这个属性的。

            如果想正常输出'我的名字'，需要改变this指向：
            
            ```
            第一种：
            fB.call(objA);
            第二种：
            fB.apply(objA);
            第三种：
            fB.bind(objA);
            或者：
            let fB = objA.sayName.bind(objA);
            ```

            ## call和apply

            <a href="http://siwenyu.alafe.org/js/2018/04/01/js%E4%B8%AD%E7%9A%84call%E5%92%8Capply/">查看这里</a>

            ## bind方法

            上面的例子中已经可以看到，bind函数也具有改变this指向的作用。在新函数中，this的指向永远的指向了objA这个对象。

            ```
            bind函数的完整语法：
            let bound = func.bind(context, arg1, arg2, ...);
            ```

            ### 偏函数

            <a href="https://www.cnblogs.com/bonelee/p/6102535.html">js中的偏函数</a>

            ```
            let add = function(a, b) {
                return a + b;
            }

            let fAdd = add.bind(null, 10);

            fAdd(1);   //11
            
            ```

            在看一个稍微复杂的：

            ```
            let add = function(a, b, c) {
                console.log(a);
                console.log(b);
                console.log(c);
                return a + b + c;
            }

            let fAdd = add.bind(null, 2);

            console.log(fAdd(1000, 2000, 3000));
            ```
            分析：

            1. add函数本身接受三个参数，fAdd函数创建的过程中(null, 2)传递了两个参数，第一个参数是this的执行环境，第二个及以后的参数传递给add函数的与定义函数
            2. 这里只预定了一个2，对应形参a；而函数add还需要额外的两个参数。
            3. fAdd调用的时候传递的参数，从前往后数2个（1000,2000）

            ### 实现bind方法

            1. 可以通过给目标函数添加作用域来实现bind方法

            ```
            Function.prototype.bind = fucntion(context) {
                let self = this; //保存this，即调用bind方法的目标函数
                return fucntion() {
                    return self.apply(context, arguments);
                }
            }

            fB.bind(objA);  // objA => context
            ```

            2. 函数柯里化优化

            <a href="https://www.jianshu.com/p/f88a5175e7a2">函数柯里化</a>

            ```
            Function.prototype.bind = function(context){
                var args = Array.prototype.slice.call(arguments, 1),
                self = this;
                return function(){
                    var innerArgs = Array.prototype.slice.call(arguments);
                    var finalArgs = args.concat(innerArgs);
                    return self.apply(context,finalArgs);
                };
            };
            ```

            3. 作为构造函数

            ```
            Function.prototype.bind = function (oThis) {
                if (typeof this !== "function") {
                throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
                }

                var aArgs = Array.prototype.slice.call(arguments, 1), 
                    fToBind = this, 
                    fNOP = function () {},
                    fBound = function () {
                    return fToBind.apply(
                        this instanceof fNOP && oThis ? this : oThis || window,
                        aArgs.concat(Array.prototype.slice.call(arguments))
                    );
                };

                fNOP.prototype = this.prototype;
                fBound.prototype = new fNOP();

                return fBound;
            };
            ```


            
        </pre>
       
        <p>{{ name }}</p>
        
        <el-button @click="handleChange">按钮</el-button><br>

        {{ test1 }}
        
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
            test1: '',
            fB:''
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

        let objA = {
            name: '我的名字',
            sayName() {
                console.log(this.name);
            }
        }

        // objA.sayName();

        let fB = objA.sayName.bind(objA);
        // fB();
        // fB.call(objA);
        // fB.apply(objA);

        let add = function(a, b, c) {
            console.log(a);
            console.log(b);
            console.log(c);
            return a + b + c;
        }

        let fAdd = add.bind(null, 2);

        console.log(fAdd(1000, 2000, 3000));
        
        
    },
    computed: {
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
