import { ref, computed } from 'vue';

import { defineStore } from 'pinia';
import { useRoute } from 'vue-router';

// data
import DideData from '../assets/data/dide/greenScoreData.json';
import SanderData from '../assets/data/sander/greenScoreData.json';
import SophiaData from '../assets/data/sophia/greenScoreData.json';
import DideDataStatement from '../assets/data/dide/bankstatements.json';
import SanderDataStatement from '../assets/data/sander/bankstatements.json';
import SophiaDataStatement from '../assets/data/sophia/bankstatements.json';

export const useResultStore = defineStore('result', () => {
  const visible = ref(false);

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

  const resultPersonStatement = computed(() => {
    const person = route.params?.person?.[0] || ('dide' as string);
    const personlowercase = person?.toLowerCase();

    if (personlowercase === 'dide') {
      return DideDataStatement;
    } else if (personlowercase === 'sander') {
      return SanderDataStatement;
    } else if (personlowercase === 'sophia') {
      return SophiaDataStatement;
    }
  });

  const monthlyStatement = computed(() => resultPersonStatement.value);

  const transactions = computed(() => monthlyStatement.value?.flatMap((statement) => statement.transactions) || []);

  const transactionDate = computed(() => transactions.value?.flatMap((transaction) => transaction) || []);

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const months = computed(() => [
    ...new Set(
      transactionDate.value.map((transaction) => {
        const monthNumber = parseInt(transaction.date.split('-')[1], 10);
        return monthNames[monthNumber - 1];
      }),
    ),
  ]);

  const diningAmounts = computed(() =>
    transactions.value.filter((transaction) => transaction.category === 'dining').map((transaction) => transaction.amount_in_euros),
  );
  const groceriesAmounts = computed(() =>
    transactions.value.filter((transaction) => transaction.category === 'groceries').map((transaction) => transaction.amount_in_euros),
  );
  const transportationAmounts = computed(() =>
    transactions.value.filter((transaction) => transaction.category === 'transport').map((transaction) => transaction.amount_in_euros),
  );

  return { visible, resultPerson, resultPersonStatement, transactions, transactionDate, months, diningAmounts, groceriesAmounts, transportationAmounts };
});
