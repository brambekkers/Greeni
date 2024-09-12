<script setup>
import FormPage from '../views/FormPage.vue';
import Greeni from '@/components/Greeni.vue';
import { useStatementstore } from '../stores/statements';
import { useRoute } from 'vue-router';

const { statements, fetchStatements } = useStatementstore();

const route = useRoute();
fetchStatements(route.params.person[0]);
</script>

<template>
  <main class="relative h-screen w-screen overflow-hidden">
    <img
      class="absolute inset-0 object-cover z-0"
      src="../assets/background.png"
      alt="Cool abn background"
    />
    <div class="relative z-10">
      <FormPage></FormPage>
    </div>
    <Greeni />
  </main>
</template>
