<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted, computed, onUnmounted, ref } from 'vue';

import { useGreeniStore } from '../../stores/greeni';

// images
import happy from '../../assets/greeni/happy.png';
import empty from '../../assets/greeni/Empty.png';

const { face, status } = storeToRefs(useGreeniStore());

const currentFace = computed(() => {
  switch (face.value) {
    case 'happy':
      return happy;
    case 'empty':
      return empty;
  }
});

const wake = () => {
  status.value = 'idle';
};

onMounted(() => {
  setTimeout(() => {
    face.value = 'empty';
  }, 5000);
});
</script>

<template>
  <img :src="currentFace" class="w-64 transition-all hover:scale-110 cursor-pointer" alt="Greeni idle" @click="wake" />
</template>
