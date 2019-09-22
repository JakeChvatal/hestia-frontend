import React, { Component } from 'react';
import { Button, ButtonGroup, ThemeProvider, Card } from 'react-native-elements';
 
// bottom part of map, similar to uber
// shows next person to pick up or car 
// has button with google maps key showing how to get from here to there

// after all of the people have been picked up:
// this will display the address to the safe haven

export default class PersonLocator extends Component {
    
    constructor(props) {
        super(props);
        this.state = ({
            findingPerson: true
        });
    }
    
    // helper function to format the address to click
    formatAddress() {
        return Uri.parse("geo:0,0?q=" + this.state.lat + "," + this.state.long);
    }

    // sends people to map address
    onAddressClick() {
        intent = new Intent(Intent.ACTION_VIEW, this.formatAddress());
        intent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
        startActivity(intent);
        
        this.setState({
            findingPerson: false
        });
    }

    depositedPeople() {
        this.props.droppedPeople()
    }

    displayButton() {
        if(this.state.findingPerson) {
            return <Button 
            //onPress = {this.onAddressClick}
            title = "Navigate to Person" containerStyle={{flex: 0, marginLeft: 40, marginRight: 40, marginTop: 10}}>
        </Button>
        } else {
            return <Button 
            //onPress = {this.props.depositedPeople}
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