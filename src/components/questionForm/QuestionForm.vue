<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useFormStore } from '@/stores/form';
import Drawer from 'primevue/drawer';
import Stepper from './Stepper.vue';

const { visible } = storeToRefs(useFormStore());
</script>

<template>
  <Drawer v-model:visible="visible" header="Greeni is here, we have a couple questions for you!" position="full" class="!bg-[#f9f9f9]">
    <Stepper></Stepper>
  </Drawer>
</template>
