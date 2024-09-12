import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

type Emotion = 'happy' | 'shock' | 'sad' | 'angry' | 'jeej' | 'wink';

export const useGreeniStore = defineStore('greeni', () => {
  const emotion = ref<Emotion>('happy');
  const message = ref<string>('');

  const showMessage = computed(() => message.value);

  return { emotion, message, showMessage };
});
