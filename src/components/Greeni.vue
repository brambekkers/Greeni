<script setup lang="ts">
import { onMounted, computed, watch } from 'vue';
import { animate } from 'motion';
import { storeToRefs } from 'pinia';
import { useGreeniStore } from '../stores/greeni';
import { useFormStore } from '../stores/form';

// images
import happy from '../assets/greeni/happy.png';
import angry from '../assets/greeni/angry.png';
import jeej from '../assets/greeni/jeej.png';
import wink from '../assets/greeni/wink.png';
import sad from '../assets/greeni/sad.png';
import shock from '../assets/greeni/shock.png';

const { emotion, message } = storeToRefs(useGreeniStore());
const { formVisible } = storeToRefs(useFormStore());

const currentFace = computed(() => {
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

const changeEmotion = () => {
  const emotions = ['happy', 'angry', 'jeej', 'wink', 'sad', 'shock'];
  const newEmotionIndex = (emotions.indexOf(emotion.value) + 1) % emotions.length;
  emotion.value = emotions[newEmotionIndex];
};

const openScreen = async () => {
  // remove current animation
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const x = -(windowWidth / 2 - 150);
  const y = -(windowHeight / 1.7);
  const scale = (windowWidth / 256) * 3;

  await animate('#greeni', { x, y, scale, rotate: 0 }, { duration: 0.5 }).finished;
  formVisible.value = true;
};

const resetAnimation = async () => {
  await animate('#greeni', { x: 0, y: 0, rotate: 0, scale: 1 }, { duration: 0.2 }).finished;
};

const animationIdle = () => {
  animate('#greeni', { x: 0, y: 10 }, { duration: 2, repeat: Infinity, direction: 'alternate' });
  setInterval(changeEmotion, 5000);
};

watch(formVisible, async (isVisible) => {
  if (!isVisible) {
    await resetAnimation();
    animationIdle();
  }
});

onMounted(() => {
  animationIdle();
});
</script>

<template>
  <section id="greeni" class="absolute right-10 bottom-32 text-red-600">
    <img :src="currentFace" class="w-64" alt="Greeni" @click="openScreen" />
  </section>
</template>
