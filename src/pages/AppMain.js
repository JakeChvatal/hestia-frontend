import React, { Component }         from 'react';
import { Text } from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

import Login from './Login.js'
import MapPage from './MapPage.js';

import {Provider} from 'react-redux'; 
import configureStore from '../../store';
import { connect } from 'react-redux'
import { LOGIN } from '../actions/types.js';

class AppMain extends Component {
      render() {
        if(this.props.loggedin) {
          return <MapPage />
        } else {
          return <Login onLogin = {this.props.onLogin} />
        }
      }
}

function mapStateToProps(state) {
    return {
      login: state.Reducer.loggedin
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      onLogin: () => {
        dispatch(LOGIN);
      }
    }
  }
  
  const MainApp = connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppMain)

export default MainApp;