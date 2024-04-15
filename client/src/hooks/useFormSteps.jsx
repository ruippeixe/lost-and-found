import { useContext, useState } from "react";
import Axios from "axios";

import { API_URL } from "../../config.js";
import { AuthContext } from "../context/authContext";

const useFormSteps = (steps, data, setFoundData, cleanFormFields) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const { currentUser } = useContext(AuthContext);

  async function addItemToDatabase() {
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
      setFoundData((prev) => [...prev, data]);
    } catch (error) {
      console.error("Error adding item:", error);
    } finally {
      cleanFormFields();
    }
  }

  function back() {
    if (currentStepIndex === 2 && data.what === "keys") {
      return setCurrentStepIndex((prev) => prev - 2);
    }

    return setCurrentStepIndex((prev) => prev - 1);
  }

  function next() {
    if (currentStepIndex === 0 && data.what === "keys")
      return setCurrentStepIndex((prev) => prev + 2);

    if (currentStepIndex === steps.length - 2) {
      if (!currentUser) return;

      addItemToDatabase();
    }

    return setCurrentStepIndex((prev) => prev + 1);
  }

  return {
    currentStepIndex,
    currentComponent: steps[currentStepIndex],
    back,
    next,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    setCurrentStepIndex,
    steps,
  };
};

export default useFormSteps;
