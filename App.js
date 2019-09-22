import React, { Component }         from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

import Login from './src/pages/Login.js'
import MainMap from './src/pages/MainMap.js';
import MapView from 'react-native-maps';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false
    };
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
    return this.displayPage(this.state.login);
  }
}


//   