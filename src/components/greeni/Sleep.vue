<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useGreeniStore } from '../../stores/greeni';

// images
import empty from '../../assets/greeni/Empty.png';

const { status } = storeToRefs(useGreeniStore());

const wake = () => {
  status.value = 'idle';
};
</script>

<template>
  <img :src="empty" class="w-64 transition-all hover:scale-110 cursor-pointer" alt="Greeni idle" @click="wake" />
</template>
