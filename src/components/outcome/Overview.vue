<script setup lang="ts">
import Card from 'primevue/card';

import { useResultStore } from '@/stores/result';
import { storeToRefs } from 'pinia';

const { resultPerson } = storeToRefs(useResultStore());
</script>

<template>
  <Card>
    <template #title>
      <h3>Total overview</h3>
      <p>Total 48.5% Growth 😎 this month</p>
    </template>
    <template #content>{{ resultPerson }}</template>
  </Card>
</template>
