import React, { Component } from 'react';
 
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image
} from 'react-native';
 
import ChooseId from '../components/ChooseId.js';
import { Input, Avatar, Button, Card, ThemeProvider } from 'react-native-elements';

export default class Login extends Component {

  // this logs in users or registers them
  onClickLogin() {
    // hit that mf endpoint
  }

  render() {
    return (
      <ThemeProvider>
      <Card containerStyle={{flex: 0, marginLeft: 20, marginTop: 120}}>
        <Image style={{paddingLeft: 100, paddingRight: 40, width: 150, height: 150, borderRadius: 30}}
           containerStyle={{flex: 0, paddingLeft: 100, marginLeft: 100, marginRight: 40, marginTop: 10, marginBottom: 20}}
          source = {require('../../assets/logo.png')}/>
        <Input
        placeholder='username'
        containerStyle={{flex: 0, marginBottom: 20}}
        />
        <Input
        placeholder='password'
        containerStyle={{flex: 0, marginBottom: 20}}
        />
        <ChooseId></ChooseId>
        <Button title = "Log In" containerStyle={{flex: 0, marginLeft: 40, marginRight: 40, marginTop: 10}}></Button>
        <Button 
        onPress = {this.props.onLogin}
        title = "Register" containerStyle={{flex: 0, marginLeft: 40, marginRight: 40, marginTop: 10}}></Button>
      
      <Text style = {{ fontSize: 12, fontWeight: 'bold', color: 'gray', marginBottom: 0, paddingTop: 25, paddingBottom: 0}}>
        © 2019 Alexander La Cour, Andrew Yates, Jacob Chvatal and Victor Something.
        Made with love at Big Red Hacks uwu!
        </Text>
      </Card>

        
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#E1D7D8',
    padding: 30,
    flexDirection: 'column'
},
label: {
  color: '#0d8898',
  fontSize: 20
},
alignRight: {
  alignSelf: 'flex-end'
},
});