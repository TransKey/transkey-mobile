import React from 'react';
import { Text, View, Thumbnail, Icon } from 'native-base';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import styles from './styles';

export function CustomDrawer(props: any) {
  const { routes } = props.state;

  function handleClickItem(name: any) {
    props.navigation.navigate(name);
  }

  function checkRoute(route: any) {
    if (route.name === 'Cadastro Dados' || route.name === 'Cadastro Foto') {
      return false;
    }
    return true;
  }

  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      style={styles.container}>
      <View style={styles.viewHeader}>
        <Thumbnail
          source={{
            uri:
              'http://pluspng.com/img-png/user-png-icon-male-user-icon-512.png',
          }}
        />
        <View style={styles.viewText}>
          <Text style={styles.text}>Nome Sobrenome</Text>
          <Text style={styles.text}>email@email.com</Text>
        </View>
      </View>
      <View style={styles.viewItems}>
        {routes.map(
          (route: any) =>
            checkRoute(route) && (
              <DrawerItem
                key={route.key}
                label={route.name}
                labelStyle={styles.drawerItem}
                onPress={() => handleClickItem(route.name)}
                icon={({ color, focused }) => (
                  <Icon
                    name={route.params.icon.name}
                    type={route.params.icon.type}
                    color={color}
                    active={focused}
                  />
                )}
              />
            ),
        )}
      </View>
    </DrawerContentScrollView>
  );
}
