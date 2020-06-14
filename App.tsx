import React, { useEffect } from 'react';
import { Root } from 'native-base';

import { PermissionsAndroid, Platform } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import { AppNavigation } from './src/navigation';

Geolocation.setRNConfiguration({
  authorizationLevel: 'always',
  skipPermissionRequests: true,
});

const App = () => {
  useEffect(() => {
    async function requestLocationPermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use locations ');
        } else {
          console.log('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization();
    } else {
      requestLocationPermission();
    }
  });

  return (
    <Root>
      <AppNavigation />
    </Root>
  );
};

export default App;
