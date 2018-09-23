import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button_group'

Vue.component('p-button',Button);
Vue.component('p-icon',Icon);
Vue.component('p-button-group',ButtonGroup);

// noinspection ObjectAllocationIgnored
new Vue({
    el: '#app',
    data:{
        loading1: false,
        loading2: false
    }
});