import React, { Component } from 'react';
import { Button, ButtonGroup, ThemeProvider } from 'react-native-elements';
 
export default class ChooseId extends Component {
    constructor () {
        super()
        this.state = {
          selectedIndex: 2
        }
        this.updateIndex = this.updateIndex.bind(this)
      }
      
      updateIndex (selectedIndex) {
        this.setState({selectedIndex})
      }
      
      render () {
        const buttons = ['Guardian', 'Citizen']
        const { selectedIndex } = this.state
      
        return (
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{height: 100}}
          />
        )
      }
}
