import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Text, View, Thumbnail, Icon} from 'native-base';

import styles from './styles';

export function CustomDrawer(props: any) {
  const {routes} = props.state;
  return (
    <DrawerContentScrollView {...props} style={styles.container}>
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
        {routes.map((route: any) => (
          <DrawerItem
            key={route.key}
            label={route.name}
            labelStyle={styles.drawerItem}
            onPress={() => console.warn(route.name)}
            icon={({color, focused}) => (
              <Icon
                name={route.params.icon.name}
                type={route.params.icon.type}
                color={color}
                active={focused}
              />
            )}
          />
        ))}
      </View>
    </DrawerContentScrollView>
  );
}
