import * as React from 'react';
import { View, Text } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import SwitchNavigator from './src/navigation/SwitchNavigator'
import LoginScreen from './src/screens/LoginScreen'

function HomeScreen(){
  return(
     <View style={{ flex: 1, alignItem: 'center', justifyContent: 'center' }}>
       <Text>Home Screen</Text>
     </View>  
  );
}

//const Stack = createStackNavigator();


/*
   <NavigationContainer>
       <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} /> 
          <Stack.Screen name="Login" component={LoginScreen} /> 
       </Stack.Navigator>  
     </NavigationContainer>
*/
function App(){
  return(     
     <SwitchNavigator /> 
  );
}

export default App;
