import React from 'react';
import {Content, Body} from 'native-base';
import MapView from 'react-native-maps';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Header, Left, Button, Icon, View} from 'native-base';

import {BaseContainer, ButtonPrimary} from '../../components';

import styles from './styles';

export function HomeScreen() {
  const navigation = useNavigation();

  function handlerDrawer() {
    navigation.dispatch(DrawerActions.openDrawer());
  }

  return (
    <BaseContainer>
      <Header style={styles.header}>
        <Left>
          <Button transparent onPress={handlerDrawer}>
            <Icon name="reorder" type="MaterialIcons" style={styles.icon} />
          </Button>
        </Left>
      </Header>
      <Content>
        <View style={styles.viewMap}>
          <MapView
            style={styles.map}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          />
          <View style={styles.viewButton}>
            <ButtonPrimary name="Inciar" icon="power" />
          </View>
        </View>
      </Content>
    </BaseContainer>
  );
}
