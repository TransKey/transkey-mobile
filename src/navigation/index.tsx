import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { CustomDrawer } from '../components';

import {
  HomeScreen,
  MeuPerfilScreen,
  ConfiguracoesScreen,
  MeusTrajetosScreen,
} from '../screens';

export function AppNavigation() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        openByDefault
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawer {...props} />}>
        <Drawer.Screen
          component={HomeScreen}
          name="Home"
          initialParams={{ icon: { name: 'home', type: 'Entypo' } }}
        />
        <Drawer.Screen
          component={MeuPerfilScreen}
          name="Meu Perfil"
          initialParams={{ icon: { name: 'person', type: 'Ionicons' } }}
        />
        <Drawer.Screen
          name="Config"
          component={ConfiguracoesScreen}
          initialParams={{ icon: { name: 'settings', type: 'Ionicons' } }}
        />
        <Drawer.Screen
          name="Meus Trajetos"
          component={MeusTrajetosScreen}
          initialParams={{ icon: { name: 'car', type: 'Ionicons' } }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
