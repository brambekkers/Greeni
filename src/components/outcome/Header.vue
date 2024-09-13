<template>
  <div class="h-40 bg-primary flex justify-center items-center" style="clip-path: ellipse(130% 238% at 50% -150%)">
    <h2 class="text-3xl font-bold text-[white] font-mono text-center -mt-6">These are your results</h2>
    <Button icon="pi pi-times" class="!absolute top-2 right-2 !bg-[transparent] !border-none hover:scale-105" @click="close" />
  </div>
</template>

<script setup lang="ts">
import { useGreeniStore } from '@/stores/greeni';
import { useResultStore } from '@/stores/result';

import { storeToRefs } from 'pinia';

const { status } = storeToRefs(useGreeniStore());
const { visible } = storeToRefs(useResultStore());

const close = () => {
  status.value = 'leave';
  visible.value = false;
};
</script>
