import { mount } from "@vue/test-utils";
import ChatBubble from "@/components/chat/ChatBubble.vue";

describe('<ChatBubble />', ()=>{
    test('renders own message ocrrectly', () => {
        const message = 'Hola mundo';
        const wrapper = mount(ChatBubble, {
            props:{
                message,
                itsMine: true,
            }
        });

        expect(wrapper.find('.bg-blue-200').exists()).toBe(true);
        expect(wrapper.find('.bg-blue-200').exists()).toBeTruthy();
        expect(wrapper.find('.bg-blue-200').text()).toContain(message);
    })
    test('renders response message ocrrectly', () => {
        const message = 'Hola mundo de vuelta';
        const wrapper = mount(ChatBubble, {
            props:{
                message,
                itsMine: false,
            }
        });

        expect(wrapper.find('.bg-gray-300').exists()).toBe(true);
        expect(wrapper.find('.bg-gray-300').exists()).toBeTruthy();
        expect(wrapper.find('.bg-gray-300').text()).toContain(message);

        expect(wrapper.find('img').exists()).toBe(false);
    })

    test('renders response message ocrrectly', () => {
        const message = 'Hola mundo de vuelta';
        const wrapper = mount(ChatBubble, {
            props:{
                message,
                itsMine: false,
                image:'example.jpg'
            }
        });

        expect(wrapper.find('.bg-gray-300').exists()).toBe(true);
        expect(wrapper.find('.bg-gray-200').exists()).toBe(false);


        expect(wrapper.find('.bg-gray-300').text()).toContain(message);
        //expect(wrapper.find('img').attributes('src')).toBe(true);
    })
    

});