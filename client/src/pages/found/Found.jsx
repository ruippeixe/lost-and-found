import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import What from "./steps/What";
import Who from "./steps/Who";
import Place from "./steps/Place";
import Date from "./steps/Date";
import Time from "./steps/Time";
import Email from "./steps/Email";
import Thanks from "./steps/Thanks";

import useFormSteps from "../../hooks/useFormSteps";
import CounterWidget from "./counter-widget/CounterWidget";

import "./found.scss";

const Found = ({ data, setData, setFoundData, cleanFormFields }) => {
  document.title = "L&F - Found";

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
  } = useFormSteps(formSteps, data, setFoundData, cleanFormFields);

  const handleSubmit = (e) => {
    e.preventDefault();
    next();
  };

  return (
    <div className="found-parent">
      <NavBar cleanFormFields={cleanFormFields} />

      <form onSubmit={handleSubmit} className="form">
        <div className="top-container">
          <div className="element">{currentComponent}</div>
        </div>

        <div className="bottom-container">
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
            <Link to="/">
              <button type="button" className="btn inverse">
                go back to home page
              </button>
            </Link>
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
  foundData: PropTypes.array.isRequired,
  setFoundData: PropTypes.func.isRequired,
  cleanFormFields: PropTypes.func.isRequired,
};

export default Found;
