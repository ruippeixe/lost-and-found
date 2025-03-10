import PropTypes from "prop-types";

import "./counter-widget.scss";

const CounterWidget = ({ currentStepIndex, selectedWhat }) => {
  let arrayLength;

  if (selectedWhat === "passport") {
    arrayLength = 6;
  } else if (selectedWhat === "keys") {
    arrayLength = 5;
  }

  const isActive = (index) => {
    if (selectedWhat === "passport") {
      return index < currentStepIndex;
    } else if (selectedWhat === "keys") {
      return index < currentStepIndex - 1;
    }
    return false;
  };

  return (
    <>
      {selectedWhat && (
        <div className="counter-widget">
          {[...Array(arrayLength)].map((_, index) => (
            <div
              key={index}
              className={`step ${isActive(index) ? "active" : ""}`}
            ></div>
          ))}
        </div>
      )}
    </>
  );
};

CounterWidget.propTypes = {
  selectedWhat: PropTypes.string.isRequired,
  currentStepIndex: PropTypes.number.isRequired,
};

export default CounterWidget;
