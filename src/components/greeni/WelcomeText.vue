<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useGreeniStore } from '../../stores/greeni';
import Card from 'primevue/card';

defineEmits(['open']);

const { status } = storeToRefs(useGreeniStore());
</script>

<template>
  <Card class="!absolute !left-0 !top-0 !translate-x-[-100%] !translate-y-[-40%] !bg-white !text-[#005e5d] !shadow-xl !w-[25rem] !p-3 !font-mono">
    <template #content>
      <p class="mb-3">Hi, my name is <span class="font-bold"> GREENIE </span>. I'm your AI assistant. Nice to meet you!</p>
      <p class="mb-3">Can I ask you some questions?</p>
      <Button label="Sure" class="!w-full mb-2 !bg-[#005e5d] !text-white" @click="$emit('open')" />
      <Button label="No, thank you" class="!w-full !bg-[#edf7f7] !text-[#005e5d]" @click="status = 'sleep'" />
    </template>
  </Card>
</template>
