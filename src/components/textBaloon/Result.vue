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
  <Card class="!absolute !left-0 !top-0 !translate-x-[-100%] !translate-y-[-40%] !bg-white !text-[#005e5d] !shadow-xl !w-[25rem] !p-3 !font-mono">
    <template #content>
      <VueTyping
        :sentences="['Great news! Based on your account statements we see that your sustainability score is 92. That is above average! ']"
        class="mb-3"
        :writeDelay="0"
        :maxTypeSpeed="10"
        caret=""
        @sentence:typed="showButtons = true"
      />

      <Button v-if="showButtons" label="See all my results" class="!w-full mb-2 !bg-[#005e5d] !border-[#005e5d] !text-white" @click="$emit('open')" />
      <Button v-if="showButtons" label="Please leave" class="!w-full !bg-[#edf7f7] !text-[#005e5d]" @click="status = 'leave'" />
    </template>
  </Card>
</template>
