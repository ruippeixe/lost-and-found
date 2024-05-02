import { APIProvider, Map } from "@vis.gl/react-google-maps";

import { MAPS_API_KEY } from "../../../config";

function GoogleMaps() {
  const position = { lat: 40.2, lng: -10.4 };

  const handleMapClick = (event) => {
    const { latLng } = event.detail;
    const lat = latLng.lat;
    const lng = latLng.lng;

    fetchData(lat, lng);
  };

  async function fetchData(lat, lng) {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${MAPS_API_KEY}`
      );
      const data = await response.json();
      console.log(data.results[0].address_components[1].long_name);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <APIProvider apiKey={MAPS_API_KEY}>
      <div style={{ height: "100vh", width: "100%" }}>
        <Map
          defaultZoom={8}
          defaultCenter={position}
          onClick={handleMapClick}
        ></Map>
      </div>
    </APIProvider>
  );
}

export default GoogleMaps;
