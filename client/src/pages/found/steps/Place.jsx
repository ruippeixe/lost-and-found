import PropTypes from "prop-types";
import { useState } from "react";

import GoogleMaps from "../../../components/google-maps/GoogleMaps";
import pinDropIcon from "../../../imgs/pin_drop-icon.svg";

const Place = (props) => {
  const [isMapOpen, setIsMapOpen] = useState(false);

  const handleOpenMap = () => {
    setIsMapOpen(true);
  };

  const updatePlace = (newPlace) => {
    props.updateFieldHandler("place", newPlace);
  };

  return (
    <div>
      <h1 className="title">Where was it?</h1>
      {!isMapOpen ? (
        <div className="place">
          <div onClick={handleOpenMap} className="select">
            <img
              src={pinDropIcon}
              title="Click to open a map and select a location."
              alt="Map icon for location selection."
            />
          </div>
          <input
            className="input-box"
            type="text"
            value={props.data.place || ""}
            onChange={(e) => props.updateFieldHandler("place", e.target.value)}
            placeholder="Please kindly share the location here"
            required
          />
        </div>
      ) : (
        <GoogleMaps setIsMapOpen={setIsMapOpen} updatePlace={updatePlace} />
      )}
    </div>
  );
};

Place.propTypes = {
  data: PropTypes.object.isRequired,
  updateFieldHandler: PropTypes.func.isRequired,
};

export default Place;
