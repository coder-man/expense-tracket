import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'

class Cat extends Component{
    state = {
        isHungry: true
    }

    render(){
        return(
            <View>
               <Text>I am {this.props.name }, and I am {this.state.isHungry ? 'Hungry':'Full'}</Text>
               <Button onPress={() => {
                   this.setState({ isHungry: false });
               }}
                 disabled={!this.state.isHungry}
                 title={ this.state.isHungry ? 'Poor me some milk, please!':'Thank You!' }    
               />
            </View>
        )
    }
}

class TestScreen extends Component{
    render(){
        return(
            <>
              <Cat name="Holina" />
              <Cat name="Gracy" />
              <Cat name="Molie" />
              <Cat name="Trashi" />
            </>
        )
    }
}

export default TestScreen;