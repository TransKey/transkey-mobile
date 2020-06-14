import React, { useState, useEffect } from 'react';
import { Content, Body, Right } from 'native-base';
import MapView, {
  AnimatedRegion,
  Polyline,
  MarkerAnimated,
} from 'react-native-maps';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Header, Left, Button, Icon, View, Text } from 'native-base';

import {
  BaseContainer,
  ButtonPrimary,
  ButtonSecondary,
} from '../../components';

import haversine from 'haversine';

import Geolocation from '@react-native-community/geolocation';

import { Portal, Modal } from 'react-native-paper';

import styles from './styles';

export function HomeScreen() {
  const navigation = useNavigation();

  const [latLen, setLatLen] = useState({
    latitude: -12.79325143,
    longitude: -38.39671918,
  });

  const [coordinate, setCoordinate] = useState(
    new AnimatedRegion({
      latitude: -12.79325143,
      longitude: -38.39671918,
      latitudeDelta: 0,
      longitudeDelta: 0,
    }),
  );

  const [prevLatLng, setPrevLatLng] = useState<any>({});

  const [totalDistance, setTotalDistance] = useState(0);

  const [routeCoordinates, setRouteCoordinates] = useState<any>([]);

  useEffect(() => {
    const watchID = Geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        const newCoordinate = {
          latitude,
          longitude,
        };

        coordinate.timing({ ...newCoordinate, useNativeDriver: false }).start();

        setRouteCoordinates(routeCoordinates.concat([newCoordinate]));

        setTotalDistance(totalDistance + calcDistance(newCoordinate));

        setPrevLatLng(newCoordinate);

        setLatLen(newCoordinate);

        setCoordinate(
          new AnimatedRegion({
            ...newCoordinate,
            latitudeDelta: 0,
            longitudeDelta: 0,
          }),
        );
      },
      (error) => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 5,
      },
    );

    return function cleanup() {
      Geolocation.clearWatch(watchID);
    };
  });

  const getMapRegion = () => ({
    latitude: latLen.latitude,
    longitude: latLen.longitude,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009,
  });

  function calcDistance(newLatLng: any) {
    return haversine(prevLatLng, newLatLng) || 0;
  }

  function handlerDrawer() {
    navigation.dispatch(DrawerActions.openDrawer());
  }

  const [start, setStart] = useState(false);

  function handleStart() {
    setStart(!start);

    console.log(routeCoordinates);

    setRouteCoordinates([]);
  }

  const [isModalVisible, setModalVisible] = useState(false);

  function handleModal() {
    setModalVisible(!isModalVisible);
  }

  return (
    <>
      <Portal>
        <Modal
          visible={isModalVisible}
          onDismiss={handleModal}
          contentContainerStyle={{
            backgroundColor: '#FFFFFF',
            padding: 10,
            width: '90%',
            marginHorizontal: '5%',
            height: '60%',
          }}>
          <Text style={{ textAlign: 'center', fontSize: 30 }}>
            Você acionou o Alerta!
          </Text>

          <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 14 }}>
            Para qual autoridade deseja disparar o chamado?
          </Text>

          <Button style={{ marginTop: 30 }} onPress={handleModal}>
            <Text>Policia (190)</Text>

            <Icon name="taxi" type="FontAwesome5" />
          </Button>

          <Button
            style={{ marginTop: 10, backgroundColor: '#b02836' }}
            onPress={handleModal}>
            <Text>SAMU (192)</Text>

            <Icon name="ambulance" type="FontAwesome5" />
          </Button>
        </Modal>
      </Portal>

      <BaseContainer>
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={handlerDrawer}>
              <Icon name="reorder" type="MaterialIcons" style={styles.icon} />
            </Button>
          </Left>
          <Body>
            <Text style={styles.title}>Inicio</Text>
          </Body>
          <Right>
            <Button transparent onPress={handleModal}>
              <Icon name="warning" type="Entypo" style={styles.alertIcon} />
            </Button>
          </Right>
        </Header>

        <Content scrollEnabled={false}>
          <View style={styles.viewMap}>
            <MapView
              style={styles.map}
              followsUserLocation
              loadingEnabled
              // showsUserLocation
              region={getMapRegion()}>
              {start && (
                <Polyline coordinates={routeCoordinates} strokeWidth={5} />
              )}
              <MarkerAnimated coordinate={coordinate} />
            </MapView>
            <View style={styles.viewButton}>
              {!start ? (
                <ButtonPrimary
                  name="Inciar"
                  icon="power"
                  onPress={handleStart}
                />
              ) : (
                <ButtonSecondary
                  name="Cancelar"
                  icon="power"
                  onPress={handleStart}
                />
              )}
            </View>
          </View>
        </Content>
      </BaseContainer>
    </>
  );
}
