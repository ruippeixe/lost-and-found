/* eslint-disable react/prop-types */

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
          <h1 className="title">What did you lose?</h1>
          <select
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

export default Results;
