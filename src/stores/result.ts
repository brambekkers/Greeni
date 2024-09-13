import { ref, computed } from 'vue';

import { defineStore } from 'pinia';
import { useRoute } from 'vue-router';

// data
import DideData from '../assets/data/dide/greenScoreData.json';
import SanderData from '../assets/data/sander/greenScoreData.json';
import SophiaData from '../assets/data/sophia/greenScoreData.json';

export const useResultStore = defineStore('result', () => {
  const visible = ref(true);

  const route = useRoute();

  const resultPerson = computed(() => {
    const person = route.params?.person?.[0] || ('dide' as string);
    const personlowercase = person?.toLowerCase();

    if (personlowercase === 'dide') {
      return DideData;
    } else if (personlowercase === 'sander') {
      return SanderData;
    } else if (personlowercase === 'sophia') {
      return SophiaData;
    }
  });

  return { visible, resultPerson };
});
