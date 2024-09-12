import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useAnswersStore = defineStore("answers", () => {
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
  const valueThirdQuestion = ref("Weekly");
  const optionsThirdQuestion = ref([
    { name: "Daily", key: "Daily" },
    { name: "Weekly", key: "Weekly" },
    { name: "Bi-weekly", key: "Bi-weekly" },
    { name: "Monthly", key: "Monthly" },
  ]);

  // Fourth Question
  const valueFourthQuestion = ref("I'm planning to do!");
  const optionsFourthQuestion = ref([
    "Yes, I do!",
    "I'm planning to do!",
    "No, not my thing!",
  ]);

  // Fifth Question
  const valueFifthQuestion = ref("Somewhat conscious");
  const optionsFifthQuestion = ref([
    "Very conscious",
    "Somewhat conscious",
    "Not very conscious",
  ]);

  // Sixth Question
  const valueSixthQuestion = ref("I'm planning to do!");
  const optionsSixthQuestion = ref([
    "Yes, I do!",
    "I'm planning to do!",
    "No, not my thing!",
  ]);

  return {
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
  };
});
