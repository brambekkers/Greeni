<script setup lang="ts">
import { onMounted, computed, watch } from 'vue';
import { animate } from 'motion';
import { storeToRefs } from 'pinia';
import { useGreeniStore } from '@/stores/greeni';
import { useFormStore } from '@/stores/form';
import { useResultStore } from '@/stores/result';

// Texts
import WelcomeText from './textBaloon/Welcome.vue';
import SleepText from './textBaloon/Sleep.vue';
import ResultText from './textBaloon/Result.vue';
import IdleText from './textBaloon/Idle.vue';

import Idle from './greeni/Idle.vue';
import Sleep from './greeni/Sleep.vue';
import Loading from './greeni/Loading.vue';
import Speak from './greeni/Speak.vue';

const { status, text } = storeToRefs(useGreeniStore());
const { visible: formVisible } = storeToRefs(useFormStore());
const { visible: outcomeVisible } = storeToRefs(useResultStore());

const openScreen = async (type) => {
  // remove current animation
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const x = -(windowWidth / 2 - 150);
  const y = -(windowHeight / 1.7);
  const scale = (windowWidth / 256) * 3;

  text.value = 'none';
  animate('#greeni', { x, y, scale, rotate: 0, opacity: 0 }, { duration: 0.5 });

  if (type === 'form') {
    formVisible.value = true;
  }
  if (type === 'result') {
    outcomeVisible.value = true;
  }
};

const resetAnimation = async () => {
  await animate('#greeni', { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.2 }).finished;
};

const animationIdle = () => {
  animate('#greeni', { x: 0, y: 10 }, { duration: 2, repeat: Infinity, direction: 'alternate' });
};

const animationSleep = () => {
  animate('#greeni', { x: 100, y: 170, scale: 0.4 }, { duration: 0.7 });
};

const animationLoad = () => {
  animate('#greeni', { rotate: 360 }, { duration: 2, repeat: Infinity });
};

const leaveStatus = async () => {
  text.value = 'sleep';
  status.value = 'speak';
  await resetAnimation();
};

const idleStatus = async () => {
  text.value = 'idle';

  await resetAnimation();
  animationIdle();
};

const speakStatus = async () => {
  await resetAnimation();
  animationIdle();
};

const loadingStatus = async () => {
  await resetAnimation();
  animationIdle();
};

const loadStatus = async () => {
  text.value = 'none';
  await resetAnimation();
  animationLoad();
};

watch(status, async (s) => {
  if (s === 'leave') leaveStatus();
  if (s === 'sleep') animationSleep();
  if (s === 'idle') idleStatus();
  if (s === 'loading') loadStatus();
  if (s === 'speak') speakStatus();
  if (s === 'loading') loadingStatus();
});

onMounted(() => {
  animationIdle();
});
</script>

<template>
  <section id="greeni" class="absolute right-10 bottom-32 text-red-600">
    <!-- Greeni -->
    <Sleep v-if="status === 'sleep'" />
    <Idle v-if="status === 'idle'" />
    <Loading v-if="status === 'loading'" />
    <Speak v-if="status === 'speak'" />
    <!-- Text baloon -->
    <WelcomeText v-if="text === 'welcome'" @open="openScreen('form')" />
    <SleepText v-if="text === 'sleep'" />
    <ResultText v-if="text === 'message'" @open="openScreen('result')" />
    <IdleText v-if="text === 'idle'" @open="openScreen('result')" />
  </section>
</template>
