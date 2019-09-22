import React, { Component }         from 'react';
import { Text } from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

import Login from './src/pages/Login.js'
import MainMap from './src/pages/MainMap.js';
import MapView from 'react-native-maps';

import {Provider} from 'react-redux'; 
import configureStore from './store';

export default class App extends Component {
  constructor(props) { 
    super(props); 
    this.state = {
      login: true,
      latitude: 0,
      longitude: 0
    };
  }
  
  findCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
      position => {
        const latitude = JSON.stringify(position.coords.latitude);
        const longitude = JSON.stringify(position.coords.longitude);

        this.setState({
          latitude,
          longitude
        })
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );    
  }

  onLogin() {
    onreadystatechange = () => {
      this.setState({
        login: true
      });
      this.forceUpdate();
    }
  }

  displayPage(login) {
    if(login === true) {
      return <MainMap />
    } else {
      return <Login onLogin = {this.onLogin}/>
    }
  }
  
  render() {
    store = " ";
    return (
    <Provider store={configureStore()}>
      {this.displayPage(this.state.login)}
    </Provider>
    );
  }
}


//   