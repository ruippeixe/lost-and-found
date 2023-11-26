import PropTypes from "prop-types";
import "./found.scss";

const Where = (props) => {
  return (
    <div className="form-control">
      <h1 className="title">Where was it?</h1>

      <input
        type="text"
        value={props.data.where || ""}
        onChange={(e) => props.updateFieldHandler("where", e.target.value)}
        placeholder="Please kindly share the location here"
        required
      />
    </div>
  );
};

Where.propTypes = {
  data: PropTypes.object.isRequired,
  updateFieldHandler: PropTypes.func.isRequired,
};

export default Where;
