import PropTypes from "prop-types";
import "./found.scss";

const Who = (props) => {
  return (
    <>
      <h1 className="title">Who’s the owner?</h1>

      <input className="input-box"
        type="text"
        value={props.data.who || ""}
        onChange={(e) => props.updateFieldHandler("who", e.target.value)}
        placeholder="You can write the name here"
        required
      />
    </>
  );
};

Who.propTypes = {
  data: PropTypes.object.isRequired,
  updateFieldHandler: PropTypes.func.isRequired,
};

export default Who;
