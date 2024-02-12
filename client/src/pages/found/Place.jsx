import PropTypes from "prop-types";
import "./found.scss";

const Place = (props) => {
  return (
    <div>
      <h1 className="title">Where was it?</h1>

      <input className="input-box"
        type="text"
        value={props.data.place || ""}
        onChange={(e) => props.updateFieldHandler("place", e.target.value)}
        placeholder="Please kindly share the location here"
        required
      />
    </div>
  );
};

Place.propTypes = {
  data: PropTypes.object.isRequired,
  updateFieldHandler: PropTypes.func.isRequired,
};

export default Place;
