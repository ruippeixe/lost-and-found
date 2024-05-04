import PropTypes from "prop-types";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

import { MAPS_API_KEY } from "../../../config";

import "./google-maps.scss";

import closeIcon from "../../imgs/close-icon.svg";

function GoogleMaps({ setIsMapOpen, updatePlace }) {
  const position = { lat: 40.2, lng: -10.4 };

  const handleMapClick = (event) => {
    const { latLng } = event.detail;
    const lat = latLng.lat;
    const lng = latLng.lng;

    fetchPlaceName(lat, lng);
    setIsMapOpen(false);
  };

  async function fetchPlaceName(lat, lng) {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${MAPS_API_KEY}`
      );
      const data = await response.json();
      let newPlace = data.results[0].formatted_address;
      updatePlace(newPlace);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const handleCloseClick = () => {
    setIsMapOpen(false);
  };

  return (
    <div className="google-maps-parent">
      <APIProvider apiKey={MAPS_API_KEY}>
        <div className="map">
          <span onClick={handleCloseClick} className="close">
            <img src={closeIcon} alt="close map" />
          </span>
          <Map
            defaultZoom={8}
            defaultCenter={position}
            onClick={handleMapClick}
          ></Map>
        </div>
      </APIProvider>
    </div>
  );
}

GoogleMaps.propTypes = {
  setIsMapOpen: PropTypes.func.isRequired,
  updatePlace: PropTypes.func.isRequired,
};

export default GoogleMaps;
