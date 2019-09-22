import {combineReducers} from 'redux';
import LoginR from './loginReducer';
import LocationsR from './locationsReducer';

export default combineReducers({
    LoginR,
    LocationsR
});