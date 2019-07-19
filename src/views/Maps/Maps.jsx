import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { connect } from 'react-redux';
import * as mapActions from '../../actions/mapActions';
import { bindActionCreators } from 'redux';


const CustomSkinMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: 7.257448, lng: 80.593952 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true,
      }}
    >


    }
      {Object.keys(props.markers).map((key,index) => {

       return <Marker key={index} position={{ lat: props.markers[key].location.lat, lng: props.markers[key].location.lon }} />
      })}
    </GoogleMap>
  ))
);

class Maps extends React.Component {

  componentWillMount() {
    this.props.mapActions.getMap();
  }

  render() {
    return (
      <CustomSkinMap
        markers={this.props.gmap.markers}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_API_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gmap: state.gmap,
    notification: state.notification
  }
}

function mapDispatchToProps(dispatch) {
  return {
    mapActions: bindActionCreators(mapActions, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Maps);
