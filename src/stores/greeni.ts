import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

type Face = 'happy' | 'shock' | 'sad' | 'angry' | 'jeej' | 'wink' | 'closed' | 'empty';
type Status = 'idle' | 'sleep' | 'speak' | 'think' | 'error';
type Text = 'welcome' | 'sleep' | 'none';

export const useGreeniStore = defineStore('greeni', () => {
  const face = ref<Face>('happy');
  const status = ref<Status>('idle');
  const text = ref<Text>('welcome');
  const message = ref<string>('');

  const showMessage = computed(() => message.value);

  return { face, status, text, message, showMessage };
});
