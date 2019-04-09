import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button_group'
import Input from './input'
import Row from './row'
import Col from './col'

Vue.component('p-button', Button);
Vue.component('p-icon', Icon);
Vue.component('p-button-group', ButtonGroup);
Vue.component('p-input', Input);
Vue.component('p-row', Row);
Vue.component('p-col', Col);

// noinspection ObjectAllocationIgnored
new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    message: 'hi'
  },
  methods: {
    inputChange(e) {
      console.log(e.target.value);
    }
  }
});
