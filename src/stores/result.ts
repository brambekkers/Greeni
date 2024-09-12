import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useResultStore = defineStore('result', () => {
  const visible = ref(false);

  return { visible };
});
