import React, {Component} from 'react';
import MapView, { PROVIDER_GOOGLE, Marker, Circle } from 'react-native-maps';
import PersonLocator from '../components/PersonLocator';
import {View} from 'react-native';
import { connect } from "react-redux";

class MainMap extends Component {

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
        return <Circle radius = {rad} />
    }

    render() {
        return <View>
            <MapView provider={ PROVIDER_GOOGLE } style={ { flex: 1, paddingBottom: 600 } } >
            {this.renderZone(this.props.curLat, this.props.curLong, 5)}
            {this.renderZone(this.props.pickupLat, this.props.pickupLong, 8)}
            {this.renderVehicles()}
            {this.renderPeople()}
            </MapView>
            <PersonLocator/>
        </View>
    }
}

function mapStateToProps (state) {
    return {
        myLat: state.curLat,
        myLong: state.curLong,
        pickupLat: state.pickupLat,
        pickupLong: state.pickupLong 
    }
}

const MapPage = connect(mapStateToProps)(MainMap);
export default MapPage;