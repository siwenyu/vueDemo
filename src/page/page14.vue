<template>
    <div class="container">
        <pre>
        对象创建
        同一个类（Object）创建的每一个实例（carA）都有同一个原型对象（Object.prototype，carA.__proto__）
        所有的内置对象继承自Object类，都有同一个原型对象Object.prototype
        Object.create()是es5创建对象的方法，不推荐使用，对象的原型是参数
        如果通过原型继承创建一个新对象，原型对象是p，函数是inherit(p)。
        </pre>
        <canvas ref="canvasDemo" ></canvas>
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
            cHeight: 400
        }
    },
    methods:{
        drawBg() {

            // document.addEventListener('touchmove', function (e) {
            //     e.preventDefault()
            // })
            let c = this.$refs.canvasDemo;
            var x = c.getContext('2d'),
                pr = window.devicePixelRatio || 1,
                w = window.innerWidth,
                h = window.innerHeight,
                f = 90,
                q,
                m = Math,
                r = 0,
                u = m.PI*2,
                v = m.cos,
                z = m.random;
            c.width = w*pr;
            c.height = h*pr;
            x.scale(pr, pr);
            x.globalAlpha = 0.6;
            function i(){
                x.clearRect(0,0,w,h);
                q=[{x:0,y:h*.7+f},{x:0,y:h*.7-f}];
                while(q[1].x<w+f) d(q[0], q[1]);
            }
            function d(i,j){   
                x.beginPath();
                x.moveTo(i.x, i.y);
                x.lineTo(j.x, j.y);
                var k = j.x + (z()*2-0.25)*f,
                    n = y(j.y);
                x.lineTo(k, n);
                x.closePath();
                r-=u/-50;
                x.fillStyle = '#'+(v(r)*127+128<<16 | v(r+u/3)*127+128<<8 | v(r+u/3*2)*127+128).toString(16);
                x.fill();
                q[0] = q[1];
                q[1] = {x:k,y:n};
            }
            function y(p){
                var t = p + (z()*2-1.1)*f;
                return (t>h||t<0) ? y(p) : t;
            }
            
            i();
        
        }
    },
    mounted(){
        // 对象创建
        // let a = {};
        // let b = new Object({x:1});
        // let c = new Date();
        // console.log(Object.prototype);
        // console.log(b.__proto__);

        // 类==构造函数
        // 内置的类，内置的构造函数：Date，Array，RegExp
        // 自定义的函数


        // let crA = Object.create(Object.prototype);
        // console.log(crA.__proto__);


    //     function inherit(p) {
    //         if (p == null) {
    //             return TypeError();
    //         }
    //     }

    //     console.info("这是info");

    // 　　console.debug("这是debug");

    // 　　console.warn("这是warn");

    // 　　console.error("这是error");

        this.drawBg();
        let that = this;
        function fn() {
            this.p1 = true;
        }
        
        console.log(fn.prototype);

        let p11 = new fn();

        console.log(p11.__proto__);

        fn.prototype.getfnP1 = function() {
            console.log('fn的p1属性');
        }

        function fn2() {
            this.p2 = false;
        }
        // console.log(fn2.prototype);

        fn2.prototype = new fn();

        // console.log(fn2.prototype);


        Object.prototype.sayName = function() {
            console.log(1);
        }
        let a = {};
        console.log(a.__proto__);
        // window.onresize = this.drawBg();
        window.onresize = () => {
            that.drawBg();
        };
        console.log(window.onresize);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
