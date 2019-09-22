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
import { Input, Avatar, Button, ButtonGroup, Card, ThemeProvider } from 'react-native-elements';
import Axios from 'axios';

const buttons = ['Guardian', 'Citizen'];
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      selectedIndex: 2,
      error: false,
      fullName:'',
      cellPhoneNum: '',
      zipCode: ''
    };
    this.updateIndex = this.updateIndex.bind(this)
    this.onClickLogin = this.onClickLogin.bind(this)
    this.onClickRegister = this.onClickRegister.bind(this)
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  // this logs in users or registers them
  onClickLogin() {
    // post the data,
    // if there is an error 
    // set error equal to true and display an error
    Axios.post('https://hestia-bigredhacks2019.herokuapp.com/api/login', 
    {
      email: this.state.email,
      password: this.state.password
    }).then = (response => {
      // TODO: good or bad stuff
        if(response.data.message == 'Success.') {
          // set global state loggedIn to true as well
        } else {
            this.setState({
              error: true
            });
        }
    }).catch = (err) => {
    this.setState({
      error: true
    });
    }
  }

  onClickRegister() {
    Axios.post('https://hestia-bigredhacks2019.herokuapp.com/api/signup',
    {
      fullName:this.state.fullName,
      password: this.state.password,
      email: this.state.email,
      cellPhoneNum: this.state.cellPhoneNum,
      userGroup: buttons[this.state.selectedIndex],
      zipCode: this.state.zipCode
    }).then = (response => {
      if(response.data.message == 'Success.') {
        // set global state loggedIn to true as well
      } else {
          this.setState({
            error: true
        });
      }
    }).catch = (err) => {
      this.setState({
        error: true
      });
    }
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex: selectedIndex})
  }

  onChangeUsername(text) {
    this.setState({
      email: text
    });
  }

  onChangePassword(text) {
    this.setState({
      password: text
    });
  }

  onChangeZipCode(text) {
    this.setState({
      zipCode: text
    });
  }

  onChangePhone(text) {
    this.setState({
      cellPhoneNum: text
    });
  }

  onChangeName(text) {
    this.setState({
      fullName: text
    });
  }

  errorMsg() {
    if(this.state.error) {
      return <Text>
        Error! Please fill in all of the information and try again.
      </Text>;
    }
  }

  render() {
    const { selectedIndex } = this.state.selectedIndex;

    return (
      <ThemeProvider>
      <Card containerStyle={{flex: 0, marginLeft: 20, marginTop: 60}}>
        <Image style={{paddingLeft: 100, paddingRight: 40, width: 80, height: 100, borderRadius: 30}}
           containerStyle={{flex: 0, paddingLeft: 100, marginLeft: 100, marginRight: 40, marginTop: 10, marginBottom: 20}}
          source = {require('../../assets/logo.png')}/>
          {this.errorMsg()}
        <Input
        placeholder='Name'
        onChangeText = {text => this.onChangeName(text)}
        containerStyle={{flex: 0, marginBottom: 5}}
        />
        <Input
        placeholder='Email'
        onChangeText = {text => this.onChangeUsername(text)}
        containerStyle={{flex: 0, marginBottom: 5}}
        />
        <Input
        placeholder='Password'
        onChangeText = {text => this.onChangePassword(text)}
        containerStyle={{flex: 0, marginBottom: 5}}
        />
        <Input
        placeholder='Zip Code'
        onChangeText = {text => this.onChangeZipCode(text)}
        containerStyle={{flex: 0, marginBottom: 5}}
        />
        <Input
        placeholder='Cell #'
        onChangeText = {text => this.onChangePhone(text)}
        containerStyle={{flex: 0, marginBottom: 5}}
        />
        <ChooseId>
        <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{height: 100}}
          />
        </ChooseId>
        <Button title = "Log In"

        containerStyle={{flex: 0, marginLeft: 40, marginRight: 40, marginTop: 10}}></Button>
        <Button 
        onPress = {this.props.onLogin}
        title = "Register" containerStyle={{flex: 0, marginLeft: 40, marginRight: 40, marginTop: 10}}></Button>
      
      <Text style = {{ fontSize: 12, fontWeight: 'bold', color: 'gray', marginBottom: 0, paddingTop: 25, paddingBottom: 0}}>
        © 2019 Alexander La Cour, Andrew Yates, Jacob Chvatal and Victor Butoi.
        Made with love at Big Red Hacks!
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