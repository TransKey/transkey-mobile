import React, { ReactNode } from 'react';
import { StatusBar } from 'react-native';
import { Container } from 'native-base';

import styles from './styles';

export function BaseContainer({ children }: { children: ReactNode }) {
  return (
    <>
      <StatusBar barStyle="light-content" animated backgroundColor="#4e73df" />
      <Container style={styles.container}>{children}</Container>
    </>
  );
}
