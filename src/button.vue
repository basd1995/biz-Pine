<template>
    <button class="p-button" :class="{[`icon-${iconPosition}`]:true}">
        <svg v-if="icon" class="icon">
            <use :xlink:href="`#i-${icon}`"></use>
        </svg>
        <span class="content">
            <slot></slot>
        </span>
    </button>
</template>

<script>
    export default {
        props:['icon','iconPosition']
    }
</script>

<style lang="scss">
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
        > .icon {width: 1em;height: 1em;}
        > .icon{order: 1;}
        > .content{order: 2;}
        &.icon-right{
            > .icon{
                order: 2;
            }
            > .content{
                order: 1;
            }
        }
    }
</style>