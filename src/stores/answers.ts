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

  const calculateAnswerPoint = () => {
    let score = 0;

    // First question points
    if (optionOneFirstQuestion.value) score += 1; // Car
    if (optionTwoFirstQuestion.value) score += 2; // Public Transport
    if (optionThreeFirstQuestion.value) score += 3; // Bike
    if (optionFourFirstQuestion.value) score += 4; // Walk
    if (optionFiveFirstQuestion.value) score += 5; // Work from Home

    // Second question points
    if (valueSecondQuestion.value === 'House') score += 2;
    if (valueSecondQuestion.value === 'Apartment') score += 3;

    // Third question points
    if (valueThirdQuestion.value === 'Daily') score += 1;
    if (valueThirdQuestion.value === 'Weekly') score += 2;
    if (valueThirdQuestion.value === 'Bi-weekly') score += 3;
    if (valueThirdQuestion.value === 'Monthly') score += 4;

    // Fourth question points
    if (valueFourthQuestion.value === "Yes, I do!") score += 3;
    if (valueFourthQuestion.value === "I'm planning to do!") score += 2;
    if (valueFourthQuestion.value === "No, not my thing!") score += 1;

    // Fifth question points
    if (valueFifthQuestion.value === 'Very conscious') score += 3;
    if (valueFifthQuestion.value === 'Somewhat conscious') score += 2;
    if (valueFifthQuestion.value === 'Not very conscious') score += 1;

    // Sixth question points
    if (valueSixthQuestion.value === "Yes, I do!") score += 3;
    if (valueSixthQuestion.value === "I'm planning to do!") score += 2;
    if (valueSixthQuestion.value === "No, not my thing!") score += 1;

    const maxScore = 29;
    const normalizedScore = score / maxScore;

    const roundedFinalScore = normalizedScore.toFixed(2)
    return roundedFinalScore;
  }
  
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
    calculateAnswerPoint
  };
});
