<template>
    <div class="wrapper" :class="{error}">
        <input :value="value" type="text" :disabled="disabled" :readonly="readonly">
        <template v-if="error">
            <p-icon name="error" class="errorIcon"></p-icon>
            <span>{{error}}</span>
        </template>
    </div>
</template>
<script>
import Icon from './icon'
export default {
    comments:{
      'p-icon':Icon
    },
    name:'PineInput',
    props:{
        value:{
            type: String
        },
        disabled:{
            type: Boolean,
            default:false
        },
        readonly:{
            type: Boolean,
            default: false
        },
        error:{
            type: String,
        }
    }
}
</script>
<style lang="scss" scoped>
    $height: 32px;
    $font-size: 12px;
    $border-radius: 4px;
    $border-color: #999;
    $border-color-hover: #666;
    $box-shadow:rgba(0,0,0,.3);
    $red: #F1453D;
    .wrapper{
        font-size: $font-size;display: inline-flex;align-items: center;
        > :not(:last-child){ margin-right: .5em;}
        > input{height: 32px;border: 1px solid $border-color;border-radius: $border-radius;padding: 0 8px;
            &:hover{border-color: $border-color-hover;}
            &:focus{box-shadow: inset 0 1px 1px $box-shadow;outline: none;}
            &[disabled],&[readonly]{border-color: #aaa;color: #aaa;cursor: not-allowed;}
        }
        &.error{
            > input{border-color: $red;}
            > span{color:$red;}
        }
        .errorIcon{fill: $red;}
    }
</style>