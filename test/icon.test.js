const expect = chai.expect;
import Vue from 'vue'
import Icon from '../src/icon'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Icon组件', () => {
    it('存在.', () => {
        expect(Icon).to.be.exist;
    })
    it('可以设置icon.', () => {
        const Constructor = Vue.extend(Icon);
        const vm = new Constructor({
            propsData: {
                name: 'settings'
            }
        }).$mount();
        const useElement = vm.$el.querySelector('use');
        expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings');
        vm.$destroy();
    })
    it('icon 可以设置size', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Icon);
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                size: 2
            }
        }).$mount(div);
        const icon = vm.$el
        expect(icon.style.width).to.eq('2em');
        vm.$el.remove();
        vm.$destroy();
    })
})