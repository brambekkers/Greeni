<template>
  <Panel header="Topics" pt:header="!text-xl" class="!p-4 !bg-[white] !shadow-xl">
    <div class="grid grid-cols-3 gap-6">
      <div v-for="{ value, label, key } in list" :key="key" class="flex flex-col justify-center items-center">
        <Knob :model-value="value" :stroke-width="8" :size="125" :value-template="(v) => `${v}%`" />
        <p class="text-sm text-nowrap">{{ label }}</p>
      </div>
    </div>
  </Panel>
</template>

<script setup lang="ts">
import Knob from 'primevue/knob';
import Panel from 'primevue/panel';

import { computed } from 'vue';

const list = computed(() => [
  {
    label: 'Clothing',
    value: 20,
    key: 'clothing',
  },
  {
    label: 'Utilities',
    value: 20,
    key: 'education',
  },
  {
    label: 'Transport',
    value: 10,
    key: 'transport',
  },
  {
    label: 'Groceries',
    value: 40,
    key: 'groceries',
  },
  {
    label: 'Miscellaneous',
    value: 45,
    key: 'miscellaneous',
  },
]);
</script>
