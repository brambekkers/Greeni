<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { useFormStore } from '@/stores/form'
  import { useGreeniStore } from '@/stores/greeni'

  import Drawer from 'primevue/drawer'
  import Card from 'primevue/card'
  import Stepper from './Stepper.vue'

  const { visible, hasBeenSubmitted } = storeToRefs(useFormStore())
  const { status } = storeToRefs(useGreeniStore())

  const submitForm = () => {
    visible.value = false
    hasBeenSubmitted.value = true
  }

  const close = () => {
    visible.value = false

    if (hasBeenSubmitted.value) {
      status.value = 'loading'
    } else {
      status.value = 'leave'
    }
  }
</script>

<template>
  <Drawer
    v-model:visible="visible"
    position="full"
    class="!bg-[#f9f9f9] !p-0"
    pt:header="!hidden"
    pt:root="relative !border-none"
    pt:content="!p-0 !h-full overflow-y-visible"
    @hide="close">
    <div class="flex-grow">
      <div
        class="h-52 bg-primary flex justify-center items-center"
        style="clip-path: ellipse(130% 238% at 50% -150%)">
        <h2 class="text-3xl font-bold text-[white] font-mono text-center -mt-6">
          Greeni is here, <br />
          we have a couple questions for you!
        </h2>
        <Button
          icon="pi pi-times"
          class="!absolute top-2 right-2 !bg-[transparent] !border-none hover:scale-105"
          @click="close" />
      </div>

      <div class="w-full !max-w-[60rem] !mx-auto">
        <img
          src="../../assets/globe.jpeg"
          class="!max-h-[15rem] w-full object-cover rounded-xl shadow-lg" />
        <Card class="!bg-surface !pt-12 !max-w-[60rem] !mx-auto mt-6 !shadow-lg">
          <template #content>
            <Stepper @submit="submitForm()" />
          </template>
        </Card>
      </div>
    </div>
  </Drawer>
</template>
