<template>
    <div class="container">
        <pre>
            前端模块化
            1. 定义&&特性：模块化开发最大的意义是最大化的设计重用，以最少的模块，零部件，以最快的速度满足更多的个性化需求。如果模块设计的合理，我们可以更方便的使用别人的代码，想要什么功能就加载该功能对应的模块。记录不同场景下其对应的规范和使用。好的模块是高度独立的，它可以随时被删除或者加入，而不会影响系统稳定性；
            2. 实现方法
                1. 函数:
                    1. 匿名立即执行函数:let moduleA = (function() {return{name: 'name';sayName(){console.log('sayName')}}});moduleA.sayName();
                    2. 优缺点：能实现模块的基本需求，可维护性，重用代码等；缺点：以来问题无法解决，按顺序执行；
                2. CommonJS 同步方案
                    1. CommonJS不支持浏览器端直接使用，因为浏览器缺少四个变量（module,export,require,global）
                    2. 浏览器如何支持CommonJS，浏览器端提供以上四个方法就可以，可以使用立即执行函数，手写四个方法；或者使用工具，browserify可以支持，编译的时候就把依赖打包完成，浏览器加载的时候只是加载打包完成的文件，一次全部请求。
                    3. node写法：通过module.exports = {};暴露出去；let moduleA = require('./index');
                    4. webpack支持CommonJS，原理是内置了立即执行函数模拟node的四个方法，其实node本身也是用四个立即执行函数实现的这四个方法，公开的；
                    5. 优点：解决依赖关系，避免全局命名空间污染，适用于服务端，同步加载，速度比较快。缺点：浏览器不能原生支持，只能使用工具或者自己封装四个依赖方法实现；实现了的话，同步加载等候时间太长，不合适。
                3. AMD 异步方案
                    1. 浏览器端模块加载 define(function(){return {name: 'name'}});引用：require('../index', function(index){});
                    2. AMD require的模块是异步加载，不会同步阻塞；到使用的时候，模块再加载；
                4. UMD 同时支持同步和异步  
                    1. 原理，检测是否支持amd，支持使用amd，不支持使用CommonJS
                5. ES模块
                    1. 与以上方式异同：原生支持，以上法是都是js函数的模拟，来实现项目需要的加载方式。
                    2. 用法 export default 1;export function sayName(){};export let name = 1;  使用：import * as es6 from './index'
                    3. 优点：定好api之后，就是一张api的map方便使用；原生就是老大；
        </pre>
       
        <p>{{ name }}</p>
        
        <el-button @click="handleChange">按钮</el-button><br>
        
    </div>
    
</template>

<script>
import tool from  '@/assets/js/tool.js'
import dataFile from  '@/assets/js/dataFile.js'
import _ from 'lodash';
// CommonJS
let moduleA = require('@/common/js/commonjs')

// ES6 
import * as es from '@/common/js/es6';


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
            require([
                '../common/js/amd'
            ], function(amd) {
                'use strict';
                console.log(amd.add(3,4));
            });
        }
    },
    
    mounted() {
        let self = this;
        console.log('page mounted');

        
        
        // 函数
        (function(window, a){
            return {
                name: 'name',
                sayName() {
                    console.log('name');
                }
            }
        })(window, this);

        let aa = (function(window, a){
            return {
                name: 'name',
                sayName() {
                    console.log('sayName');
                }
            }
        })(window, this);
        aa.sayName();
        console.log(aa);

        // CommonJS
        console.log(moduleA);

        // AMD
        

        // define([
        //     '../common/js/amd'
        // ], function(amd) {
        //     'use strict';
        //     console.log(amd.add(3,4));
        // });
        console.log('start');

        // ES6 
        console.log(es);

        


        
        
        
    },
    computed: {
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
