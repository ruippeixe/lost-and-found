import { APIProvider, Map } from "@vis.gl/react-google-maps";

import { MAPS_API_KEY } from "../../../config";

function GoogleMaps() {
  const position = { lat: 40.2, lng: -10.4 };

  return (
    <APIProvider apiKey={MAPS_API_KEY}>
      <div style={{ height: "100vh", width: "100%" }}>
        <Map defaultZoom={8} defaultCenter={position}></Map>
      </div>
    </APIProvider>
  );
}

export default GoogleMaps;
