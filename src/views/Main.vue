<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStatementstore } from '../stores/statements';
import QuestionForm from '@/components/questionForm/QuestionForm.vue';
import Outcome from '@/components/Outcome.vue';
import Greeni from '@/components/Greeni.vue';

const route = useRoute();

useStatementstore().fetchStatements(route.params?.person?.[0]);
</script>

<template>
  <main class="relative h-screen w-screen overflow-hidden">
    <img
      class="absolute inset-0 object-cover z-0 w-full"
      src="../assets/background.png"
      alt="Cool abn background"
    />
    <div class="relative z-10">
      <QuestionForm />
      <Outcome />
    </div>
    <Greeni />
  </main>
</template>
