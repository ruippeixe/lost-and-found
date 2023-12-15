import PropTypes from "prop-types";

const Dropdown = ({ value, index, dropdown }) => {
  return (
    <>
      {dropdown === index && (
        <div className="elem-content">
          <h3 className="subtitle">location, date & time</h3>
          <p>
            {value.where}, {value.date}, {value.time}
          </p>
          <h3 className="subtitle">contact the finder</h3>
          <p>{value.email}</p>
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
