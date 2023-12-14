import PropTypes from "prop-types";

const Results = ({
  updateFieldHandler,
  selectedItem,
  isFirstStep,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-element">
          <div>
            <h1 className="title">What did you lose?</h1>
            <select
              className="select-box"
              value={selectedItem}
              onChange={(e) => updateFieldHandler("what", e.target.value)}
              required
            >
              <option value="" disabled>
                Select the item
              </option>
              <option value="passport">Passport</option>
              <option value="keys">Keys</option>
            </select>
          </div>
        </div>

        <div className="actions">
          {isFirstStep ? (
            <button type="submit" className="btn inverse">
              next
            </button>
          ) : null}
        </div>
      </form>
    </>
  );
};

Results.propTypes = {
  updateFieldHandler: PropTypes.func.isRequired,
  selectedItem: PropTypes.string.isRequired,
  isFirstStep: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Results;
