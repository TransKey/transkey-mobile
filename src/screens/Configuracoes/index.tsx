import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Header, Left, Right, Body, Text } from 'native-base';

import { BaseContainer, ButtonBack } from '../../components';

import styles from './styles';

export function ConfiguracoesScreen() {
  const navigation = useNavigation();
  function handleButtonBack() {
    navigation.navigate('Home');
  }
  return (
    <BaseContainer>
      <Header style={styles.header}>
        <Left>
          <ButtonBack color="#ffffff" onPress={handleButtonBack} />
        </Left>
        <Body style={styles.bodyheader}>
          <Text style={styles.title}>Configurações</Text>
        </Body>
        <Right />
      </Header>
    </BaseContainer>
  );
}
