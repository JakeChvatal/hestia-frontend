import initialState from '../initialState';

const LocationsR = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
            return;
    }

    return initialState;
}

export default LocationsR;