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

  const { currentComponent, back, next } = useFormSteps(formSteps);

  return (
    <>
      <div className="found">
        <nav>
          <ul>
            <li>back</li>
            <li>found</li>
          </ul>
        </nav>

        <form>
          {currentComponent}

          <div className="actions">
            <button type="button" onClick={back}>
              back
            </button>
            <button type="button" onClick={next}>
              next
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Found;
