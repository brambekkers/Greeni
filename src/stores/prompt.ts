import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useAxios } from '../utils/request';

export const usePromptStore = defineStore('Prompt', () => {
  const genericScoreAnswer = ref();

  async function getGenericScore(transactions) {
    try {
      const prompt = `Using the provided JSON below generate new JSON output that calculates a green score for each category: groceries, dining, and transport. Base the green score on a scale of 1 to 10. Per category I would like a total of the transactions, an array of the transaction_id of the transactions, a total spent and an average green score and also an average green score for all categories combined. Please only provide the newly generated JSON and not an explanation. \`\`\`JSON ${transactions.value} \`\`\``;
      const promptAnswer = await useAxios(
        'POST',
        'https://digitaldreamgreenie-g9cqhzfaardxbfen.westeurope-01.azurewebsites.net/api/openai/generate',
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
