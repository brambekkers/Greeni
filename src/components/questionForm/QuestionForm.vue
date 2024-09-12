<script setup lang="ts">
import { useFormStore } from '@/stores/form';
import Drawer from 'primevue/drawer';
import Stepper from './Stepper.vue';

const { formVisible } = storeToRefs(useFormStore());
import { storeToRefs } from 'pinia';
</script>

<template>
  <Drawer v-model:visible="formVisible" header="Greeni is here, we have a couple questions for you!" position="full">
    <Stepper></Stepper>
  </Drawer>
</template>

