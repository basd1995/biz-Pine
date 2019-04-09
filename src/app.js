import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button_group'
import Input from './input'

Vue.component('p-button', Button);
Vue.component('p-icon', Icon);
Vue.component('p-button-group', ButtonGroup);
Vue.component('p-input', Input);

// noinspection ObjectAllocationIgnored
new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false
  },
  methods: {
    inputChange(e) {
      console.log(e.target.value);
    }
  }
});