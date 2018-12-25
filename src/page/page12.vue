<template>
    <div class="container">
        构造函数方式创建类与对象。
        混合构造函数：
        属性在构造函数类方法中创建，方法用prototype方式创建。官方：用构造函数定义对象的所有非函数属性，用原型方式定义对象的函数属性。

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

        // 构造函数，将实例化的工作放在对象创建的地方
        function Car(name) {
            this.name = name;
            // this.sayName = function(){
            //     console.log('sayName：' + this.name);
            // }
        }
        // prototype保存的是一个指针。
        Car.prototype.sayName = function() {
            // this指向当前的实例。
            console.log('Car.prototype.sayName：' + this.name);
        }

        let carA = new Car('车A');
        let carB = new Car('车B');

        console.log(carA.sayName == carB.sayName);
        carA.sayName();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
