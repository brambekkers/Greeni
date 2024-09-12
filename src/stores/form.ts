import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useFormStore = defineStore('form', () => {
  const formVisible = ref<boolean>(false);

  return { formVisible };
});
