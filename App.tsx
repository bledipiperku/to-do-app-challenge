import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import routes from './src/config/routes';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
          {routes.map((r, i) => (
              <Stack.Screen key={i} name={r.name}>
                {(props) => <r.component nameProp={r.name} {...props}/>}
              </Stack.Screen>
           ))
          }
        </Stack.Navigator>
    </NavigationContainer>
  );
}
