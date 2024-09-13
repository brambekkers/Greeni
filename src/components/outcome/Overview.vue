<script setup lang="ts">
import Card from 'primevue/card';

import { useResultStore } from '@/stores/result';
import { storeToRefs } from 'pinia';

const { resultPerson, resultPersonStatement, transactions, transactionDate, months, diningAmounts} = storeToRefs(useResultStore());

console.log(transactions);
</script>

<template>
  <Card>
    <template #title>
      <h3>Total overview</h3>
      <p>Total 48.5% Growth 😎 this month</p>
    </template>
    <template #content></template>
  </Card>
</template>
