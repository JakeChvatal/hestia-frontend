import initialState from '../initialState';
import axios from 'axios';

const LocationsR = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_ASSIGNMENT':
            axios.get('https://hestia-bigredhacks2019.herokuapp.com/api/getmyassignment')
            .then = (response => {
                state.stats = {
                    lat: response.data.latitude,
                    long: response.data.longitude,
                    numRiders: response.data.numRiders,
                    maxNumRiders: response.data.maxNumRiders,
                    pending: response.data.pending
                }}).catch(error => {
                    console.log(error);
                });

        
    }

    return initialState;
}

export default LocationsR;