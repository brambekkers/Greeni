<script setup lang="ts">
import { storeToRefs } from 'pinia';

import Card from 'primevue/card';
import VueTyping from '@dmncodes/vue-typing';
import { useGreeniStore } from '@/stores/greeni';

const emit = defineEmits(['sleep']);
const { text, status } = storeToRefs(useGreeniStore());

const afterTextTyped = () => {
  setTimeout(() => {
    text.value = 'none';
    status.value = 'sleep';
    emit('sleep');
  }, 2000);
};
</script>

<template>
  <Card class="!absolute !left-0 !top-0 !translate-x-[-100%] !translate-y-[-10%] !bg-white !text-[#005e5d] !shadow-xl !w-[20rem] !p-3 !font-mono">
    <template #content>
      <VueTyping
        :sentences="['Oke, good luck today. Im here in the bottom if you need me.']"
        class="inline"
        :writeDelay="0"
        :maxTypeSpeed="10"
        caret=""
        @sentence:typed="afterTextTyped"
      />
    </template>
  </Card>
</template>
