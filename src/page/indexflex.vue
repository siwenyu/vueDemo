<template>
    <div class="container">
        <pre>
            
        </pre>
       
        <p>{{ name }}</p>
        
        <el-button @click="handleChange">按钮</el-button><br>

        <div class="div1">
            <div class="div011">第一块</div>
            <div class="div012">第二块</div>
            <div class="div013">第三块</div>
        </div>

        <div class="div2">
            <div class="div011">第一块</div>
            <div class="div012">第二块</div>
            <div class="div013">第三块</div>
            <div class="div013">第三块</div>
            <div class="div013">第四块</div>
            <div class="div013">第五块</div>
        </div>

        <div class="div3">
            <div class="div011">第一块</div>
            <div class="div012">第二块</div>
            <div class="div013">第三块</div>
            <div class="div013">第三块</div>
            <div class="div013">第四块</div>
            <div class="div013">第五块</div>
        </div>

        <div class="div5">
            <div class="div011">第一块</div>
            <div class="div012">第二块</div>
            <div class="div013">第三块</div>
            <div class="div013">第三块</div>
            <div class="div013">第四块</div>
            <div class="div013">第五块</div>
        </div>

        <div class="div6">
            <div class="div011">第一块</div>
            <div class="div012">第二块</div>
            <div class="div013">第三块</div>
        </div>
        <div class="div11">
            <div class="div011">第一块</div>
            <div class="div012">第二块</div>
            <div class="div013">第三块</div>
        </div>

        <div class="div18">
            <div class="div011">第一块</div>
            <div class="div012">第二块</div>
            <div class="div013">第三块</div>
            <div class="div014">第4块</div>
            <div class="div015">第5块</div>
            <div class="div016">第6块</div>
            <div class="div017">第7块</div>
        </div>

        <div class="div30">
            <div class="div011">第一块</div>
            <div class="div012">第二块</div>
            <div class="div013">第三块</div>
        </div>


        <div class="div34">
            <div class="div011">第一块</div>
            <div class="div012">第二块</div>
            <div class="div013">第三块</div>
        </div>

        <div class="div36">
            <div class="div011">第一块</div>
            <div class="div012">滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴
            </div>
            <div class="div013">第三块</div>
            <div class="div014">第四块</div>
        </div>

        <div class="div40">
            <div class="div011">第一块</div>
            <div class="div012">第二块
            </div>
            <div class="div013">第三块</div>
            <div class="div014">第四块</div>
        </div>

        <div class="div42">
            <div class="div011">第一块</div>
            <div class="div012">第二块
            </div>
            <div class="div013">第三块</div>
            <div class="div014">第四块</div>
        </div>

        <div class="div44">
            <div class="div011">第一块</div>
            <div class="div012">第二块
            </div>
            <div class="div013">第三块</div>
            <div class="div014">第四块</div>
        </div>

        <div class="div50">
            <div class="title">标题，居中不定高</div>
            <div class="wrapper">
                <div class="div012">左侧章节导航，固定宽度</div>
                <div class="div013">文章内容，不定高，不定宽</div>
            </div>
            <div class="footer">底部，居中</div>
        </div>

        <div class="div60">
            <div class="head">
                <img width="100%" height="100px" src="http://siwenyu.alafe.org/assets/img/author.jpg" alt="">
            </div>
            <div class="wrap">
                <div class="name">发布者名称</div>
                <div class="line">
                    <div class="abstract">简介</div>
                    <div class="star">评分</div>
                </div>
            </div>
            <div class="btn">点赞按钮，垂直居中，定宽</div>
        </div>

        <div class="div70">
            <div class="left">左侧</div>
            <div class="wrapper">
                中间部分；两边设置了缩放不便，直到中间模块不能再缩小为止。
            </div>
            <div class="right">右侧</div>
        </div>

    </div>
    
</template>
<style lang="less">

.div70 {
    display: flex;
    border: 1px solid #ccc;
    width: 100% !important;
}
.div70 .left {
    flex-basis: 200px;
    border: 1px solid #ccc;

}
.div70 .wrapper {
    flex-grow: 3;
    flex-shrink: 100;
}
.div70 .right {
    flex-basis: 200px;
    border: 1px solid #ccc;
}


.div60 {
    display: flex;
    border: 1px solid #ccc;
    width: 100% !important;
    flex-direction: row;
    align-items: center;
}
.div60 .head {
    border: 1px solid #ccc;
    flex-basis: 100px;
    height: 100px;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
}
.div60 .head img {
    border-radius: 100px;
}

.div60 .wrap {
    align-items: baseline;
    justify-content: flex-start;
    flex-grow: 2;
    border: 1px solid #ccc;
}

.div60 .wrap .line {
    display: flex;
}
.div60 .wrap .line div {
    margin-right: 15px;
    border: 1px solid #ccc;
}
.div60 .btn {
    height: 100px;
    width: 100px;
    border: 1px solid #ccc;
}



.div50 {
    display: flex;
    border: 1px solid #ccc;
    width: 100% !important;
    flex-direction: column;
}
.div50 .title {
    border: 1px solid red;
    width: 200px;
    align-self: center;
}
.div50 .wrapper {
    border: 1px solid blue;
    height: 50px;
    display: flex;
    flex-direction: row;
    min-height: 200px;
}
.div50 .wrapper .div012 {
    flex-basis: 300px;
    border: 1px solid #ccc;
}
.div50 .wrapper .div013 {
    flex-grow: 2;
    border: 1px solid #ccc;
}
.div50 .footer {
    border: 1px solid black;
    width: 300px;
    align-self: center;
}

.div44 {
    display: flex;
    border: 1px solid #ccc;
    width: 400px !important;
}
.div44 .div011 {
    border: 1px solid red;
    width: 200px;
}
.div44 .div012 {
    border: 1px solid blue;
    height: 50px;
    width: 200px;
    align-self: center;
}
.div44 .div013 {
    border: 1px solid black;
    width: 300px;
}
.div44 .div014 {
    border: 1px solid black;
    width: 300px;
}

.div44 {
    display: flex;
    border: 1px solid #ccc;
    width: 400px !important;
}
.div42 .div011 {
    border: 1px solid red;
    width: 200px;
    flex: none;
}
.div42 .div012 {
    border: 1px solid blue;
    height: 50px;
    width: 200px;
}
.div42 .div013 {
    border: 1px solid black;
    width: 300px;
}
.div42 .div014 {
    border: 1px solid black;
    width: 300px;
}


.div40 {
    display: flex;
    border: 1px solid #ccc;
    width: 1200px !important;
}
.div40 .div011 {
    border: 1px solid red;
    width: 200px;
    flex-basis: 300px;
}
.div40 .div012 {
    border: 1px solid blue;
    height: 50px;
    width: 200px;
}
.div40 .div013 {
    border: 1px solid black;
    width: 300px;
}
.div40 .div014 {
    border: 1px solid black;
    width: 300px;
}



.div36 {
    display: flex;
    border: 1px solid #ccc;
    width: 400px !important;
}
.div36 .div011 {
    border: 1px solid red;
    width: 200px;
}
.div36 .div012 {
    border: 1px solid blue;
    height: 50px;
    width: 200px;
    flex-shrink: 2;
}
.div36 .div013 {
    border: 1px solid black;
    width: 300px;
}

.div36 .div014 {
    border: 1px solid black;
    width: 300px;
}



.div34 {
    display: flex;
    border: 1px solid #ccc;
    width: 600px !important;
}
.div34 .div011 {
    border: 1px solid red;
    flex-grow: 1;
}
.div34 .div012 {
    border: 1px solid blue;
    height: 50px;
}
.div34 .div013 {
    border: 1px solid black;
    width: 100px;
}

.div30 {
    display: flex;
    border: 1px solid #ccc;
}
.div30 .div011 {
    border: 1px solid red;
    order: 3;
}
.div30 .div012 {
    border: 1px solid blue;
    height: 50px;
}
.div30 .div013 {
    border: 1px solid black;
    width: 100px;
}

    
.container {
    padding-bottom: 400px;
    > div {
        margin-top: 30px;
        width: 200px;
        height: 300px;
    }
}
.div18 {
    display: flex;
    border: 1px solid #ccc;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    width: 400px !important;
    align-content: stretch;
}
.div18 > div {
    height: 100px;
}
.div18 .div011 {
    border: 1px solid red;
}
.div18 .div012 {
    border: 1px solid blue;
    height: 50px;
}
.div18 .div013 {
    border: 1px solid rgb(236, 7, 236);
    width: 100px;
}
.div18 .div014 {
    border: 1px solid rgb(236, 7, 236);
    width: 100px;
}
.div18 .div015 {
    border: 1px solid rgb(236, 7, 236);
    width: 100px;
}
.div18 .div016 {
    border: 1px solid rgb(236, 7, 236);
    width: 20px;
    height: 100px;
}
.div18 .div017 {
    border: 1px solid rgb(236, 7, 236);
    width: 50px;
}

.div11 {
    display: flex;
    border: 1px solid #ccc;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    .div011 {
        border: 1px solid red;
    }
    .div012 {
        border: 1px solid blue;
        height: 80px;
    }
    .div013 {
        border: 1px solid rgb(236, 7, 236);
        height: 100px;;
    }
}

.div6 {
    display: flex;
    border: 1px solid #ccc;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    .div011 {
        border: 1px solid red;
        height: 50px;
        width: 50px;
    }
    .div012 {
        border: 1px solid blue;
        height: 80px;
    }
    .div013 {
        border: 1px solid rgb(236, 7, 236);
        height: 100px;;
    }
}


.div5 {
    display: flex;
    border: 1px solid #ccc;
    flex-direction: column;
    flex-wrap: wrap;
    height: 70px !important;

    .div011 {
        border: 1px solid red;
    }
    .div012 {
        border: 1px solid blue;
    }
    .div013 {
        border: 1px solid rgb(236, 7, 236);
    }
}

.div2 {
    display: flex;
    border: 1px solid #ccc;
    flex-direction: row;
    width: 200px;
    
    flex-wrap: wrap-reverse;

    .div011 {
        border: 1px solid red;
    }
    .div012 {
        border: 1px solid blue;
    }
    .div013 {
        border: 1px solid rgb(236, 7, 236);
    }
}


.div1 {
    display: flex;
    border: 1px solid #ccc;
    flex-direction: row-reverse;

    .div011 {
        border: 1px solid red;
    }
    .div012 {
        border: 1px solid blue;
    }
    .div013 {
        border: 1px solid rgb(236, 7, 236);
    }
}


</style>

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
        console.log(this);
        setTimeout(() => {
            
        }, 1000)
        
        
        
    },
    computed: {
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

