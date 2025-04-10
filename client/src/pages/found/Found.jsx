import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { AuthContext } from "../../context/authContext";
import useFormSteps from "../../hooks/useFormSteps";

import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import What from "./steps/What";
import Who from "./steps/Who";
import Place from "./steps/Place";
import Date from "./steps/Date";
import Time from "./steps/Time";
import Email from "./steps/Email";
import Thanks from "./steps/Thanks";
import CounterWidget from "./counter-widget/CounterWidget";

import "./found.scss";

const Found = ({ data, setData, setFoundData, cleanFormFields }) => {
  document.title = "L&F - Found";

  const { currentUser } = useContext(AuthContext);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formSteps = [
    <What key="what" data={data} updateFieldHandler={updateFieldHandler} />,
    <Who key="who" data={data} updateFieldHandler={updateFieldHandler} />,
    <Place key="place" data={data} updateFieldHandler={updateFieldHandler} />,
    <Date key="date" data={data} updateFieldHandler={updateFieldHandler} />,
    <Time key="time" data={data} updateFieldHandler={updateFieldHandler} />,
    <Email key="email" data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks key="thanks" data={data} updateFieldHandler={updateFieldHandler} />,
  ];

  const {
    currentComponent,
    back,
    next,
    isFirstStep,
    isLastStep,
    currentStepIndex,
    setCurrentStepIndex,
    steps,
    isSubmitButtonClicked,
  } = useFormSteps(formSteps, data, setFoundData, cleanFormFields);

  const handleSubmit = (e) => {
    e.preventDefault();
    next();
  };

  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const storeData = () => {
    // Store data in sessionStorage when navigating away from the page
    sessionStorage.setItem("foundData", JSON.stringify(data));
  };

  useEffect(() => {
    // Retrieve data from sessionStorage when coming back to the page
    const storedData = sessionStorage.getItem("foundData");
    if (storedData) {
      setData(JSON.parse(storedData));
      setIsDataLoaded(true);
    }
  }, [setData]);

  useEffect(() => {
    // Clear sessionStorage after populating the form
    if (currentUser && isDataLoaded) {
      sessionStorage.removeItem("foundData");
      setCurrentStepIndex(steps.length - 2);
      setIsDataLoaded(false);
    }
  }, [currentUser, isDataLoaded, setCurrentStepIndex, currentStepIndex, steps]);

  return (
    <div className="found-parent">
      <NavBar />

      <form onSubmit={handleSubmit} className="form">
        <div className="top-container">
          <div className="element">{currentComponent}</div>
        </div>

        <div className="bottom-container">
          <div className="buttons">
            {!isFirstStep && !isLastStep && (
              <button type="button" onClick={back} className="btn">
                back
              </button>
            )}

            {!isLastStep ? (
              <button
                type="submit"
                className={`btn inverse ${
                  isSubmitButtonClicked ? "disabled" : ""
                }`}
              >
                {currentStepIndex === formSteps.length - 2 ? "submit" : "next"}
              </button>
            ) : (
              <Link to="/">
                <button type="button" className="btn inverse">
                  go back to home page
                </button>
              </Link>
            )}
          </div>

          {!currentUser && isSubmitButtonClicked && (
            <p className="auth-warning">
              You need to be authenticated before submitting. Please{" "}
              <Link
                onClick={storeData}
                to="/register"
                state={{ page: location.pathname }}
              >
                Register
              </Link>{" "}
              or{" "}
              <Link
                onClick={storeData}
                to="/login"
                state={{ page: location.pathname }}
              >
                Login
              </Link>
            </p>
          )}
        </div>
      </form>

      <CounterWidget
        currentStepIndex={currentStepIndex}
        selectedWhat={data.what}
      />

      <Footer />
    </div>
  );
};

Found.propTypes = {
  data: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
  setFoundData: PropTypes.func.isRequired,
  cleanFormFields: PropTypes.func.isRequired,
};

export default Found;
