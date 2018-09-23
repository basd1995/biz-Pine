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
import chai from 'chai'
const expect = chai.expect;
// 单元测试
{
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData:{
            icon:'setting'
        }
    });
    vm.$mount();
    let useElement = vm.$el.querySelector('use');
    let herf = useElement.getAttribute('xlink:href');
    expect(herf).to.eq('#i-setting');
    vm.$el.remove();
    vm.$destroy();
}
{
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData:{
            icon:'setting',
            loading: true
        }
    });
    vm.$mount();
    let useElement = vm.$el.querySelector('use');
    let herf = useElement.getAttribute('xlink:href');
    expect(herf).to.eq('#i-loading');
    vm.$el.remove();
    vm.$destroy();
}
{
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData:{
            icon:'setting',
            loading: true
        }
    });
    vm.$mount(div);
    let svg = vm.$el.querySelector('svg');
    let {order} = window.getComputedStyle(svg);
    expect(order).to.eq('1');
    vm.$el.remove();
    vm.$destroy();
}
{
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData:{
            icon:'setting',
            iconPosition: 'right'
        }
    });
    vm.$mount(div);
    let svg = vm.$el.querySelector('svg');
    let {order} = window.getComputedStyle(svg);
    expect(order).to.eq('2');
    vm.$el.remove();
    vm.$destroy();
}
{
    //mock
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData:{
            icon:'setting',
        }
    });
    vm.$mount();
    vm.$on('click',function () {
        console.log('1');
    });
    //希望函数被执行
    let button = vm.$el;
    button.click();
}