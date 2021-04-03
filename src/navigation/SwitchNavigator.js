import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import LoginScreen from '../screens/auth/LoginScreen'
import SignupScreen from '../screens/auth/SignupScreen'
import ProfileScreen from '../screens/auth/ProfileScreen'
import DashboardScreen from '../screens/dashboard/DashboardScreen'
import TestScreen from '../screens/dashboard/TestScreen'
import TextScreen from '../screens/dashboard/TextScreen'
import NbaseScreen from '../screens/dashboard/NbaseScreen'

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
        },
        TestScreen:{
            screen: TestScreen
        },
        TextScreen:{
           screen: TextScreen
        },
        NbaseScreen:{
          screen: NbaseScreen
        }
},{
    initialRouteName: 'LoginScreen'
});

export default createAppContainer(SwitchNavigator);
