import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import {CustomDrawer} from '../components';

import {HomeScreen} from '../screens';

export function AppNavigation() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        openByDefault
        hideStatusBar
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawer {...props} />}>
        <Drawer.Screen
          component={HomeScreen}
          name="Home"
          initialParams={{icon: {name: 'home', type: 'Entypo'}}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
