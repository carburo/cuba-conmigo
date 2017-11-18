import React from "react"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Map = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 41.9095732, lng: 12.5438647 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 41.9095732, lng: 12.5438647 }} />}
  </GoogleMap>
))

export default Map;