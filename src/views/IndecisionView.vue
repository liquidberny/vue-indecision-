<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>
    <!-- Chat Messages -->
    <ChatMessages :messages="messages"/>
    <!-- Chat Text Box -->
    <ChatTextbox />
  </div>
</template>
<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue';
import ChatTextbox from '@/components/chat/ChatTextbox.vue';
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
</script>
