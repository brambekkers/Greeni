<script setup>
import { watch, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import { useStatementstore } from '../stores/statements';
import { usePromptStore } from '../stores/prompt';
import QuestionForm from '@/components/questionForm/QuestionForm.vue';
import Outcome from '@/components/Outcome.vue';
import Greeni from '@/components/Greeni.vue';

const { statementData } = storeToRefs(useStatementstore());
const { getGenericScore, genericScoreAnswer } = storeToRefs(usePromptStore());
const route = useRoute();
async function init() {
  await useStatementstore().fetchStatements(route.params?.person?.[0]);
}

watch(statementData, async () => {
  try {
    await usePromptStore(statementData);
  } catch (error) {
    console.log(error, JSON.stringify(error));
  }
});

onMounted(() => init());
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
