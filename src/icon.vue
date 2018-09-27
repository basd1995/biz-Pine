<template>
    <svg class="p-icon" :style="{ fill: color , width: size + 'em' , height: size + 'em'}">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<script>
    import './svg'
    export default {
        name:'PineIcon',
        props:{
            name:{
                type: String
            },
            color:{
                type: String
            },
            size:{
                type: Number,
                default: 1
            }
        }
    }
</script>
<style lang="scss" scoped>
    .p-icon {vertical-align: middle;}
</style>