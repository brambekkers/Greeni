<script setup lang="ts">
import { ref } from "vue";

import Drawer from "primevue/drawer";

const visible = ref(true);
</script>

<template>
  <Drawer
    v-model:visible="visible"
    header="Greeni is here, we have a couple questions for you!"
    position="full"
  >
    <p>How are you feeling today?</p>
    <div class="card flex justify-center gap-3">
      <Button label="Too bad" />
      <Button label="Hangover" />
    </div>
  </Drawer>
  <div class="absolute right-0 top-1/2 transform -translate-y-1/2 m-4">
    <Button
      label="Greeni"
      icon="pi pi-window-maximize"
      @click="visible = true"
    />
  </div>
</template>

<style scoped></style>
