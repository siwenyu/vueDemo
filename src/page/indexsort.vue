<template>
    <div class="container">
        <pre>
            js中常用的排序

            ## 冒泡
            ### 排序原理
            1. 依次比较相邻的两个数，如果不符合排序规则，则调换两个数的位置。这样一遍比较下来，能够保证最大（或最小）的数排在最后一位。
            2. 再对最后一位以外的数组，重复前面的过程，直至全部排序完成。


            ## 快排

            ## js中的sort

            ## 数组和对象
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
    mounted() {
        let self = this;
        console.log(this);

        console.log(this.bubbleSort([3,4,2,1,5,8,10]));
        
        
        
    },
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
        },
        bubbleSort(arr) {
            // 升序
            let tmp;
            if (!arr) {
                return;
            }
            if (arr.length < 2) {
                return arr;
            }
            for (let i = 0; i < arr.length - 1; i++) {
                for (let j = 0; j < arr.length - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        tmp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = tmp;
                    }
                }
            }

            return arr;
        }
    },
    
    
    computed: {
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
