import React from 'react';
import MapView from 'react-native-maps';

import { View } from 'native-base';

import styles from './styles';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}
