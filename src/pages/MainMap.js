import React, {Component} from 'react';
import MapView, { PROVIDER_GOOGLE, Marker, Circle } from 'react-native-maps';

export default class MainMap extends Component {

    renderVehicles() {
        // renders all of the vehicles on the map
        // if you need help, highlights the car that should be coming to your area
        // or to pick you up
    }

    renderPeople() {
        // renders all the people on the map
        // if you need to help someone, highlights the person you have to pick up
    }

    // draws the disaster radius you are contained in
    renderZone(x, y, rad) {
        //return <Circle radius = {rad} />
    }

    render() {
        return <MapView provider={ PROVIDER_GOOGLE } style={ { flex: 1 } } >
            {this.renderZone(this.props.x, this.props.y, this.props.rad)}
            {this.renderVehicles()}
            {this.renderPeople()}
        </MapView>
    }
}