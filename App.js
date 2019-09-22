import React, { Component }         from 'react';
import { Text } from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

import Login from './src/pages/Login.js'
import MainMap from './src/pages/MainMap.js';

import {Provider} from 'react-redux'; 
import configureStore from './store';
import { connect } from 'react-redux'


class App extends Component {
  constructor(props) {
    super(props);
  }

  displayPage(login) {
    if(login == true) {
      return <MainMap />
    } else {
      return <Login onLogin = {this.onLogin}/>
    }
  }
  
  render() {
    return (
    <Provider store={configureStore()}>
      {this.displayPage(this.props.login)}
    </Provider>
    );
  }
}

function mapStateToProps(state) {
  return {
    login: state.login
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onLogin: () => {
      dispatch(login())
    }
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default App