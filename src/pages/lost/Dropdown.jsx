import PropTypes from "prop-types";

const Dropdown = ({ value, index, toggleDropdown, dropdown }) => {
  return (
    <>
      <button onClick={() => toggleDropdown(index)}>see more</button>

      {dropdown === index && (
        <ul>
          <li>
            <h2>location, date & time</h2>
            <div>
              {value.where}, {value.date}, {value.time}
            </div>
          </li>
          <li>
            <h2>contact</h2>
            <div>{value.email}</div>
          </li>
        </ul>
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
