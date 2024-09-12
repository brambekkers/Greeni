<script setup lang="ts">
import FormPage from './views/FormPage.vue';
import Greeni from '@/components/Greeni.vue';
</script>

<template>
  <main class="relative h-screen w-screen overflow-hidden">
    <img class="absolute inset-0 object-cover z-0 w-full" src="./assets/background.png" alt="Cool abn background" />
    <div class="relative z-10">
      <FormPage></FormPage>
    </div>
    <Greeni />
  </main>
</template>

<style scoped></style>
