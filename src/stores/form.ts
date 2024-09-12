import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useFormStore = defineStore('form', () => {
  const visible = ref(false);
  const hasBeenSubmitted = ref(false);

  return { visible, hasBeenSubmitted };
});
