<template>
    <div class="container">
        <pre>
            js中的call和apply
            1. 函数本身
                1. 本身属性
                    1. length :形参的个数。
                    2. name : 函数名字
                    3. prototype : 类的原型。
                        1. 为什么要有这个属性？
                            1. 构造器Foo(){};颞部定义的方法和属性，new出来的对象都是独立的，不会共享。Foo.prototype的方法和属性可以共享。
                        0. 定义 ：当试图在一个对象上进行属性访问，而对象没有该属性是，对象内部的prototype连接定义了Get操作，下一步应该去哪里寻找这个属性，这种对象到对象的穿行链接定义了对象的原型链。在解析属性是发挥作用
                        1. 对象的属性查询总是向高级原型查询，低级别的对象总能查询到高级链上的属性；但是如果不是自身的属性，只读；如果子链上修改了原型链上非自身属性，自身的属性拷贝重新复制，但是高级原型的该属性不会变化，这种现象叫做隐士遮蔽。
                        2. prototype的终点是Object.prototype。它会有一些典型的方法，比如：toString,valueOf, toLocaleString。
                        3. function Foo(){},let a = new Foo();a 与 Foo 什么关系？
                            1. 对象a是类Foo的实例，a与Foo通过  Foo.prorotype连接在一起。继承类似于拷贝的操作，但是不是拷贝，二是建立链接。
                            2. Foo.prototype里面有什么？constructor 和 __prototype；Foo.prototype.constructor是什么？就是Foo本身。a.constructor是什么？也是Foo。
                            3. Foo本身只是一个普通的函数，但是当new关键字调用时，就成了一个构造器，并返回一个对象.
                            4. 严格模式下，全局的function中this是undefined，否则是window；当function被new关键字调用的时候，this指向构造器返回的对象
                        4. function Foo(name) {this.name = name}; Foo.prototype.sayName = function(){return this.name;};let f1 = new Foo('f1'); f1.
                            1. 此例中，Foo构造类为每一个以自己为构造器的对象添加了一个.name属性。
                            2. sayName是Foo构造器的原型方法，并不会被拷贝到f1对象上去，但是是可以访问，因为原型链会向上查找。
                            3. 这个实例中，f1 === Foo.prototype ?false。
                        5. 两个类继承：
                            function Foo(name){this.name=name};Foo.prototype.myName = function(){return this.name};function Bar(name, label){Foo.call(this, name);this.label = label};
                            Bar.prototype = Object.create(Foo.prototype);
                            // 将以bar为构造器生成的对象的原型委托到Foo的原型。
                            Bar.prototype.myLabel = function(){return this.label};
                            let a = new Bar('a', 'obj a');
                            a.myName();
                            a.myLabel();
                            // 实例a要访问myName这个属性，a本身没有，就去它的构造类的原型（Bar.prototype）上去找；
                            // Bar.prototype上也没有，就继续往委托链上的上层（Foo.prototype）上找。
                        6. 如何判断一个对象是否是一个类的后代呢 ？f1 instanceof Foo;
                    4. __proto__ : 指向function这个类的原型。函数是function的一个实例.
                2. 函数的角色
                    1. 普通函数：执行的时候有自己的作用域，进行形参赋值，预解析，代码执行，执行完销毁。
                    2. 类：它可以有自己的实例（构造函数），也有自己的原型prototype。
                    3. 普通对象
                    

        </pre>
       
        <p>{{ name }}</p>🍒🌈🙊
        
        <el-button @click="handleChange">按钮</el-button><br>
        <img src="javascript:alert(111)">
        
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
        // 函数本身的属性
        // function a(name, age) {
        //     console.log('1');
        // }
        // console.log(a.length);
        // console.log(a.name);
        // console.log(a.prototype);
        // console.log(a.__proto__);

        // let b = {name: 'name'};
        // console.log(Function.prototype);
        // console.log(Function.__proto__ == Function.prototype);


        // let a = {name: 1};
        // let b = Object.create(a);
        // console.log(a.name);
        // console.log(b.name);
        // console.log(a.hasOwnProperty("name"));
        // console.log(b.hasOwnProperty("name"));

        // b.toLocaleString1 = function() {
        //     console.log(112312);
        // }
        // a.toLocaleString1();
        // b.toLocaleString1();

        // let c = Object.assign({}, b);
        // c.toLocaleString1();
        // c.toLocaleString1 = function(){
        //     console.log('被c改了');
        // }
        // b.toLocaleString1();
        // c.toLocaleString1();

        // let Foo = function(name) {
        //     console.log(this);
        //     this.name = name ? name : 'name';
        // }

        // let f = new Foo('sdas');

        // console.log(Foo.prototype.constructor);
        // console.log(f.name);
        // console.log(Foo.constructor);

        // function Foo(name) {
        //     this.name = name;
        // }

        // Foo.prototype.myName = function(){
        //     return this.name;
        // }
        // Foo.prototype = {};

        // let f1 = new Foo('f1');

        // console.log(f1 instanceof Foo);

        // function Foo(name) {
        //     this.name = name;
        // };
        // Foo.prototype.myName = function() {
        //     return this.name;
        // };
        // function Bar(name, label) {
        //     // this.name = name;
        //     Foo.call(this, name);
        //     this.label = label;
        // };

        // 将以bar为构造器生成的对象的原型委托到Foo的原型。
        // Bar.prototype = Object.create(Foo.prototype);

        // Bar.prototype.myLabel = function() {
        //     return this.label;
        // };
        // let a = new Bar('a', 'obj a');
        // 实例a要访问myName这个属性，a本身没有，就去它的构造类的原型（Bar.prototype）上去找；
        // Bar.prototype上也没有，就继续往委托链上的上层（Foo.prototype）上找。
        // console.log(a.myName());
        // console.log(Bar.prototype);
        // console.log(Foo.prototype);

        // 构造函数
        // function Dog(name, color) {
        //     this.name = name;
        //     this.color = color;
        // }
        // 生成实例

        // let dogA = new Dog('dogA', 'red');
        // let dogB = new Dog('dogB', 'blue');

        // console.log(dogA instanceof Dog)

        // function Dog(name, color) {
        //     this.name = name;
        //     this.color = color;
        //     // 狗都会跑
        //     this.run = function() {
        //         console.log(this.name + ' is running');
        //     }
        // }
        // 每个函数都有一个prototype属性，这个属性的值是一个对象，在new创建实例的过程中，该对象的所有属性和方法都会被实例引用。
        // Dog.prototype.shout = function() {
        //     console.log(this.name + '：旺');
        // }
        // 生成实例

        // let dogA = new Dog('dogA', 'red');
        // let dogB = new Dog('dogB', 'blue');
        
        // console.log(Dog.prototype.isPrototypeOf(dogA));
        // console.log(dogA.hasOwnProperty("name"));
        // console.log(dogA.hasOwnProperty("shout"));

        // console.log('name' in dogA);
        // console.log('shout' in dogA);
        // console.log('name1' in dogA);
        // 动物的构造函数
        // function Animal() {
        //     this.species = '动物'; 
        // }

        // function Dog(name, color) {
        //     // 强制调用animal的构造函数的方法
        //     // Animal.call(this);
        //     this.name = name;
        //     this.color = color;
        // }
        // Dog.prototype.sayName = function (){
        //     console.log(this.name + ' 旺');
        // }
        // console.log(Dog.prototype);
        // Dog.prototype = new Animal();

        // Dog.prototype.constructor = Dog;
        // // console.log(Dog.prototype);

        // let dogA = new Dog('dogA', 'red');

        // console.log(dogA.constructor);

        // 动物的构造函数
        // function Animal() {
        //     this.species = '动物'; 
        // }

        // 狗的构造函数
        // function Dog(name, color) {
        //     this.name = name;
        //     this.color = color;
        // }

        // Dog.prototype = Animal.prototype;

        // Dog.prototype.constructor = Dog;

        // let dogA = new Dog('dogA', 'red');

        // console.log(Dog.prototype);
        // console.log(Animal.prototype);

        // let Person = {
        //     name: 'person1',
        //     age: [1,2,3,5],
        //     birthPlaces: ['北京','上海','香港']
        // }
        // Person.birthPlaces = ['北京','上海','香港'];

        // function object(parent) {
        //     function F() {};
        //     F.prototype = parent;
        //     return new F();
        // }

        // let Teacher = object(Person);

        // console.log(Teacher.name);


        // function objectDeepCopy(c, p) {
        //     // 要返回的空对象
        //     c = c || {}; 

        //     if (typeof p === 'object' && p!= null) {
        //         for (let i in p) {
        //             if (typeof p[i] === 'object' && typeof p[i] !== null) {
        //                 c[i] = p[i].constructor === Array ? [] : {};
        //                 // 递归赋值对象或者数组类型的子属性
        //                 objectDeepCopy(c[i], p[i]);
        //             } else {
        //                 c[i] = p[i];
        //             }
                    
        //         }
        //     }

        //     return c;
        // }


        // let Teacher = objectDeepCopy({}, Person);
        // Teacher.birthPlaces.push('厦门');
        // Teacher.age.push('厦门');

        // console.log(Person);
        // console.log(Teacher);

        // let obj = {};
        // function name(name) {
        //     console.log(name);
        // }
        // name.call(obj, '这是name');
        // function add(n, m) {
        //     return this + n + m;
        // }

        // console.log(add.call(null, 1,2))
        // console.log(add.apply(this, [1,2]))

        // let arr = [312,3,4,5,7,9,9,1212];

        // console.log(Math.max.apply(null, arr));

        // function P(name) {
        //     this.name = name;
        // }

        // function T(subject, name) {
        //     P.call(this, name);
        //     this.subject = subject;
        // }
        // let t1 = new T('数学', 't1');
        // console.log(t1);

    },
    computed: {
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
