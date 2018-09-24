<template>
    <svg class="p-icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<script>
    import './svg'
    export default {
        name:'PineIcon',
        props:['name']
    }
</script>
<style lang="scss" scoped>
    .p-icon {width: 1em;height: 1em;}
</style>