import initialState from '../initialState';
import axios from 'axios';
import {LOGIN, LOG_LOCATION, BEGIN_DRIVING, DROPOFF } from '../actions/types';

const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case BEGIN_DRIVING:
            axios.get('https://hestia-bigredhacks2019.herokuapp.com/api/getmyassignment')
            .then = (response => {
                state = {
                    ...state,
                    pickupLat: response.data.latitude,
                    pickupLong: response.data.longitude,
                    numRiders: response.data.numRiders,
                    maxNumRiders: response.data.maxNumRiders,
                    pending: response.data.pending
                }
                
                return state;
            }).catch(error => {
                    console.log(error);
                });
        case LOGIN:
            state = {
                ...state,
                loggedin: true
            }
            return state;
            
        case LOG_LOCATION:

            const lat;
            const long;    
            navigator.geolocation.getCurrentPosition(
                position => {
                const latitude = JSON.stringify(position.coords.latitude);
                const longitude = JSON.stringify(position.coords.longitude);

                lat = latitude;
                long = longitude;
                },
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
            );

            state = {
                ...state,
                curLat: lat,
                curLong: long
            }

            return state;

        default:
            return initialState;
    }
}

export default Reducer;