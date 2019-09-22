import React, { Component } from 'react';
import { Button, ButtonGroup, ThemeProvider, Card } from 'react-native-elements';
import { connect } from "react-redux";
import IntentLauncher, { IntentConstant } from 'react-native-intent-launcher'
import {Platform, Linking} from 'react-native';

// bottom part of map, similar to uber
// shows next person to pick up or car 
// has button with google maps key showing how to get from here to there

// after all of the people have been picked up:
// this will display the address to the safe haven

class PersonLocator1 extends Component {
    
    constructor(props) {
        super(props);
        this.state = ({
            findingPerson: true
        });

        //this.onAddressClick.bind(this);
    }

    fixUndefined(val) {
        if(!val || val == NaN || val == undefined) {
            return 0;
        } else {
            return val;
        }
    }
    
    // helper function to format the address to click
    formatAddress(lat, long) {
        return `geo:0,0?q=${lat},${long}`;
    }

    // sends people to map address
    onAddressClick(lat, long) {
        const num1 = this.fixUndefined(lat);
        const num2 = this.fixUndefined(long);
        const add = this.formatAddress(num1, num2);
        Linking.openURL(add); 

        this.setState({
            findingPerson: !this.state
        });
    }

    onDropoffClick(x) {
        this.setState({
            findingPerson: true
        });
    }

    depositedPeople() {
        this.props.droppedPeople()
    }

    displayButton() {
        if(this.state.findingPerson) {
            return <Button 
            onPress = { () => this.onAddressClick(this.props.pickupLat, this.props.pickupLong)}
            title = "Navigate to Person" containerStyle={{flex: 0, marginLeft: 40, marginRight: 40, marginTop: 10}}>
        </Button>
        } else {
            return <Button 
            onPress = {() => this.onDropoffClick(this.state.findingPerson)}
            title = "Drop Off" containerStyle={{flex: 0, marginLeft: 40, marginRight: 40, marginTop: 10}}>
        </Button>
        }
    }

    render() {
        return (
        <Card containerStyle = {{}}>
            {this.displayButton()}
        </Card>
        );
    }
    
}

function mapStateToProps (state) {
    return {
        myLat: state.Reducer.curLat,
        myLong: state.Reducer.curLong,
        pickupLat: state.Reducer.pickupLat,
        pickupLong: state.Reducer.pickupLong 
    }
}


const PersonLocator = connect(
    mapStateToProps
  )(PersonLocator1)

  export default PersonLocator;
