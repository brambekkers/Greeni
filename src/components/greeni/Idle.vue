<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted, computed, onUnmounted, ref } from 'vue';

import { useGreeniStore } from '../../stores/greeni';

// images
import happy from '../../assets/greeni/happy.png';
import closed from '../../assets/greeni/closed.png';

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

const closedEyes = async () => {
  return new Promise((resolve) => {
    const random = Math.random() * 500 + 400;

    face.value = 'closed';
    setTimeout(resolve, random);
  });
};

onMounted(() => {
  face.value = 'happy';
  interval.value = setInterval(async () => {
    await closedEyes();
    face.value = 'happy';
  }, 7000);
});

onUnmounted(() => {
  clearInterval(interval.value);
});
</script>

<template>
  <img :src="currentFace" class="w-64" alt="Greeni idle" />
</template>
