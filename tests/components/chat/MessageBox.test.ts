import MessageBox from "@/components/chat/MessageBox.vue";
import { mount } from "@vue/test-utils";

describe('<MessageBox />', () => {
    const wrapper = mount(MessageBox);
  test('renders input and button aelements correctly', () => {

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('button svg').exists()).toBe(true);

  });

  test('emits sendNessage event when button is clicked with message value', async () => {
    const message = 'Hola mundo';
    await wrapper.find('input[type="text"]').setValue(message);
    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);
    expect((wrapper.vm as any).message).toBe('');
  })
});
