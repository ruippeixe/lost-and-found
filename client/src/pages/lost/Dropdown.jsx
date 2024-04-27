import PropTypes from "prop-types";

const Dropdown = ({ value, index, dropdown }) => {
  return (
    <>
      {dropdown === index && (
        <div className="elem-content">
          <h3 className="info">location, date & time</h3>
          <p className="details">
            {value.place}, {value.date}, {value.time}
          </p>
          <h3 className="info">contact the finder</h3>
          <p className="details">{value.email}</p>
        </div>
      )}
    </>
  );
};

Dropdown.propTypes = {
  toggleDropdown: PropTypes.func,
  value: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  dropdown: PropTypes.number,
};

export default Dropdown;
