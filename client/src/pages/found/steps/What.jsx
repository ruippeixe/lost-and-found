import PropTypes from "prop-types";

const What = (props) => {
  return (
    <div>
      <h1 className="title">What did you find?</h1>

      <select
        className="select-box"
        value={props.data.what}
        onChange={(e) => props.updateFieldHandler("what", e.target.value)}
        required
      >
        <option value="" disabled>
          Select the item
        </option>
        <option value="passport">Passport</option>
        <option value="keys">Keys</option>
      </select>
    </div>
  );
};

What.propTypes = {
  data: PropTypes.object.isRequired,
  updateFieldHandler: PropTypes.func.isRequired,
};

export default What;
