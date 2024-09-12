import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useFormStore = defineStore('form', () => {
  const visible = ref<boolean>(false);

  return { visible };
});
