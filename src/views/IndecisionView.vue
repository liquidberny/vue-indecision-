<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>
    <!-- Chat Messages -->
    <ChatMessages :messages="messages"/>
    <!-- Chat Text Box -->
    <MessageBox @send-message="onMessage"/>
  </div>
</template>
<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import type { ChatMessage } from '@/components/interfaces/chat-message.interface';
import { ref } from 'vue';

const messages = ref<ChatMessage[]>([
  {
    id: new Date().getTime(),
    message: 'Hola niggas',
    itsMine: true,
  },
  {
    id: new Date().getTime() + 1,
    message: 'Hola wigga !!! ',
    itsMine: false,
    image: 'https://yesno.wtf/assets/yes/0-c44a7789d54cbdcad867fb7845ff03ae.gif',
  },
]);

const onMessage = ( text: string ) => {
  messages.value.push({
    id: new Date().getTime(),
    itsMine: true,
    message:text,
  })
}


</script>
