import React from 'react';
import MapView from 'react-native-maps';
import {Container, Header, View, Content} from 'native-base';

import styles from './styles';

export function HomeScreen() {
  return (
    <Container>
      <Header />
      <Content>
        <View style={styles.container}>
          <MapView
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            style={styles.map}
          />
        </View>
      </Content>
    </Container>
  );
}
