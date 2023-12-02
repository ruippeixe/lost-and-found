import PropTypes from "prop-types";
// import { useState } from 'react'
import useFormSteps from "../../hooks/useFormSteps";
import { Link } from "react-router-dom";
import NavBar from "../navigation/NavBar";
import What from "./What";
import Who from "./Who";
import Where from "./Where";
import Date from "./Date";
import Time from "./Time";
import Email from "./Email";
import Thanks from "./Thanks";
import "./found.scss";
import "../../hooks/useFormSteps";

const Found = ({ data, setData, setFoundData, cleanFormFields }) => {
  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formSteps = [
    <What key="what" data={data} updateFieldHandler={updateFieldHandler} />,
    <Who key="who" data={data} updateFieldHandler={updateFieldHandler} />,
    <Where key="where" data={data} updateFieldHandler={updateFieldHandler} />,
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
  } = useFormSteps(formSteps, data, setFoundData, cleanFormFields);

  const handleSubmit = (e) => {
    e.preventDefault();
    next();
  };

  return (
    <div className="found">
      <NavBar cleanFormFields={cleanFormFields} />

      <form onSubmit={handleSubmit} className="form">
        <div className="form-element">{currentComponent}</div>

        <div className="actions">
          {!isFirstStep && !isLastStep && (
            <button type="button" onClick={back} className="btn">
              back
            </button>
          )}

          {!isLastStep ? (
            <button type="submit" className="btn inverse">
              {currentStepIndex === formSteps.length - 2 ? "submit" : "next"}
            </button>
          ) : (
            <button type="button" className="btn inverse">
              <Link to="/">go back to home page</Link>
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

Found.propTypes = {
  data: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
  foundData: PropTypes.array.isRequired,
  setFoundData: PropTypes.func.isRequired,
  cleanFormFields: PropTypes.func.isRequired,
};

export default Found;
