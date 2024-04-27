import PropTypes from "prop-types";

const DropdownMenu = ({ item, itemIdx, activeItemIdx }) => {
  return (
    <>
      {itemIdx === activeItemIdx && (
        <div className="elem-content">
          <h3 className="info">location, date & time</h3>
          <p className="details">
            {item.place}, {item.date}, {item.time}
          </p>
          <h3 className="info">contact the finder</h3>
          <p className="details">{item.email}</p>
        </div>
      )}
    </>
  );
};

DropdownMenu.propTypes = {
  item: PropTypes.object.isRequired,
  itemIdx: PropTypes.number.isRequired,
  activeItemIdx: PropTypes.number,
};

export default DropdownMenu;
