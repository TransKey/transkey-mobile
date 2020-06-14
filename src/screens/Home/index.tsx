import React, { useState, useEffect, useRef } from 'react';
import { View } from 'native-base';
import MapView, {
  AnimatedRegion,
  Polyline,
  Marker,
  MarkerAnimated,
} from 'react-native-maps';
import haversine from 'haversine';

import Geolocation from '@react-native-community/geolocation';

import styles from './styles';

export function HomeScreen() {
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
        distanceFilter: 10,
      },
    );

    return function cleanup() {
      Geolocation.clearWatch(watchID);
    };
  }, [routeCoordinates]);

  const getMapRegion = () => ({
    latitude: latLen.latitude,
    longitude: latLen.longitude,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009,
  });

  function calcDistance(newLatLng: any) {
    return haversine(prevLatLng, newLatLng) || 0;
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        followsUserLocation
        loadingEnabled
        region={getMapRegion()}>
        <Polyline coordinates={routeCoordinates} strokeWidth={5} />

        <MarkerAnimated coordinate={coordinate} />
      </MapView>
    </View>
  );
}
