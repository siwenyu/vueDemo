<template>
    <div class="container" style="min-height: 3000px;">
        <pre>
            dom的过渡和动画
            1. transition name="过渡状态名字" mode="过渡模式名字" 
                1. 条件渲染： v-if/v-show； 
                2. 原理：自动识别目标元素是否使用了过渡或者动画，在适当的时机为这些dom添加和删除类名(可以通过观察渲染的dom看出)。
                3. 过渡状态的名字：
                    1. fade
                    2. 
                4. 过渡状态的过程：一次动作会有6个状态。
                    1. v-enter ： 进入过渡开始状态；dom插入之前生效，插入之后移除
                    2. v-enter-active ： 进入过渡生效状态；元素被插入之前生效，完成之后移除；
                    3. v-enter-to ： 进入过渡结束状态；元素被插入下一帧生效，完成之后移除；
                    4. v-leave 
                    5. v-leave-active 
                    6. v-leave-to 
                    7. 如果过渡名字是xx ，则生成的生成的过渡类名是：v-xx-enter ；如果没有，默认是v-enter
                    8. 自定义使用：一般是分别定义进入和离开动画的三个环节：开始状态，过渡过程，结束状态；其中进入的结束状态和离开的开始状态，和正常显示的状态应保持一致，v-xx-leave不用被定义。
                <img width="500" src="https://cn.vuejs.org/images/transition.png"><br>
                5. 与animate动画库结合使用，自定义类名
                    1. 使用：引入animte动画库：npm install animate.css --save  import animate from 'animate.css'
                    2. &lt;transition enter-active-class="animated bounce" leave-active-class="animated bounce"&gt;
                    3. 动画类名：http://www.dowebok.com/demo/2014/98/ ；有进入，离开，交互等；最好按照动画设计的原本意愿进行；
                    4. 对应6个状态，可以使用enter-active-class指定对应的多度过程中的样式。
                    5. 显性控制过渡过程的步骤时间：:duration="1000" :duration="{ enter: 500, leave: 800 }"
                6. js钩子函数
                    v-on:before-enter="beforeEnter"
                    v-on:enter="enter"
                    v-on:after-enter="afterEnter"
                    v-on:enter-cancelled="enterCancelled"

                    v-on:before-leave="beforeLeave"
                    v-on:leave="leave"
                    v-on:after-leave="afterLeave"
                    v-on:leave-cancelled="leaveCancelled"
                    1. 第一个参数是元素本身；enter和leave有第二个参数done，当只有js回调时使用；
                    2. 使用velocity动画库，js库，性能更好，语法和jquery.animate类似。http://www.mrfront.com/docs/velocity.js/index.html
                7. 初始渲染的过度
                    1. &lt;transition appear appear-class="custom-appear-class"&gt;用法和enter一样
                8. 多个元素的过渡
                    1. 标签中多个元素切换，v-if/show
                    2. 切换的过程中默认会同时开始，比如：A消失，B显示；同时进行，结束的时候，A彻底失去占位，B滑动到A的位置；
                    3. 解决2的问题：绝对定位到同一位置；mode="out-in"
                9. 列表过渡
                    1. 列表循环放在&lt;transition>中，其中的元素会跟局key自动变化
                10. 列表的排序过渡，列表的交错过渡


            
        </pre>
        <el-button @click="handleChange">按钮</el-button><br>

        <!-- <transition name="slide-fade">
            <p v-show="showDom">{{ name }}</p>
        </transition> -->

        <transition name="up-fade">
            <p style="display:block; width:100px;height:100px;border:1px solid red;" v-show="showDom">{{ name }}</p>
        </transition>
        <transition name="up-fade">
            <p v-show="showDom">{{ name }}</p>
        </transition>
        <hr>
        <el-button @click="handleChange1">自定义类名</el-button><br>


        <transition 
            appear
            appear-class="animated bounce"
            appear-to-class="animated bounce"
            appear-active-class="animated bounce"
            enter-active-class="animated bounce"
            leave-active-class="animated bounce"
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:after-enter="afterEnter"
            v-on:enter-cancelled="enterCancelled"

            v-on:before-leave="beforeLeave"
            v-on:leave="leave"
            v-on:after-leave="afterLeave"
            v-on:leave-cancelled="leaveCancelled">
            <p style="display:block; width:100px;height:100px;border:1px solid red;" v-show="showDom1">{{ name }}</p>
        </transition>

        <hr>
        <el-button @click="handleChange2">多个元素</el-button><br>
        <transition 
            appear
            appear-class="animated shake"
            appear-to-class="animated shake"
            appear-active-class="animated shake"
            enter-active-class="animated fadeInLeft"
            leave-active-class="animated fadeOutRight"
            mode="out-in">
            <button style="position: absolute;" v-if="isEditing" key="save">
                Save
            </button>
            <button style="position: absolute;" v-else key="edit">
                Edit
            </button>
        </transition>
        <transition 
            name="fade"
            mode="in-out">
            <button style="position: absolute;" v-if="isEditing" key="save">
                Save
            </button>
            <button style="position: absolute;" v-else key="edit">
                Edit
            </button>
        </transition>
        <hr>
        <br>
        <br>

        <el-button @click="handleChange3">多个组件过渡</el-button><br>
        <transition 
            name="fade"
            mode="out-in">
            <CTabs v-if="isEditing3"></CTabs>
            <Content v-else></Content>
        </transition>
        <hr>
        <br>

        <el-button @click="shuffle">列表过渡</el-button><br>
        <button v-on:click="add">Add</button>
        <button v-on:click="remove">Remove</button>
        <transition-group 
            name="list"
            enter-active-class="animated bounce"
            mode="out-in" tag="p">
            <span v-for="(item, index) in items" v-bind:key="item" class="list-item">
            {{ item }}sdasdasdas
            </span>
        </transition-group>

        <transition-group name="flip-list" tag="ul">
            <li v-for="item in items" v-bind:key="item">
            {{ item }}
            </li>
        </transition-group>

        
        
        
        
    </div>
    
</template>

<script>
import tool from  '@/assets/js/tool.js'
import dataFile from  '@/assets/js/dataFile.js'
import _ from 'lodash';
import animate from 'animate.css'


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
            showDom: true,
            showDom1: true,
            isEditing: true,
            isEditing3: true,
            isEditing4: true,
            items: [1,2,3,4,5,6,7,8,9,0],
            nextNum: 10
        }
    },
    methods:{
        handleChange() {
            this.showDom = !this.showDom;
        },
        handleChange1() {
            this.showDom1 = !this.showDom1;
        },
        handleChange2() {
            this.isEditing = !this.isEditing;
        },
        handleChange3() {
            this.isEditing3 = !this.isEditing3;
        },
        handleChange4() {
            let a = Math.ceil(Math.random() * 10);
            this.items.splice(a, 0, a);
        },
        shuffle: function () {
            this.items = _.shuffle(this.items)
        },
        randomIndex: function () {
            return Math.floor(Math.random() * this.items.length)
        },
        add: function () {
            this.items.splice(this.randomIndex(), 0, this.nextNum++)
        },
        remove: function () {
            this.items.splice(this.randomIndex(), 1)
        },
        beforeEnter() {
            console.log('动画开始');
        },
        enter() {
            console.log('enter');
        },
        afterEnter() {
            console.log('afterEnter');
        },
        enterCancelled() {
            console.log('enterCancelled');
        },
        beforeLeave() {
            console.log('beforeLeave');
        },
        leave() {
            console.log('leave');
        },
        afterLeave() {
            console.log('afterLeave');
        },
        leaveCancelled() {
            console.log('leaveCancelled');
        },

    },
    
    mounted() {
        let self = this;
        console.log(this);
        setTimeout(() => {
            
        }, 1000)
        
        
        
    },
    computed: {
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.slide-fade-enter-active, .slide-fade-leave-active {
    transition: all .8s ease;
}
.slide-fade-enter, .slide-fade-leave-to {
    transform: translateY(10px);
    opacity: 0;
}


.up-fade-enter-active {
    animation: bounce-in .8s;
} 
.up-fade-leave-active  {
    animation: bounce-in .8s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.animated {
    animation-duration: 1s;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.flip-list-move {
  transition: transform 1s;
}




</style>
