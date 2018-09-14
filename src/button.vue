<template>
    <button class="p-button">按钮</button>
</template>

<script>
    export default {

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
        &:hover{
            border-color: var(--border-color-hover);
            color: var(--color-hover);
        }
        &:active{
            background: var(--button-active-bg);
        }
        &:focus{
            outline: none;
        }
    }
</style>