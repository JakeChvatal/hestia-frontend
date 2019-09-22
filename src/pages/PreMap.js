import React, {Component} from 'react';
import MapView, { PROVIDER_GOOGLE, Marker, Circle } from 'react-native-maps';
import PersonLocator from '../components/PersonLocator';
import {View} from 'react-native';
import { Button, ButtonGroup, ThemeProvider, Card } from 'react-native-elements';

import { connect } from "react-redux";
import DisasterPopup from '../components/DisasterPopup';


class PreMap extends Component {

    fixUndefined(val) {
        if(!val || val == NaN || val == undefined) {
            return 0;
        } else {
            return val;
        }
    }

    render() {
        if(this.props.pending) {
            return <ShowSurvey p = {this.props.pending}/>;
        } else {
            return <View> 
            <MapView provider={ PROVIDER_GOOGLE } style={ { flex: 0, paddingBottom: 600 } }
                initialRegion = {{latitude: this.fixUndefined(this.props.pickupLat), longitude: this.fixUndefined(this.props.pickupLong), latitudeDelta: 1, longitudeDelta: 1}} >
                </MapView>
                <RenderMe x = {this.props.myLat} y = {this.props.myLong} rad = {500} />
            <PersonLocator/> 
            </View>;
        }
    }
}

function mapStateToProps (state) {
    return {
        myLat: state.Reducer.curLat,
        myLong: state.Reducer.curLong,
        pickupLat: state.Reducer.pickupLat,
        pickupLong: state.Reducer.pickupLong,
        pending: state.Reducer.pending
    }
}


const MapPage = connect(mapStateToProps)(MainMap);
export default MapPage;