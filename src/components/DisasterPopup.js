import React, { Component } from 'react';
import { Button, ButtonGroup, ThemeProvider } from 'react-native-elements';
 
// pops up when there is a disaster nearby
// functionality depends on whether you are driver or user
export default class DisasterPopup extends Component {
    displayDriverForm() {
        if(this.props.isDriver) {
            <Input
               placeholder='# of People'
               containerStyle={{flex: 0, marginBottom: 20}}
           />
       }
    }
    
    render() {

        const buttons = ['Yes', 'No']
        return (
            <ThemeProvider>
             <Overlay>
                 <Text>
                    There is a disaster in your area! Can you help?
                </Text>

                <ButtonGroup
                onPress={this.updateIndex}
                selectedIndex={selectedIndex}
                buttons={buttons}
                containerStyle={{height: 100}}
                />

                {this.displayDriverForm()}                
             </Overlay>   
            </ThemeProvider>
        );
    }
}