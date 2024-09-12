<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { animate } from 'motion';
import { storeToRefs } from 'pinia';
import { useGreeniStore } from '@/stores/greeni';

// images
import happy from '@/assets/greeni/happy.png';
import angry from '@/assets/greeni/angry.png';
import jeej from '@/assets/greeni/jeej.png';
import wink from '@/assets/greeni/wink.png';
import sad from '@/assets/greeni/sad.png';
import shock from '@/assets/greeni/shock.png';

const currentFace = computed(() => {
  console.log('emotion', emotion.value);
  switch (emotion.value) {
    case 'happy':
      return happy;
    case 'angry':
      return angry;
    case 'jeej':
      return jeej;
    case 'wink':
      return wink;
    case 'sad':
      return sad;
    case 'shock':
      return shock;
    default:
      return happy;
  }
});

const { emotion, message } = storeToRefs(useGreeniStore());

const changeEmotion = () => {
  const emotions = ['happy', 'angry', 'jeej', 'wink', 'sad', 'shock'];
  const newEmotionIndex = (emotions.indexOf(emotion.value) + 1) % emotions.length;
  emotion.value = emotions[newEmotionIndex];
};

onMounted(() => {
  animate('#greeni', { x: 0, y: 20, rotate: 5 }, { duration: 2, repeat: Infinity, direction: 'alternate' });
});
</script>

<template>
  <section id="greeni" class="absolute right-10 bottom-32 text-red-600">
    <img :src="currentFace" class="w-64" alt="Greeni" @click="changeEmotion" />
  </section>
</template>
