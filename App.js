import React, { Component }         from 'react';
import { Text } from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

import {Provider} from 'react-redux'; 
import configureStore from './store';
import { connect } from 'react-redux';
import AppMain from './src/pages/AppMain';

class App extends Component {
  render() {
    return (
    <Provider store={configureStore()}>
      <AppMain/>
    </Provider>
    );
  }
}

export default App;