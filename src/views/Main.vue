<script setup>
import { watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import { useStatementstore } from '../stores/statements';
import { usePromptStore } from '../stores/prompt';
import QuestionForm from '@/components/questionForm/QuestionForm.vue';
import Outcome from '@/components/Outcome.vue';
import Greeni from '@/components/Greeni.vue';

const { statements, fetchStatements } = storeToRefs(useStatementstore());
const { getGenericScore, genericScoreAnswer } = storeToRefs(usePromptStore());

const route = useRoute();
await fetchStatements(route.params?.person?.[0]);

watch(statements, async () => {
  await usePromptStore(statements);
});

console.log(genericScoreAnswer);
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
