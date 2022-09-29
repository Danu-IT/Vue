import { mount } from '@vue/test-utils'
import Calc from '../../src/components/Calc'

describe('Calc testing', () => {
    test('Test first operator', () => {
        const wrapper = mount(Calc);
        const op1Input = wrapper.find('input[name=op1]');

        op1Input.setValue(1);

        expect(wrapper.vm.op1).toBe(1);
    })

    test('Test second operator', () => {
        const wrapper = mount(Calc);
        const op2Input = wrapper.find('input[name=op2]');

        op2Input.setValue(4);

        expect(wrapper.vm.op2).toBe(4);
    })

    test('Test sum', () => {
        const wrapper = mount(Calc);
        const op1Input = wrapper.find('input[name=op1]')
        const op2Input = wrapper.find('input[name=op2]')
        const sumButton = wrapper.find('button[name="+"]')

        op1Input.setValue(1)
        op2Input.setValue(2)

        sumButton.trigger('click')

        expect(wrapper.vm.result).toBe(3);
    })

    test('Test sub', () => {
        const wrapper = mount(Calc);
        const op1Input = wrapper.find('input[name=op1]')
        const op2Input = wrapper.find('input[name=op2]')
        const sumButton = wrapper.find('button[name="-"]')

        op1Input.setValue(6)
        op2Input.setValue(2)

        sumButton.trigger('click')

        expect(wrapper.vm.result).toBe(4);
    })

    test('Test mult', () => {
        const wrapper = mount(Calc);
        const op1Input = wrapper.find('input[name=op1]')
        const op2Input = wrapper.find('input[name=op2]')
        const sumButton = wrapper.find('button[name="*"]')

        op1Input.setValue(3)
        op2Input.setValue(2)

        sumButton.trigger('click')

        expect(wrapper.vm.result).toBe(6);
    })

    test('Test div', () => {
        const wrapper = mount(Calc);
        const op1Input = wrapper.find('input[name=op1]')
        const op2Input = wrapper.find('input[name=op2]')
        const sumButton = wrapper.find('button[name="/"]')

        op1Input.setValue(4)
        op2Input.setValue(2)

        sumButton.trigger('click')

        expect(wrapper.vm.result).toBe(2);
    })

    test('Test pow', () => {
        const wrapper = mount(Calc);
        const op1Input = wrapper.find('input[name=op1]')
        const op2Input = wrapper.find('input[name=op2]')
        const sumButton = wrapper.find('button[name="**"]')

        op1Input.setValue(4)
        op2Input.setValue(2)

        sumButton.trigger('click')

        expect(wrapper.vm.result).toBe(16);
    })

    test('Test divInt', () => {
        const wrapper = mount(Calc);
        const op1Input = wrapper.find('input[name=op1]')
        const op2Input = wrapper.find('input[name=op2]')
        const sumButton = wrapper.find('button[name="//"]')

        op1Input.setValue(5)
        op2Input.setValue(2)

        sumButton.trigger('click')

        expect(wrapper.vm.result).toBe(2);
    })
})
