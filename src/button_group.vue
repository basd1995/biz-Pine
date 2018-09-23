<template>
    <div class="p-button-group">
        <slot></slot>
    </div>
</template>

<script></script>
<style lang="scss">
    .p-button-group{
        display: inline-flex;
        vertical-align: middle;
        > .p-button{
            border-radius: 0;
            margin-right: -1px;
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