<template>
    <div>
        <slot :data="list">  </slot>
    </div>
    
</template>

<script>

export default {
    name: 'c-list',
    
    components: {
        
    },
    props:{
        'list': {
            default: function(){
                return [1,2,3,4];
            },
            type: Array | Number
        },
    },
    data () {
        return {
            newTitle: ''
        }
    },
    methods:{
        changeInput(name) {
            
        }
    },
    mounted() {
        console.log('list组件加载');
        console.log(this.$parent.$parent);
        this.parentF();
    },
    computed: {
        
    },
    inject: ['parentF']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
