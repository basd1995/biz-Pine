<template>
    <button class="p-button" :class="{[`icon-${iconPosition}`]:true}"
    @click="$emit('click')">
        <p-icon class="icon" v-if="icon && !loading" :name="icon"></p-icon>
        <p-icon class="loading icon" v-if="loading" name="loading"></p-icon>
        <span class="content">
            <slot></slot>
        </span>
    </button>
</template>

<script>
    import Icon from './icon'
    export default {
        name:'PineButton',
        components:{
          'p-icon': Icon
        },
        props:{
            icon:{},
            loading:{
                type: Boolean,
                default: false
            },
            iconPosition:{
                type: String,
                default: 'left',
                //属性检查器
                validate(value){
                    return !(value !== 'left' && value !== 'right');
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @keyframes spin {
        0%{ transform: rotate(0deg); }
        100%{ transform: rotate(360deg); }
    }
    .p-button{
        padding: 0 1em;
        font-size: var(--font-size);
        height: var(--button-height);
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        color: var(--color);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover{border-color: var(--border-color-hover);}
        &:active{background: var(--button-active-bg);}
        &:focus{outline: none;}
        > .icon{order: 1;margin-right: .2em}
        > .content{order: 2;}
        &.icon-right{
            > .icon{
                order: 2;
                margin-left: .2em;
            }
            > .content{
                order: 1;
            }
        }
        .loading{
            animation: spin 2s infinite linear;
        }
    }
</style>