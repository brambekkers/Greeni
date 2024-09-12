<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

import Stepper from 'primevue/stepper';
import StepList from 'primevue/steplist';
import StepPanels from 'primevue/steppanels';
import StepItem from 'primevue/stepitem';
import Step from 'primevue/step';
import StepPanel from 'primevue/steppanel';
import ToggleButton from 'primevue/togglebutton';
import Divider from 'primevue/divider';
import SelectButton from 'primevue/selectbutton';
import RadioButton from 'primevue/radiobutton';

import {useAnswersStore} from "@/stores/answers"
const { 
    optionOneFirstQuestion,
    optionTwoFirstQuestion,
    optionThreeFirstQuestion,
    optionFourFirstQuestion,
    optionFiveFirstQuestion,
    valueSecondQuestion,
    optionsSecondQuestion,
    valueThirdQuestion,
    optionsThirdQuestion,
    valueFourthQuestion,
    optionsFourthQuestion,
    valueFifthQuestion,
    optionsFifthQuestion,
    valueSixthQuestion,
    optionsSixthQuestion,
  } = storeToRefs(useAnswersStore());


defineEmits(['submit']);

const activeStep = ref(1);

</script>

<template>
  <div class="card flex justify-center">
    <!--Step Bar-->
    <Stepper v-model:value="activeStep" class="basis-[40rem]">
      <StepList>
        <!--Step One-->
        <Step v-slot="{ activateCallback, value, a11yAttrs }" asChild :value="1">
          <div class="flex flex-row flex-auto gap-2" v-bind="a11yAttrs.root">
            <button class="bg-transparent border-0 inline-flex flex-col gap-2" @click="activateCallback" v-bind="a11yAttrs.header">
              <span
                :class="[
                  'rounded-full border-2 w-12 h-12 inline-flex items-center justify-center',
                  {
                    'bg-primary text-primary-contrast border-black': value <= activeStep,
                    'border-primary': value > activeStep,
                  },
                ]"
              >
                <i class="pi pi-car" :style="{ color: value <= activeStep ? '#edf7f7' : '#00716b' }" />
              </span>
            </button>
            <Divider />
          </div>
        </Step>
        <!--Step Two-->
        <Step v-slot="{ activateCallback, value, a11yAttrs }" asChild :value="2">
          <div class="flex flex-row flex-auto gap-2 pl-2" v-bind="a11yAttrs.root">
            <button class="bg-transparent border-0 inline-flex flex-col gap-2" @click="activateCallback" v-bind="a11yAttrs.header">
              <span
                :class="[
                  'rounded-full border-2 w-12 h-12 inline-flex items-center justify-center',
                  {
                    'bg-primary text-primary-contrast border-black': value <= activeStep,
                    'border-primary': value > activeStep,
                  },
                ]"
              >
                <i class="pi pi-home" :style="{ color: value <= activeStep ? '#edf7f7' : '#00716b' }" />
              </span>
            </button>
            <Divider />
          </div>
        </Step>
        <!--Step Three-->
        <Step v-slot="{ activateCallback, value, a11yAttrs }" asChild :value="3">
          <div class="flex flex-row flex-auto gap-2 pl-2" v-bind="a11yAttrs.root">
            <button class="bg-transparent border-0 inline-flex flex-col gap-2" @click="activateCallback" v-bind="a11yAttrs.header">
              <span
                :class="[
                  'rounded-full border-2 w-12 h-12 inline-flex items-center justify-center',
                  {
                    'bg-primary text-primary-contrast border-black': value <= activeStep,
                    'border-primary': value > activeStep,
                  },
                ]"
              >
                <i class="pi pi-shopping-cart" :style="{ color: value <= activeStep ? '#edf7f7' : '#00716b' }" />
              </span>
            </button>
            <Divider />
          </div>
        </Step>
        <!--Step Four-->
        <Step v-slot="{ activateCallback, value, a11yAttrs }" asChild :value="4">
          <div class="flex flex-row flex-auto gap-2 pl-2" v-bind="a11yAttrs.root">
            <button class="bg-transparent border-0 inline-flex flex-col gap-2" @click="activateCallback" v-bind="a11yAttrs.header">
              <span
                :class="[
                  'rounded-full border-2 w-12 h-12 inline-flex items-center justify-center',
                  {
                    'bg-primary text-primary-contrast border-black': value <= activeStep,
                    'border-primary': value > activeStep,
                  },
                ]"
              >
                <i class="pi pi-trash" :style="{ color: value <= activeStep ? '#edf7f7' : '#00716b' }" />
              </span>
            </button>
            <Divider />
          </div>
        </Step>
        <!--Step Five-->
        <Step v-slot="{ activateCallback, value, a11yAttrs }" asChild :value="5">
          <div class="flex flex-row flex-auto gap-2 pl-2" v-bind="a11yAttrs.root">
            <button class="bg-transparent border-0 inline-flex flex-col gap-2" @click="activateCallback" v-bind="a11yAttrs.header">
              <span
                :class="[
                  'rounded-full border-2 w-12 h-12 inline-flex items-center justify-center',
                  {
                    'bg-primary text-primary-contrast border-black': value <= activeStep,
                    'border-primary': value > activeStep,
                  },
                ]"
              >
                <i class="pi pi-chart-scatter" :style="{ color: value <= activeStep ? '#edf7f7' : '#00716b' }" />
              </span>
            </button>
            <Divider />
          </div>
        </Step>
        <!--Step Six-->
        <Step v-slot="{ activateCallback, value, a11yAttrs }" asChild :value="6">
          <div class="flex flex-row flex-auto gap-2 pl-2" v-bind="a11yAttrs.root">
            <button class="bg-transparent border-0 inline-flex flex-col gap-2" @click="activateCallback" v-bind="a11yAttrs.header">
              <span
                :class="[
                  'rounded-full border-2 w-12 h-12 inline-flex items-center justify-center',
                  {
                    'bg-primary text-primary-contrast border-black': value <= activeStep,
                    'border-primary': value > activeStep,
                  },
                ]"
              >
                <i class="pi pi-bolt" :style="{ color: value <= activeStep ? '#edf7f7' : '#00716b' }" />
              </span>
            </button>
            <Divider />
          </div>
        </Step>
        <!--Step Seven-->
        <Step v-slot="{ activateCallback, value, a11yAttrs }" asChild :value="7">
          <div class="flex flex-row pl-2" v-bind="a11yAttrs.root">
            <button class="bg-transparent border-0 inline-flex flex-col gap-2" @click="activateCallback" v-bind="a11yAttrs.header">
              <span
                :class="[
                  'rounded-full border-2 w-12 h-12 inline-flex items-center justify-center',
                  {
                    'bg-primary text-primary-contrast border-black': value <= activeStep,
                    'border-primary': value > activeStep,
                  },
                ]"
              >
                <i class="pi pi-check-circle" :style="{ color: value <= activeStep ? '#edf7f7' : '#00716b' }" />
              </span>
            </button>
          </div>
        </Step>
      </StepList>
      <!--Questions-->
      <StepPanels>
        <!--First Question-->
        <StepPanel v-slot="{ activateCallback }" :value="1">
          <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 20rem">
            <div class="text-center mt-4 mb-4 text-xl font-semibold">How do you usually commute to work or school?</div>
            <div class="flex flex-wrap justify-center gap-4">
              <ToggleButton v-model="optionOneFirstQuestion" onLabel="Car" offLabel="Car" />
              <ToggleButton v-model="optionTwoFirstQuestion" onLabel="Public Transport" offLabel="Public Transport" />
              <ToggleButton v-model="optionThreeFirstQuestion" onLabel="Bike" offLabel="Bike" />
              <ToggleButton v-model="optionFourFirstQuestion" onLabel="Walk" offLabel="Walk" />
              <ToggleButton v-model="optionFiveFirstQuestion" onLabel="Work from Home" offLabel="Work from Home" />
            </div>
          </div>
          <div class="flex p-6 justify-end">
            <Button
              label="Next"
              icon="pi pi-arrow-right"
              iconPos="right"
              @click="activateCallback(2)"
              class="!bg-[#FFD200] !border-[#FFD200] !text-[#000000]"
            />
          </div>
        </StepPanel>
        <!--Second Question-->
        <StepPanel v-slot="{ activateCallback }" :value="2">
          <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
            <div class="text-center mt-4 mb-4 text-xl font-semibold">Do you live in a house or an apartment?</div>
            <div class="flex flex-wrap justify-center gap-7">
              <i class="pi pi-home" style="font-size: 2.5rem" />
              <SelectButton v-model="valueSecondQuestion" :options="optionsSecondQuestion" aria-labelledby="basic" />
              <i class="pi pi-warehouse" style="font-size: 2.5rem" />
            </div>
          </div>
          <div class="flex p-6 justify-between">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              @click="activateCallback(1)"
              class="!bg-[#edf7f7] !border-[#10b981] !text-[#005e5d]"
            />
            <Button
              label="Next"
              icon="pi pi-arrow-right"
              iconPos="right"
              @click="activateCallback(3)"
              class="!bg-[#FFD200] !border-[#FFD200] !text-[#000000]"
            />
          </div>
        </StepPanel>
        <!--Third Question-->
        <StepPanel v-slot="{ activateCallback }" :value="3">
          <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
            <div class="text-center mt-4 mb-4 text-xl font-semibold">How often do you shop for groceries?</div>
            <div class="card flex justify-center">
              <div class="flex flex-col gap-4">
                <div v-for="category in optionsThirdQuestion" :key="category.key" class="flex items-center">
                  <RadioButton v-model="valueThirdQuestion" :inputId="category.key" name="dynamic" :value="category.name" />
                  <label :for="category.key" class="ml-2">{{ category.name }}</label>
                </div>
              </div>
            </div>
          </div>
          <div class="flex p-6 justify-between">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              @click="activateCallback(2)"
              class="!bg-[#edf7f7] !border-[#10b981] !text-[#005e5d]"
            />
            <Button
              label="Next"
              icon="pi pi-arrow-right"
              iconPos="right"
              @click="activateCallback(4)"
              class="!bg-[#FFD200] !border-[#FFD200] !text-[#000000]"
            />
          </div>
        </StepPanel>
        <!--Fourth Question-->
        <StepPanel v-slot="{ activateCallback }" :value="4">
          <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
            <div class="text-center mt-4 mb-4 text-xl font-semibold">
              Do you currently practice any waste reduction habits? (e.g., recycling, composting, using reusable bags)
            </div>
            <div class="card flex justify-center">
              <SelectButton v-model="valueFourthQuestion" :options="optionsFourthQuestion" aria-labelledby="basic" />
            </div>
          </div>
          <div class="flex p-6 justify-between">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              @click="activateCallback(3)"
              class="!bg-[#edf7f7] !border-[#10b981] !text-[#005e5d]"
            />
            <Button
              label="Next"
              icon="pi pi-arrow-right"
              iconPos="right"
              @click="activateCallback(5)"
              class="!bg-[#FFD200] !border-[#FFD200] !text-[#000000]"
            />
          </div>
        </StepPanel>
        <!--Fifth Question-->
        <StepPanel v-slot="{ activateCallback }" :value="5">
          <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
            <div class="text-center mt-4 mb-4 text-xl font-semibold">How conscious are you about your water usage?</div>
            <div class="card flex justify-center">
              <SelectButton v-model="valueFifthQuestion" :options="optionsFifthQuestion" aria-labelledby="basic" />
            </div>
          </div>
          <div class="flex p-6 justify-between">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              @click="activateCallback(4)"
              class="!bg-[#edf7f7] !border-[#10b981] !text-[#005e5d]"
            />
            <Button
              label="Next"
              icon="pi pi-arrow-right"
              iconPos="right"
              @click="activateCallback(6)"
              class="!bg-[#FFD200] !border-[#FFD200] !text-[#000000]"
            />
          </div>
        </StepPanel>
        <!--Sixth Question-->
        <StepPanel v-slot="{ activateCallback }" :value="6">
          <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
            <div class="text-center mt-4 mb-4 text-xl font-semibold">
              Have you made any energy-efficient upgrades to your home? (e.g., LED bulbs, energy-efficient appliances)
            </div>
            <div class="card flex justify-center">
              <SelectButton v-model="valueSixthQuestion" :options="optionsSixthQuestion" aria-labelledby="basic" />
            </div>
          </div>
          <div class="flex p-6 justify-between">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              @click="activateCallback(5)"
              class="!bg-[#edf7f7] !border-[#10b981] !text-[#005e5d]"
            />
            <Button
              label="Next"
              icon="pi pi-arrow-right"
              iconPos="right"
              @click="activateCallback(7)"
              class="!bg-[#FFD200] !border-[#FFD200] !text-[#000000]"
            />
          </div>
        </StepPanel>
        <!--Done info-->
        <StepPanel v-slot="{ activateCallback }" :value="7">
          <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
            <div class="text-center mt-4 mb-4 text-xl font-semibold">You successfully completed all the questions!</div>
          </div>
          <div class="flex p-6 justify-between">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              @click="activateCallback(6)"
              class="!bg-[#edf7f7] !border-[#10b981] !text-[#005e5d]"
            />
            <Button label="Submit" icon="pi pi-send" iconPos="right" @click="$emit('submit')" class="!bg-[#FFD200] !border-[#FFD200] !text-[#000000]" />
          </div>
        </StepPanel>
      </StepPanels>
    </Stepper>
  </div>
</template>
