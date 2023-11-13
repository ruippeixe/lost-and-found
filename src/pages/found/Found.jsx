import What from "./What";
import Who from "./Who";
import Where from "./Where";
import Date from "./Date";
import Time from "./Time";
import Email from "./Email";
import Thanks from "./Thanks";
import "./found.scss";
import "../../hooks/useFormSteps";
import useFormSteps from "../../hooks/useFormSteps";
import { Link } from "react-router-dom";
import { useState } from "react";

const Found = () => {
  const [data, setData] = useState({
    what: "",
    who: "",
    where: "",
    date: "",
    time: "",
    email: "",
  });

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

  const { currentComponent, back, next, isFirstStep, isLastStep, isGreeting } =
    useFormSteps(formSteps, data);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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

          {!isGreeting && (
            <div className="actions">
              {!isFirstStep && (
                <button type="button" onClick={back}>
                  back
                </button>
              )}

              {!isLastStep ? (
                <button type="button" onClick={next}>
                  next
                </button>
              ) : (
                <button type="submit" onClick={next}>
                  submit
                </button>
              )}
            </div>
          )}

          {isGreeting && (
            <div className="actions">
              <button>
                <Link to="/">go back to home page</Link>
              </button>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default Found;
