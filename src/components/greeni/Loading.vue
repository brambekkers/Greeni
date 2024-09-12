<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

import { useGreeniStore } from '../../stores/greeni';

// images
import abn from '../../assets/greeni/abnSmall.png';

const { status, text } = storeToRefs(useGreeniStore());

onMounted(() => {
  setTimeout(() => {
    status.value = 'speak';
    text.value = 'message';
  }, 3000);
});
</script>

<template>
  <div class="relative">
    <img :src="abn" class="w-64 cursor-pointer" alt="Greeni loading" />
    <div class="text-sm absolute bottom-10 font-bold w-full text-center ms-1 text-[#f3c000]">Loading...</div>
  </div>
</template>
