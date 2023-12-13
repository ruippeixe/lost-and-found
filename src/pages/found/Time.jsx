import PropTypes from "prop-types";
import "./found.scss";

const Time = (props) => {
  return (
    <>
      <h1 className="title">And what hour?</h1>

      <input className="input-box"
        type="time"
        value={props.data.time || ""}
        onChange={(e) => props.updateFieldHandler("time", e.target.value)}
        required
      />
    </>
  );
};

Time.propTypes = {
  data: PropTypes.object.isRequired,
  updateFieldHandler: PropTypes.func.isRequired,
};

export default Time;
