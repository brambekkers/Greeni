<script setup lang="ts">
import Card from 'primevue/card';
import Avatar from 'primevue/avatar';

import { useResultStore } from '@/stores/result';
import { storeToRefs } from 'pinia';

const { resultPerson } = storeToRefs(useResultStore());
</script>

<template>
  <Card>
    <template #title>
      <h3 class="!text-xl !font-bold">Your green score</h3>
      <p class="!text-sm !font-light">
        Average <b>{{ (resultPerson.overall_average_green_score * 10).toFixed(2) }}% green score</b> 😎
      </p>
    </template>
    <template #content>
      <div class="mt-12 grid grid-cols-3">
        <div v-for="(cat, key, i) in resultPerson.categories" class="flex gap-4">
          <div>
            <Avatar v-if="i === 0" class="!w-12 !h-12 !bg-primary !text-[white]" icon="pi pi-shopping-cart" />
            <Avatar v-if="i === 1" class="!w-12 !h-12 !bg-[#ca8b00] !text-[white]" icon="pi pi-building" />
            <Avatar v-if="i === 2" class="!w-12 !h-12 !bg-accent" icon="pi pi-car" />
          </div>
          <div>
            <h3 class="capitalize font-bold">{{ key }}</h3>
            <p class="capitalize">{{ (cat.average_green_score * 10).toFixed(0) }}%</p>
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>
