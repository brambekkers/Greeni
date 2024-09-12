import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useAxios } from '../utils/request';

export const usePromptStore = defineStore('Prompt', () => {
  const genericScoreAnswer = ref();

  async function getGenericScore(transactions) {
    try {
      const prompt = `Using the provided TransactionArray generate JSON output that calculates a green score for each transaction and category (groceries, dining, and transport). Base the green score on a scale of 1 to 10. Per category I would like a total of the transactions, total spent and an average green score and an average green score for all categories combined. ${transactions.value}`;
      const promptAnswer = await useAxios(
        'POST',
        'https://digitaldreamgreenie-g9cqhzfaardxbfen.westeurope-01.azurewebsites.net/api/openai/generic',
        { prompt }
      );

      console.log(promptAnswer);
      genericScoreAnswer.value = promptAnswer;
    } catch (error) {
      console.log(error);
    }
  }

  return {
    genericScoreAnswer,
    getGenericScore,
  };
});
