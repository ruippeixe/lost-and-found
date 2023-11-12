import PropTypes from "prop-types";
import "./found.scss";

const Date = (props) => {
  return (
    <div className="form-control">
      <h1>On what day?</h1>
      <input
        type="date"
        value={props.data.date || ""}
        onChange={(e) => props.updateFieldHandler("date", e.target.value)}
      />
    </div>
  );
};

Date.propTypes = {
  data: PropTypes.object.isRequired,
  updateFieldHandler: PropTypes.func.isRequired,
};

export default Date;
