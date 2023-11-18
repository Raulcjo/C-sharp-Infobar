import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FormLogin from './views/FormLogin';

const Stack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FormLogin">
      <Stack.Screen
        name="FormLogin"
        component={FormLogin}
        options={{ headerShown: false }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}; 
