import React from "react"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const GMap = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 41.9095732, lng: 12.5438647 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 41.9095732, lng: 12.5438647 }} />}
  </GoogleMap>
))

export default class Map extends React.Component {
  render() {
    return (
      <GMap
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCgtHuGlKG9QrvEcW2tDBR_uMg1Z2WHqrw&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    )
  }
}