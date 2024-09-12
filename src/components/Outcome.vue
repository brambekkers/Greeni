<script setup lang="ts">
  import Knob from 'primevue/knob'
  import Panel from 'primevue/panel'
  import Message from 'primevue/message'
  import { useGreeniStore } from '@/stores/greeni'
  import { useResultStore } from '@/stores/result'

  import { computed } from 'vue'
  import { storeToRefs } from 'pinia'

  const { status } = storeToRefs(useGreeniStore())
  const { visible } = storeToRefs(useResultStore())

  const close = () => {
    status.value = 'leave'
    visible.value = false
  }

  const list = computed(() => [
    {
      label: 'Clothing',
      value: 20,
      key: 'clothing'
    },
    {
      label: 'Utilities',
      value: 20,
      key: 'education'
    },
    {
      label: 'Transport',
      value: 10,
      key: 'transport'
    },
    {
      label: 'Groceries',
      value: 40,
      key: 'groceries'
    },
    {
      label: 'Miscellaneous',
      value: 45,
      key: 'miscellaneous'
    }
  ])
</script>

<template>
  <Drawer
    v-model:visible="visible"
    header="These are your results"
    position="full"
    class="!bg-[#f9f9f9] !p-0"
    pt:header="!hidden"
    pt:root="relative !border-none"
    pt:content="!p-0 !h-full overflow-y-visible">
    <div class="flex-grow">
      <!-- Header -->
      <div
        class="h-52 bg-primary flex justify-center items-center"
        style="clip-path: ellipse(130% 238% at 50% -150%)">
        <h2 class="text-3xl font-bold text-[white] font-mono text-center -mt-6">These are your results</h2>
        <Button
          icon="pi pi-times"
          class="!absolute top-2 right-2 !bg-[transparent] !border-none hover:scale-105"
          @click="close" />
      </div>
      <section class="grid grid-cols-3 px-6 gap-6">
        <img
          src="../assets/handTree.jpg"
          class="w-full object-cover rounded-xl shadow-lg" />
        <div class="grid col-span-2 !mx-auto">
          <Message
            severity="secondary"
            class="mb-3 !p-4">
            <h3 class="text-xl font-bold">Description</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis et molestias ut, illo maiores ipsum
            perspiciatis distinctio nemo nesciunt a consequatur doloribus rerum alias aperiam illum dolor. Dicta, iure
            deserunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis et molestias ut, illo maiores
            ipsum perspiciatis distinctio nemo nesciunt a consequatur doloribus rerum alias aperiam illum dolor. Dicta,
            iure deserunt?
          </Message>
          <Panel
            header="Topics"
            pt:header="!text-xl"
            class="!p-4 !bg-[white]">
            <div class="grid grid-cols-3 gap-6">
              <div
                v-for="{ value, label, key } in list"
                :key="key"
                class="flex flex-col justify-center items-center">
                <Knob
                  :model-value="value"
                  :stroke-width="8"
                  :size="125"
                  :value-template="(v) => `${v}%`" />
                <p class="text-sm text-nowrap">{{ label }}</p>
              </div>
            </div>
          </Panel>
        </div>
      </section>
    </div>
  </Drawer>
</template>
