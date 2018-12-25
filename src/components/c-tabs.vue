<template>
    <div>
        <el-button
        :key="item" 
        v-for="(item, index) in btns"
        @click="changebutton(index)">{{ item }}</el-button>
        
        <div v-if="showN">
            {{ list[0].label }}<br>
            <keep-alive>
            <CInput ></CInput>
            </keep-alive>
        </div>
        
        <div v-else>
            {{ list[1].label }}<br>
            <input>
        </div>
    </div>
    
</template>

<script>
import {mixinTest1} from '../common/js/mixin';
export default {
    name: 'c-tabs',
    // mixins:[mixinTest1],
    components: {
        
    },
    props:{
        
    },
    data () {
        return {
            newTitle: '',
            btns: ['name', 'age'],
            list: [
                {
                    modelV: '',
                    label: '第一个',
                    show: true
                },
                {
                    modelV: '',
                    label: '第二个',
                    show: false
                }
            ],
            showN: false
        }
    },
    methods:{
        changebutton(index) {
            // this.list[index].show = true;
            // this.list.forEach((item, indexIndex) => {
            //     console.log(item, indexIndex);
            //     console.log(index);
            //     if (indexIndex == index) {
            //         this.list[indexIndex].show = true;
            //     } else {
            //         item.show = false;
            //     }
            // })
            // console.log(this.list);
            this.showN = !this.showN;
        },
        changebuttonCo(index){

        }
    },
    mounted() {
        console.log('tab组件加载');
        console.log(this);
    },
    computed: {
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
.posts-tab {
  display: flex;
}
.posts-sidebar {
  max-width: 40vw;
  margin: 0;
  padding: 0 10px 0 0;
  list-style-type: none;
  border-right: 1px solid #ccc;
}
.posts-sidebar li {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
}
.posts-sidebar li:hover {
  background: #eee;
}
.posts-sidebar li.selected {
  background: lightblue;
}
.selected-post-container {
  padding-left: 10px;
}
.selected-post > :first-child {
  margin-top: 0;
  padding-top: 0;
}
</style>
