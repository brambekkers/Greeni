import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import dideStatements from '../assets/data/dide/bankstatements.json';
import sanderStatements from '../assets/data/sander/bankstatements.json';
import sophiaStatements from '../assets/data/sophia/bankstatements.json';

export const useStatementstore = defineStore('statements', () => {
  const statementData: any = ref([]);

  function fetchStatements(person: string | undefined) {
    switch (person) {
      case 'sander':
        statementData.value = JSON.stringify(sanderStatements);
        return;
      case 'sophia':
        statementData.value = JSON.stringify(sophiaStatements);
        return;
      default:
        statementData.value = JSON.stringify(dideStatements);
        return;
    }
  }

  return { statementData, fetchStatements };
});
