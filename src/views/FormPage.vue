<script setup lang="ts">
import { useFormStore } from '../stores/form';
import Drawer from 'primevue/drawer';

const { formVisible } = storeToRefs(useFormStore());
import { storeToRefs } from 'pinia';
</script>

<template>
  <Drawer v-model:visible="formVisible" header="Greeni is here, we have a couple questions for you!" position="full">
    <p>How are you feeling today?</p>
    <div class="card flex justify-center gap-3">
      <Button label="Too bad" />
      <Button label="Hangover" />
    </div>
  </Drawer>
  <div class="absolute right-0 top-1/2 transform -translate-y-1/2 m-4">
    <Button label="Greeni" icon="pi pi-window-maximize" @click="formVisible = true" />
  </div>
</template>
