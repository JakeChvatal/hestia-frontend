import {LOGIN, LOG_LOCATION, BEGIN_DRIVING, DROPOFF } from './types';

export function login() {
    const action = {
        type: LOGIN
    }

    return action;
}

export function logLocation(lat, long) {
    const action = {
        type: LOG_LOCATION
    }

    return action;
}

export function beginDriving() {
    const action = {
        type: BEGIN_DRIVING
    }

    return action;
}

export function dropoff() {
    const action = {
        type: DROPOFF
    }

    return action;
}