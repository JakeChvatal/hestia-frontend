import {LOGIN, LOG_LOCATION, BEGIN_DRIVING, DROPOFF } from './types';

export function login() {
    const action = {
        type: LOGIN
    }

    dispatch(action);
    dispatch(logLocation());
}

export function logLocation(lat, long) {
    const action = {
        type: LOG_LOCATION
    }

    dispatch(action)
}

export function beginDriving() {
    const action = {
        type: BEGIN_DRIVING
    }

    dispatch(action)
}

export function dropoff() {
    const action = {
        type: DROPOFF
    }

    dispatch(action)
}