<script setup lang="ts">
import VueTyping from '@dmncodes/vue-typing';
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

import { useGreeniStore } from '../../stores/greeni';
import Card from 'primevue/card';

defineEmits(['open']);

const showButtons = ref(false);
const { status } = storeToRefs(useGreeniStore());
</script>

<template>
  <Card
    class="!absolute !left-0 !top-0 !translate-x-[-100%] !translate-y-[-40%] !bg-white !text-[#005e5d] !w-[25rem] !p-3 !font-mono !shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
  >
    <template #content>
      <VueTyping :sentences="['Hi, my name is ']" class="inline" :writeDelay="0" :maxTypeSpeed="5" caret="" />
      <VueTyping :sentences="['GREENIE']" class="font-bold inline" :writeDelay="800" caret="" />
      <VueTyping :sentences="[`. I'm your AI assistant. Nice to meet you!`]" class="inline" :writeDelay="1900" :maxTypeSpeed="5" caret="" />
      <VueTyping
        :sentences="[`Can I ask you some questions?`]"
        class="my-3"
        :writeDelay="3500"
        :maxTypeSpeed="5"
        caret=""
        @sentence:typed="showButtons = true"
      />
      <Button v-if="showButtons" label="Sure" class="!w-full mb-2 !bg-[#005e5d] !border-[#005e5d] !text-white" @click="$emit('open')" />
      <Button v-if="showButtons" label="No, thank you" class="!w-full !bg-[#edf7f7] !text-[#005e5d]" @click="status = 'leave'" />
    </template>
  </Card>
</template>
