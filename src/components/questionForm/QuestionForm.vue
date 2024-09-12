<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useFormStore } from '@/stores/form';
import { useGreeniStore } from '@/stores/greeni';
import { useAnswersStore} from '@/stores/answers'

import Drawer from 'primevue/drawer';
import Stepper from './Stepper.vue';

const { visible, hasBeenSubmitted } = storeToRefs(useFormStore());
const { status } = storeToRefs(useGreeniStore());
const { calculateAnswerPoint } = useAnswersStore();

const submitForm = () => {
  visible.value = false;
  hasBeenSubmitted.value = true;
  calculateAnswerPoint();
};

const test = () => {
  if (hasBeenSubmitted.value) {
    status.value = 'loading';
  } else {
    status.value = 'leave';
  }
};
</script>

<template>
  <Drawer v-model:visible="visible" header="Greeni is here, we have a couple questions for you!" position="full" class="!bg-[#f9f9f9]" @hide="test">
    <Stepper @submit="submitForm()" />
  </Drawer>
</template>
