import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import dideStatements from '../assets/data/dide/bankstatements.json';
import sanderStatements from '../assets/data/sander/bankstatements.json';
import sophiaStatements from '../assets/data/sophia/bankstatements.json';

export const useStatementstore = defineStore('statements', () => {
  const statementData: any = ref([]);

  function fetchStatements(person: string | undefined) {
    console.log(person);
    switch (person) {
      case 'sander':
        statementData.value = sanderStatements;
        return;
      case 'sophia':
        statementData.value = sophiaStatements;
        return;
      default:
        statementData.value = dideStatements;
        return;
    }
  }

  return { statementData, fetchStatements };
});
