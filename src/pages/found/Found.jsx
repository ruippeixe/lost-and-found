import What from "./What";
import Who from "./Who";
import Where from "./Where";
import On from "./On";
import And from "./And";
import How from "./How";
import Thanks from "./Thanks";
import "./found.scss";
import "../../hooks/useFormSteps";
import useFormSteps from "../../hooks/useFormSteps";

const Found = () => {
  const formSteps = [
    <What />,
    <Who />,
    <Where />,
    <On />,
    <And />,
    <How />,
    <Thanks />,
  ];

  const { currentComponent, back, next, isFirstStep, isLastStep, isGreeting } =
    useFormSteps(formSteps);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="found">
        <nav>
          <ul>
            <li>back</li>
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
        </form>
      </div>
    </>
  );
};

export default Found;
