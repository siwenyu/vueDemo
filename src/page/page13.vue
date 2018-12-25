<template>
    <div class="container">
        <pre>
        最常用常规的方法是构造函数和原型方式混合方法，举例如何选择构造函数方法。

        字符串拼接
        </pre>
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
            
        }
    },
    methods:{
        
    },
    mounted(){
        let str = 'hello';
        str += 'world';

        // 过程
        // 创建存储 "hello " 的字符串。
        // 创建存储 "world" 的字符串。
        // 创建存储连接结果的字符串。
        // 把 str 的当前内容复制到结果中。
        // 把 "world" 复制到结果中。
        // 更新 str，使它指向结果。

        // 如何高效：
        
        let arr = ['hello', 'world'];
        // arr.join();
        console.log(arr.join(' '));

        // 过程
        // 创建存放结果的字符串
        // 复制要连接的字符串到结果字符串


        var d1 = new Date();
        str = "";
        for (var i = 0; i < 1000000; i++) {
            str += "text";
        }
        var d2 = new Date();

        console.log("Concatenation with plus: " + (d2.getTime() - d1.getTime()) + " milliseconds");

        function StringBuffer () {
            this._strings_ = new Array();
        }

        StringBuffer.prototype.append = function(str) {
            this._strings_.push(str);
        };

        StringBuffer.prototype.toString = function() {
            return this._strings_.join("");
        };
        StringBuffer.prototype.aaaa = function(){
            console.log('aaaaa');
        }

        var buffer = new StringBuffer();
        console.log(buffer);
        d1 = new Date();
        for (var i=0; i < 10000; i++) {
            buffer.append("text");
        }
        var result = buffer.toString();
        d2 = new Date();

        console.log("<br />Concatenation with StringBuffer: " + (d2.getTime() - d1.getTime()) + " milliseconds");

        // 内置对象不能随便添加prototype
        var buffer1 = function(){};
        buffer1.prototype.aaaa = function(){};
        console.log(buffer1.__proto__);
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
