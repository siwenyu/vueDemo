<template>
    <div>
        <p>这是content</p>
        <slot name="slot1">默认插槽的默认内容</slot>
        <slot name="slot2">默认插槽的默认内容</slot>
        <slot>默认插槽的默认内容</slot>
        

        <!-- <p>{{contentProps}}111{{ name }}11</p> -->
        <hr>
        <!-- <p v-for="item in arr">
            {{item}}
        </p>
        <hr>
        <p v-for="item in obj">
            {{item}}
        </p> -->

        <!-- {{contentProps}}
        <input v-model="newTitle" @input="changeInput(newTitle)"> -->
    </div>
    
</template>

<script>

export default {
    name: 'c-content',
    components: {
        
    },
    props:{
        'contentProps': {
            default: 0,
            type: String | Number
        },
        'is-show': {
            default: true,
            type: Boolean
        },
        'arr': {
            default: function() {
                return [0];
            },
            type: Array
        },
        'obj': {
            default: function() {
                return {name: 'name'}
            },
            type: Object
        },
        'name': {
            default: 0,
            type: String | Number
        },
        'show': {
            default: true,
            type: Boolean
        }
    },
    data () {
        return {
            newTitle: ''
        }
    },
    methods:{
        changeInput(name) {
            console.log(name);
            this.$emit('update:contentProps', name);
        }
    },
    mounted() {
        console.log('content组件加载');
        // this.name = "改变的name";
    },
    computed: {
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
