export default initialState = {
    "localState": {
        "loggedIn": false,
        "guardian": false,
        "curLat": 0,
        "curLong": 0
    },
    "cars": {
        "locations":[]
    },
    "disaster": {
        "radius": 0,
        "lat": 0,
        "long": 0
    },
    "stats": {
        lat: 0,
        long: 0,
        numRiders: 0,
        maxNumRiders: 0,
        pending: false
    }
}