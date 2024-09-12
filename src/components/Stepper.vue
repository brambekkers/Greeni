<script setup>
import Stepper from "primevue/stepper";
import StepList from "primevue/steplist";
import StepPanels from "primevue/steppanels";
import StepItem from "primevue/stepitem";
import Step from "primevue/step";
import StepPanel from "primevue/steppanel";
import ToggleButton from "primevue/togglebutton";
import Divider from "primevue/divider";
import SelectButton from "primevue/selectbutton";
import RadioButton from "primevue/radiobutton";

import { ref } from "vue";

const activeStep = ref(1);
const completed = ref(false);
//First question 
const optionOneFirstQuestion = ref(false);
const optionTwoFirstQuestion = ref(false);
const optionThreeFirstQuestion = ref(false);
const optionFourFirstQuestion = ref(false);
const optionFiveFirstQuestion = ref(false);

//Second question

const valueSecondQuestion = ref("House");
const optionsSecondQuestion = ref(["House", "Apartment"]);

//Third Question
const ThirdQuestionChecked = ref(false);

const ThirdQuestionCheckedClicked = () => {
  console.log("value", ThirdQuestionChecked.value);
};

// Fourth Question
const FourQuestionValue = ref('')


</script>
<template>
  <div class="card flex justify-center">
    <Stepper v-model:value="activeStep" class="basis-[40rem]">
      <StepList>
        <Step
          v-slot="{ activateCallback, value, a11yAttrs }"
          asChild
          :value="1"
        >
          <div class="flex flex-row flex-auto gap-2" v-bind="a11yAttrs.root">
            <button
              class="bg-transparent border-0 inline-flex flex-col gap-2"
              @click="activateCallback"
              v-bind="a11yAttrs.header"
            >
              <span
                :class="[
                  'rounded-full border-2 w-12 h-12 inline-flex items-center justify-center',
                  {
                    'bg-primary text-primary-contrast border-primary':
                      value <= activeStep,
                    'border-surface-200 dark:border-surface-700':
                      value > activeStep,
                  },
                ]"
              >
                <i class="pi pi-car" />
              </span>
            </button>
            <Divider />
          </div>
        </Step>
        <Step
          v-slot="{ activateCallback, value, a11yAttrs }"
          asChild
          :value="2"
        >
          <div
            class="flex flex-row flex-auto gap-2 pl-2"
            v-bind="a11yAttrs.root"
          >
            <button
              class="bg-transparent border-0 inline-flex flex-col gap-2"
              @click="activateCallback"
              v-bind="a11yAttrs.header"
            >
              <span
                :class="[
                  'rounded-full border-2 w-12 h-12 inline-flex items-center justify-center',
                  {
                    'bg-primary text-primary-contrast border-primary':
                      value <= activeStep,
                    'border-surface-200 dark:border-surface-700':
                      value > activeStep,
                  },
                ]"
              >
                <i class="pi pi-home" />
              </span>
            </button>
            <Divider />
          </div>
        </Step>
        <Step
          v-slot="{ activateCallback, value, a11yAttrs }"
          asChild
          :value="3"
        >
          <div
            class="flex flex-row flex-auto gap-2 pl-2"
            v-bind="a11yAttrs.root"
          >
            <button
              class="bg-transparent border-0 inline-flex flex-col gap-2"
              @click="activateCallback"
              v-bind="a11yAttrs.header"
            >
              <span
                :class="[
                  'rounded-full border-2 w-12 h-12 inline-flex items-center justify-center',
                  {
                    'bg-primary text-primary-contrast border-primary':
                      value <= activeStep,
                    'border-surface-200 dark:border-surface-700':
                      value > activeStep,
                  },
                ]"
              >
                <i class="pi pi-shopping-cart" />
              </span>
            </button>
            <Divider />
          </div>
        </Step>
        <Step
          v-slot="{ activateCallback, value, a11yAttrs }"
          asChild
          :value="4"
        >
          <div
            class="flex flex-row flex-auto gap-2 pl-2"
            v-bind="a11yAttrs.root"
          >
            <button
              class="bg-transparent border-0 inline-flex flex-col gap-2"
              @click="activateCallback"
              v-bind="a11yAttrs.header"
            >
              <span
                :class="[
                  'rounded-full border-2 w-12 h-12 inline-flex items-center justify-center',
                  {
                    'bg-primary text-primary-contrast border-primary':
                      value <= activeStep,
                    'border-surface-200 dark:border-surface-700':
                      value > activeStep,
                  },
                ]"
              >
                <i class="pi pi-trash" />
              </span>
            </button>
            <Divider />
          </div>
        </Step>
        <Step
          v-slot="{ activateCallback, value, a11yAttrs }"
          asChild
          :value="5"
        >
          <div
            class="flex flex-row flex-auto gap-2 pl-2"
            v-bind="a11yAttrs.root"
          >
            <button
              class="bg-transparent border-0 inline-flex flex-col gap-2"
              @click="activateCallback"
              v-bind="a11yAttrs.header"
            >
              <span
                :class="[
                  'rounded-full border-2 w-12 h-12 inline-flex items-center justify-center',
                  {
                    'bg-primary text-primary-contrast border-primary':
                      value <= activeStep,
                    'border-surface-200 dark:border-surface-700':
                      value > activeStep,
                  },
                ]"
              >
                <i class="pi pi-chart-scatter" />
              </span>
            </button>
            <Divider />
          </div>
        </Step>
        <Step
          v-slot="{ activateCallback, value, a11yAttrs }"
          asChild
          :value="6"
        >
          <div
            class="flex flex-row flex-auto gap-2 pl-2"
            v-bind="a11yAttrs.root"
          >
            <button
              class="bg-transparent border-0 inline-flex flex-col gap-2"
              @click="activateCallback"
              v-bind="a11yAttrs.header"
            >
              <span
                :class="[
                  'rounded-full border-2 w-12 h-12 inline-flex items-center justify-center',
                  {
                    'bg-primary text-primary-contrast border-primary':
                      value <= activeStep,
                    'border-surface-200 dark:border-surface-700':
                      value > activeStep,
                  },
                ]"
              >
                <i class="pi pi-bolt" />
              </span>
            </button>
            <Divider />
          </div>
        </Step>
        <Step
          v-slot="{ activateCallback, value, a11yAttrs }"
          asChild
          :value="7"
        >
          <div class="flex flex-row pl-2" v-bind="a11yAttrs.root">
            <button
              class="bg-transparent border-0 inline-flex flex-col gap-2"
              @click="activateCallback"
              v-bind="a11yAttrs.header"
            >
              <span
                :class="[
                  'rounded-full border-2 w-12 h-12 inline-flex items-center justify-center',
                  {
                    'bg-primary text-primary-contrast border-primary':
                      value <= activeStep,
                    'border-surface-200 dark:border-surface-700':
                      value > activeStep,
                  },
                ]"
              >
                <i class="pi pi-check-circle" />
              </span>
            </button>
          </div>
        </Step>
      </StepList>
      <StepPanels>
        <StepPanel v-slot="{ activateCallback }" :value="1">
          <div
            class="flex flex-col gap-2 mx-auto"
            style="min-height: 16rem; max-width: 20rem"
          >
            <div class="text-center mt-4 mb-4 text-xl font-semibold">
              How do you usually commute to work or school?
            </div>
            <div class="flex flex-wrap justify-center gap-4">
              <ToggleButton
                v-model="optionOneFirstQuestion"
                onLabel="Car"
                offLabel="Car"
              />
              <ToggleButton
                v-model="optionTwoFirstQuestion"
                onLabel="Public Transport"
                offLabel="Public Transport"
              />
              <ToggleButton
                v-model="optionThreeFirstQuestion"
                onLabel="Bike"
                offLabel="Bike"
              />
              <ToggleButton
                v-model="optionFourFirstQuestion"
                onLabel="Walk"
                offLabel="Walk"
              />
              <ToggleButton
                v-model="optionFiveFirstQuestion"
                onLabel="Work from Home"
                offLabel="Work from Home"
              />
            </div>
          </div>
          <div class="flex pt-6 justify-end">
            <Button
              label="Next"
              icon="pi pi-arrow-right"
              iconPos="right"
              @click="activateCallback(2)"
            />
          </div>
        </StepPanel>
        <StepPanel v-slot="{ activateCallback }" :value="2">
          <div
            class="flex flex-col gap-2 mx-auto"
            style="min-height: 16rem; max-width: 24rem"
          >
            <div class="text-center mt-4 mb-4 text-xl font-semibold">
              Do you live in a house or an apartment?
            </div>
            <div class="flex flex-wrap justify-center gap-7">
              <i class="pi pi-home" style="font-size: 2.5rem" />
              <SelectButton
                v-model="valueSecondQuestion"
                :options="optionsSecondQuestion"
                aria-labelledby="basic"
              />
              <i class="pi pi-warehouse" style="font-size: 2.5rem" />
            </div>
          </div>
          <div class="flex pt-6 justify-between">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              @click="activateCallback(1)"
            />
            <Button
              label="Next"
              icon="pi pi-arrow-right"
              iconPos="right"
              @click="activateCallback(3)"
            />
          </div>
        </StepPanel>
        <StepPanel v-slot="{ activateCallback }" :value="3">
          <div
            class="flex flex-col gap-2 mx-auto"
            style="min-height: 16rem; max-width: 24rem"
          >
            <div class="text-center mt-4 mb-4 text-xl font-semibold">
              How often do you shop for groceries?
            </div>
            <div class="flex justify-center gap-4">
                <div class="flex items-center">
                  <RadioButton
                    v-model="FourQuestionValue"
                    inputId="shopping1"
                    name="shopping"
                    value="Daily"
                  />
                  <label for="shopping1" class="ml-2 hover:cursor-pointer">Daily</label>
                </div>
                <div class="flex items-center">
                  <RadioButton
                    v-model="FourQuestionValue"
                    inputId="shopping2"
                    name="shopping"
                    value="Weekly"
                  />
                  <label for="shopping2" class="ml-2 hover:cursor-pointer">Weekly</label>
                </div>
                <div class="flex items-center">
                  <RadioButton
                    v-model="FourQuestionValue"
                    inputId="shopping3"
                    name="shopping"
                    value="Bi-weekly"
                  />
                  <label for="shopping4" class="ml-2 hover:cursor-pointer">Bi-weekly</label>
                </div>
                <div class="flex items-center">
                  <RadioButton
                    v-model="FourQuestionValue"
                    inputId="shopping4"
                    name="shopping"
                    value="Monthly"
                  />
                  <label for="shopping4" class="ml-2 hover:cursor-pointer">Monthly</label>
                </div>
            </div>
          </div>
          <div class="flex pt-6 justify-between">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              @click="activateCallback(2)"
            />
            <Button
              label="Next"
              icon="pi pi-arrow-right"
              iconPos="right"
              @click="activateCallback(4)"
            />
          </div>
        </StepPanel>
        <StepPanel v-slot="{ activateCallback }" :value="4">
          <div
            class="flex flex-col gap-2 mx-auto"
            style="min-height: 16rem; max-width: 24rem"
          >
            <div class="text-center mt-4 mb-4 text-xl font-semibold">
              Do you currently practice any waste reduction habits? (e.g.,
              recycling, composting, using reusable bags)
            </div>
            <div class="flex flex-wrap justify-center gap-7">
              <ToggleButton
                v-model="ThirdQuestionChecked"
                onLabel="Yes :)"
                offLabel="No :("
              />
            </div>
          </div>
          <div class="flex pt-6 justify-between">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              @click="activateCallback(3)"
            />
            <Button
              label="Next"
              icon="pi pi-arrow-right"
              iconPos="right"
              @click="activateCallback(5)"
            />
          </div>
        </StepPanel>
        <StepPanel v-slot="{ activateCallback }" :value="5">
          <div
            class="flex flex-col gap-2 mx-auto"
            style="min-height: 16rem; max-width: 24rem"
          >
            <div class="text-center mt-4 mb-4 text-xl font-semibold">
              How conscious are you about your water usage?
            </div>
            <div class="flex flex-wrap justify-center gap-7">
              <ToggleButton
                v-model="ThirdQuestionChecked"
                onLabel="Yes :)"
                offLabel="No :("
              />
            </div>
          </div>
          <div class="flex pt-6 justify-between">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              @click="activateCallback(4)"
            />
            <Button
              label="Next"
              icon="pi pi-arrow-right"
              iconPos="right"
              @click="activateCallback(6)"
            />
          </div>
        </StepPanel>
        <StepPanel v-slot="{ activateCallback }" :value="6">
          <div
            class="flex flex-col gap-2 mx-auto"
            style="min-height: 16rem; max-width: 24rem"
          >
            <div class="text-center mt-4 mb-4 text-xl font-semibold">
              Have you made any energy-efficient upgrades to your home? (e.g.,
              LED bulbs, energy-efficient appliances)
            </div>
            <div class="flex flex-wrap justify-center gap-7">
              <ToggleButton
                @click="ThirdQuestionCheckedClicked"
                v-model="ThirdQuestionChecked"
                onLabel="Yes :)"
                offLabel="No :("
              />
            </div>
          </div>
          <div class="flex pt-6 justify-between">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              @click="activateCallback(5)"
            />
            <Button
              label="Next"
              icon="pi pi-arrow-right"
              iconPos="right"
              @click="activateCallback(7)"
            />
          </div>
        </StepPanel>
        <StepPanel v-slot="{ activateCallback }" :value="7">
          <div
            class="flex flex-col gap-2 mx-auto"
            style="min-height: 16rem; max-width: 24rem"
          >
            <div class="text-center mt-4 mb-4 text-xl font-semibold">
              You successfully completed questions!
            </div>
          </div>
          <div class="flex pt-6 justify-between">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              @click="activateCallback(6)"
            />
            <Button
              label="Close"
              icon="pi pi-times"
              iconPos="right"
              @click="closeForm()"
            />
          </div>
        </StepPanel>
      </StepPanels>
    </Stepper>
  </div>
</template>
