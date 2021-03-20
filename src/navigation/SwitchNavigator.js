import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import LoginScreen from '../screens/auth/LoginScreen'
import SignupScreen from '../screens/auth/SignupScreen'
import ProfileScreen from '../screens/auth/ProfileScreen'
import DashboardScreen from '../screens/dashboard/DashboardScreen'

const SwitchNavigator = createSwitchNavigator({
        LoginScreen:{
            screen: LoginScreen
        },
        SignupScreen:{
            screen: SignupScreen
        },
        ProfileScreen:{
            screen: ProfileScreen
        },
        DashboardScreen:{
            screen: DashboardScreen
        }
},{
    initialRouteName: 'LoginScreen'
});

export default createAppContainer(SwitchNavigator);

