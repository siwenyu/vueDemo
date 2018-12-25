<template>
    <div class="container">
        工厂方式创建类与对象。
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
        // 工厂模式定义对象，返回对象
        // 返回可定制的对象
        // 方法是公共的，可以提出来，这样每个实例的该方法恒等。如果在工厂函数内部封装，则每个实例都有自己的版本，不相等。解决重复定义函数对象方法的问题。
        console.log(this);
        let self = this;
        // function sayName(){
        //     console.log('carObj.sayName：' + this.name);
        // }
        function car(name, num) {
            console.log(self);
            let carObj = new Object();
            carObj.name = name || '默认name';
            carObj.carId = (new Date()).getTime();
            // carObj.sayName = sayName;
            carObj.sayName = function sayName(){
                console.log('carObj.sayName：' + this.name);
            };
            return carObj;
        }
        let mathA = car('这是啥');
        mathA.name = '车B';
        mathA.sayName();

        let mathB = car();
        console.log(mathB);
        mathB.name = '车B';
        console.log(mathB.sayName === mathA.sayName);

        // console.log(mathA);
        // console.log(window);
        // let aaaa = window.btoa('12312');
        // console.log(window.btoa('12312'));
        console.log(window);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
