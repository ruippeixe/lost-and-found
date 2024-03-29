import { useState } from "react";
import Axios from "axios";
import { API_URL } from "../../config.js";

const useFormSteps = (steps, data, setFoundData, cleanFormFields) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function back() {
    setCurrentStepIndex((i) => {
      if (currentStepIndex === 2 && data.what === "keys") return i - 2;
      if (i <= 0) return i;

      return i - 1;
    });
  }

  function next() {
    setCurrentStepIndex((i) => {
      if (currentStepIndex === 0 && data.what === "keys") return i + 2;
      if (i >= steps.length - 1) return i;

      if (currentStepIndex === steps.length - 2) {
        setFoundData((prev) => [...prev, data]);

        const addItem = async () => {
          try {
            const response = await Axios.post(
              `${API_URL}/api/item`,
              {
                what: data.what,
                who: data.who,
                place: data.place,
                date: data.date,
                time: data.time,
                email: data.email,
              },
              {
                withCredentials: true,
              }
            );
            console.log(response.data.message);
          } catch (error) {
            console.error("Error adding item:", error);
          }
        };
        addItem();

        cleanFormFields();
      }

      return i + 1;
    });
  }

  return {
    currentStepIndex,
    currentComponent: steps[currentStepIndex],
    back,
    next,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
  };
};

export default useFormSteps;
