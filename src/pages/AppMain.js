import React, { Component }         from 'react';
import { Text } from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

import Login from './Login.js'
import MapPage from './MapPage.js';

import {Provider} from 'react-redux'; 
import configureStore from '../../store';
import { connect } from 'react-redux'
import {login} from '../actions/index';

class AppMain extends Component {
    displayPage(loggedin) {
      return <MapPage />

      if(loggedin) {
        return <MapPage />
      } else { 
        return <Login onLogin = {this.props.onLogin()} />
      }
    }

      render() {
        return this.displayPage(this.props.loggedin);
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
        dispatch(login());
      }
    }
  }
  
  const MainApp = connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppMain)

export default MainApp;