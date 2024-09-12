<script setup>
import QuestionForm from '@/components/questionForm/QuestionForm.vue';
import Greeni from '@/components/Greeni.vue';
</script>

<template>
  <main class="relative h-screen w-screen overflow-hidden">
    <img
      class="absolute inset-0 object-cover z-0"
      src="../assets/background.png"
      alt="Cool abn background"
    />
    <div class="relative z-10">
      <QuestionForm></QuestionForm>
    </div>
    <Greeni />
  </main>
</template>
