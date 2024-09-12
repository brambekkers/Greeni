<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted, computed, onUnmounted, ref } from 'vue';

import { useGreeniStore } from '../../stores/greeni';

// images
import happy from '../../assets/greeni/happy.png';
import closed from '../../assets/greeni/closedMouth.png';

const { face } = storeToRefs(useGreeniStore());

const interval = ref<any>('');
const currentFace = computed(() => {
  switch (face.value) {
    case 'happy':
      return happy;
    case 'closed':
      return closed;
  }
});

const closedMouth = async () => {
  return new Promise((resolve) => {
    const random = Math.random() * 500 + 400;

    face.value = 'closed';
    setTimeout(resolve, random);
  });
};

onMounted(() => {
  face.value = 'happy';
  interval.value = setInterval(async () => {
    await closedMouth();
    face.value = 'happy';
  }, 1000);
});

onUnmounted(() => {
  clearInterval(interval.value);
});
</script>

<template>
  <img :src="currentFace" class="w-64" alt="Greeni idle" />
</template>
