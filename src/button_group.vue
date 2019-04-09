<template>
    <div class="p-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'PineButtonGroup',
        mounted(){
           for(let node of this.$el.children){
               if(node.nodeName.toLowerCase() !== 'button'){
                   console.error('p-button-group 只接收 p-button 不接收' + node.nodeName.toLowerCase())
               }
           }
        }
    }
</script>
<style lang="scss" scoped>
    .p-button-group{
        display: inline-flex;
        vertical-align: middle;
        > .p-button{
            border-radius: 0;
            &:not(:first-child){
                margin-left: -1px;
            }
            &:first-child{
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }
            &:last-child{
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
            &:hover{
                position: relative;z-index: 1;
            }
        }
    }
</style>
