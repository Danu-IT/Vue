import { mount } from '@vue/test-utils'
import TestComponent from './TestComponent'

describe('TestComponent testing', () => {
    test('Test props', () => {
        const wrapper = mount(TestComponent, {
            propsData: {
                message: 'test message'
            }
        })
        expect(wrapper.text()).toEqual('My test: test message');
        // expect(wrapper.html()).toEqual('<div>My test: test message</div>');
    })
})