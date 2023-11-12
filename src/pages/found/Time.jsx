import PropTypes from "prop-types";
import "./found.scss";

const Time = (props) => {
  return (
    <div className="form-control">
      <h1>And what hour?</h1>

      <input
        type="time"
        value={props.data.time || ""}
        onChange={(e) => props.updateFieldHandler("time", e.target.value)}
      />
    </div>
  );
};

Time.propTypes = {
  data: PropTypes.object.isRequired,
  updateFieldHandler: PropTypes.func.isRequired,
};

export default Time;
