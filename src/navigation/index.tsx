import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { CustomDrawer } from '../components';

import {
  HomeScreen,
  MeuPerfilScreen,
  MeusTrajetosScreen,
  ConfiguracoesScreen,
  CadastrarFotoScreen,
  CadastrarDadosScreen,
  CalculadoraScreen,
} from '../screens';

export function AppNavigation() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Cadastro Dados"
        drawerContent={(props) => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Cadastro Dados" component={CadastrarDadosScreen} />
        <Drawer.Screen name="Cadastro Foto" component={CadastrarFotoScreen} />
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{ icon: { name: 'home', type: 'Entypo' } }}
        />
        <Drawer.Screen
          name="IMC"
          component={CalculadoraScreen}
          initialParams={{ icon: { name: 'calculator', type: 'Entypo' } }}
        />
        <Drawer.Screen
          name="Meu Perfil"
          component={MeuPerfilScreen}
          initialParams={{ icon: { name: 'person', type: 'Ionicons' } }}
        />
        <Drawer.Screen
          name="Meus Trajetos"
          component={MeusTrajetosScreen}
          initialParams={{ icon: { name: 'car', type: 'Ionicons' } }}
        />
        <Drawer.Screen
          name="Config"
          component={ConfiguracoesScreen}
          initialParams={{ icon: { name: 'settings', type: 'Ionicons' } }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
