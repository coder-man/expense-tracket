import * as React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'

import SwitchNavigator from './src/navigation/SwitchNavigator'
import reducer from './src/reducers';


const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(reducer,middleware);

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
    <Provider store={store}>
     <SwitchNavigator /> 
    </Provider> 
  );
}

export default App;