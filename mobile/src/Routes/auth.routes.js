import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const { Navigator, Screen } = createStackNavigator();

import Incidents from '../pages/Incidents';
import Detail from '../pages/Detail';


export function AuthRoutes() {

  return (
    <Navigator
      // headerMode="false"
      initialRouteName="inicio"
    >
      <Screen
        name="Incidents"
        component={Incidents}
        options={{ headerShown: null }}
      />
      <Screen
        name="Detail"
        component={Detail}
        options={{ headerShown: null }}
      />

    </Navigator>
  )
}