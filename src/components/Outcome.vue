<script setup lang="ts">
import Header from './outcome/Header.vue';
import Alert from './outcome/Alert.vue';
import Overview from './outcome/Overview.vue';
import Charts from './outcome/Charts.vue';
import WeekOverview from './outcome/WeekOverview.vue';

import { useResultStore } from '@/stores/result';

import { storeToRefs } from 'pinia';

const { visible } = storeToRefs(useResultStore());
</script>

<template>
  <Drawer
    v-model:visible="visible"
    header="These are your results"
    position="full"
    class="!bg-[#f9f9f9] !p-0 !pb-5"
    pt:header="!hidden"
    pt:root="relative !border-none"
    pt:content="!p-0 !h-full overflow-y-visible"
  >
    <div class="flex-grow mb-12">
      <!-- Header -->
      <Header />
      <section class="grid grid-cols-3 px-6 gap-6 mt-6">
        <div>
          <img src="../assets/handTree.jpg" class="w-full object-cover rounded-xl shadow-lg mb-6" />
          <WeekOverview />
        </div>
        <div class="grid col-span-2 !mx-auto flex flex-col gap-4">
          <Alert />
          <Overview />
          <Charts />
        </div>
      </section>
    </div>
  </Drawer>
</template>
