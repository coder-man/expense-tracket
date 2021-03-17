import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'
import ProfileScreen from '../screens/ProfileScreen'

const SwitchNavigator = createSwitchNavigator({
        LoginScreen:{
            screen: LoginScreen
        },
        SignupScreen:{
            screen: SignupScreen
        },
        ProfileScreen:{
            screen: ProfileScreen
        }
},{
    initialRouteName: 'LoginScreen'
});

export default createAppContainer(SwitchNavigator);

