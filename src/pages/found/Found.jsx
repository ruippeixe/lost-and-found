import PropTypes from "prop-types";
// import { useState } from 'react'
import useFormSteps from "../../hooks/useFormSteps";
import { Link } from "react-router-dom";
import What from "./What";
import Who from "./Who";
import Where from "./Where";
import Date from "./Date";
import Time from "./Time";
import Email from "./Email";
import Thanks from "./Thanks";
import "./found.scss";
import "../../hooks/useFormSteps";

const Found = ({ data, setData, foundData, setFoundData }) => {
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
  } = useFormSteps(formSteps, data);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFoundData((prev) => [...prev, data]);
    setData(Object.fromEntries(Object.keys(data).map((key) => [key, ""])));
  };

  console.log(foundData);

  return (
    <>
      <div className="found">
        <nav>
          <ul>
            <Link to="/">&lt;- home</Link>
            <li>found</li>
          </ul>
        </nav>

        <form onSubmit={handleSubmit}>
          {currentComponent}

          <div className="actions">
            {!isFirstStep && !isLastStep && (
              <button type="button" onClick={back}>
                back
              </button>
            )}

            {!isLastStep ? (
              <button type="button" onClick={next}>
                {currentStepIndex === formSteps.length - 2 ? "submit" : "next"}
              </button>
            ) : (
              <button type="submit">
                <Link to="/">go back to home page</Link>
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

Found.propTypes = {
  data: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
  foundData: PropTypes.array.isRequired,
  setFoundData: PropTypes.func.isRequired,
};

export default Found;
