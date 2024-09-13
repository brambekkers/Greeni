<script setup lang="ts">
import Chart from 'primevue/chart';
import { ref, onMounted } from 'vue';
import { useResultStore } from '@/stores/result';
import { storeToRefs } from 'pinia';
import Card from 'primevue/card';

const { resultPerson, resultPersonStatement, transactions, transactionDate, months, diningAmounts, transportationAmounts, groceriesAmounts } = storeToRefs(
  useResultStore(),
);

onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
  const documentStyle = getComputedStyle(document.documentElement);

  return {
    labels: months.value,
    datasets: [
      {
        type: 'bar',
        label: 'Dining',
        backgroundColor: documentStyle.getPropertyValue('--p-cyan-500'),
        data: diningAmounts.value,
      },
      {
        type: 'bar',
        label: 'Groceries',
        backgroundColor: documentStyle.getPropertyValue('--p-gray-500'),
        data: groceriesAmounts.value,
      },
      {
        type: 'bar',
        label: 'Transportation',
        backgroundColor: documentStyle.getPropertyValue('--p-orange-500'),
        data: transportationAmounts.value,
      },
    ],
  };
};
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--p-text-color');
  const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
  const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

  return {
    maintainAspectRatio: false,
    aspectRatio: 1,
    plugins: {
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      legend: {
        labels: {
          color: textColor,
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
      y: {
        stacked: true,
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
    },
  };
};
</script>

<template>
  <Card class="!shadow-xl">
    <template #title>
      <h3 class="mb-4">The top three categories on your monthly statement</h3>
    </template>
    <template #content>
      <Chart type="bar" :data="chartData" :options="chartOptions" class="h-[30rem]" />
    </template>
  </Card>
</template>
