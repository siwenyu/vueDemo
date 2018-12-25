<template>
    <div class="container">
        <pre>
            状态过渡-数据元素本身的过渡效果
            1. 状态动画与侦听器： 颜色，数字等，配合第三方库使用（GreenSock，Tween，Color）
                
            2. 动态状态过渡
            3. 把过渡放到组件里
            4. 赋予设计以生命

            http://www.xdnote.com/tweenjs/  主要是动画库很强大；
            Three.js ：http://www.hewebgl.com/article/articledir/1  
            动画库排行榜：https://baijiahao.baidu.com/s?id=1605842053644899487&wfr=spider&for=pc 

            
        </pre>
       
        
        <el-button @click="handleChange">按钮</el-button><br>
        <input v-model.number="number" type="number" step="20">
        <p>{{ animatedNumber }}</p>

        <hr>

        <el-button @click="handleChange1">按钮</el-button><br>
        <svg width="200" height="200">
            <polygon :points="points"></polygon>
            <circle cx="100" cy="100" r="90"></circle>
        </svg>
        <label>Sides: {{ sides }}</label>
        <input 
            type="range" 
            min="3" 
            max="500" 
            v-model.number="sides"
        >
        <label>Minimum Radius: {{ minRadius }}%</label>
        <input 
            type="range" 
            min="0" 
            max="90" 
            v-model.number="minRadius"
        >
        <label>Update Interval: {{ updateInterval }} milliseconds</label>
        <input 
            type="range" 
            min="10" 
            max="2000"
            v-model.number="updateInterval"
        >


        
    </div>
    
</template>

<script>
import tool from  '@/assets/js/tool.js'
import dataFile from  '@/assets/js/dataFile.js'
import _ from 'lodash';
import {TweenMax, Power2, TimelineLite, TweenLite} from "gsap";


export default {
    name: 'page1',
    components: {
        
    },
    data () {
        var defaultSides = 10;
  	    var stats = Array.apply(null, { length: defaultSides })
    	.map(function () { return 100 });
        return {
            stats: stats,
            points: generatePoints(stats),
            sides: defaultSides,
            minRadius: 50,
            interval: null,
            updateInterval: 500,
            number: 0,
            animatedNumber: 0
        }
    },
    methods:{
        handleChange() {
            
        },
        handleChange1() {
            
        },
        randomizeStats: function () {
            var vm = this
            this.stats = this.stats.map(function () {
                return vm.newRandomValue()
            })
        },
        newRandomValue: function () {
            return Math.ceil(this.minRadius + Math.random() * (100 - this.minRadius))
        },
        resetInterval: function () {
            var vm = this;
            clearInterval(this.interval);
            this.randomizeStats();
            this.interval = setInterval(function () { 
                vm.randomizeStats();
            }, this.updateInterval);
        }
    },
    computed: {
        animatedNumber: function() {
            // return this.tweenedNumber.toFixed(0);
        }
    },
    watch: {
        number: function (newValue) {
            let self = this;
            console.log(newValue);
            console.log(this.number);
            // TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue });
            this.timer1 = setInterval(function(){
                self.animatedNumber > this.number ? '' : self.animatedNumber += 1;
            },100);
        },
        animatedNumber(val) {
            if (this.number <= val) {
                clearInterval(this.timer1);
            }
        },
        sides: function (newSides, oldSides) {
            var sidesDifference = newSides - oldSides;
            if (sidesDifference > 0) {
                for (var i = 1; i <= sidesDifference; i++) {
                    this.stats.push(this.newRandomValue())
                }
            } else {
                var absoluteSidesDifference = Math.abs(sidesDifference)
                for (var i = 1; i <= absoluteSidesDifference; i++) {
                    this.stats.shift()
                }
            }
        },
        stats: function (newStats) {
                TweenLite.to(
            this.$data, 
            this.updateInterval / 1000, 
            { points: generatePoints(newStats) }
            )
        },
        updateInterval: function () {
            this.resetInterval()
        }
    },
    mounted() {
        let self = this;
        console.log(this);
        console.log(1111);
        console.log(this.$data);
        this.resetInterval()
        
        
    },
    computed: {
        
    }
}

function valueToPoint (value, index, total) {
  var x     = 0
  var y     = -value * 0.9
  var angle = Math.PI * 2 / total * index
  var cos   = Math.cos(angle)
  var sin   = Math.sin(angle)
  var tx    = x * cos - y * sin + 100
  var ty    = x * sin + y * cos + 100
  return { x: tx, y: ty }
}

function generatePoints (stats) {
	var total = stats.length
	return stats.map(function (stat, index) {
    var point = valueToPoint(stat, index, total)
    return point.x + ',' + point.y
  }).join(' ')
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
svg { display: block; }
polygon { fill: #41B883; }
circle {
  fill: transparent;
  stroke: #35495E;
}
input[type="range"] {
  display: block;
  width: 100%;
  margin-bottom: 15px;
}

</style>
