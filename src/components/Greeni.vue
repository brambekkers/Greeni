<script setup lang="ts">
import { onMounted, computed, watch } from 'vue';
import { animate } from 'motion';
import { storeToRefs } from 'pinia';
import { useGreeniStore } from '../stores/greeni';
import { useFormStore } from '../stores/form';

// Texts
import WelcomeText from './greeni/WelcomeText.vue';
import SleepText from './greeni/SleepText.vue';

import Idle from './greeni/Idle.vue';
import Sleep from './greeni/Sleep.vue';

// images
import happy from '../assets/greeni/happy.png';
import angry from '../assets/greeni/angry.png';
import jeej from '../assets/greeni/jeej.png';
import wink from '../assets/greeni/wink.png';
import sad from '../assets/greeni/sad.png';
import shock from '../assets/greeni/shock.png';

const { face, status, text, message } = storeToRefs(useGreeniStore());
const { formVisible } = storeToRefs(useFormStore());

const currentFace = computed(() => {
  switch (face.value) {
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

const changeFace = () => {
  const faces = ['happy', 'angry', 'jeej', 'wink', 'sad', 'shock'];
  const newFaceIndex = (faces.indexOf(face.value) + 1) % face.length;
  face.value = faces[newFaceIndex];
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
};

const animationSleep = () => {
  animate('#greeni', { x: 100, y: 170, scale: 0.4 }, { duration: 0.7 });
};

watch(formVisible, async (isVisible) => {
  if (!isVisible) {
    await resetAnimation();
    animationIdle();
  }
});

const sleepStatus = async () => {
  text.value = 'sleep';
  await resetAnimation();
  setTimeout(() => {
    animationSleep();
    text.value = 'none';
  }, 3000);
};

const idleStatus = async () => {
  text.value = 'none';
  await resetAnimation();
  animationIdle();
};

watch(status, async (s) => {
  if (s === 'sleep') sleepStatus();
  if (s === 'idle') idleStatus();
});

onMounted(() => {
  animationIdle();
});
</script>

<template>
  <section id="greeni" class="absolute right-10 bottom-32 text-red-600">
    <Sleep v-if="status === 'sleep'" />
    <Idle v-if="status === 'idle'" />
    <!-- <img v-else :src="currentFace" class="w-64" alt="Greeni" @click="openScreen" /> -->
    <WelcomeText v-if="text === 'welcome'" @open="openScreen" />
    <SleepText v-if="text === 'sleep'" />
  </section>
</template>
