import { useState } from "react";

const useFormSteps = (steps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  function next() {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  }

  return {
    currentStepIndex,
    currentComponent: steps[currentStepIndex],
    back,
    next,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length -2,
    isGreeting: currentStepIndex === steps.length -1,
  };
};

export default useFormSteps;
