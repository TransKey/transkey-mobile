import React from 'react';
import {
  Header,
  Left,
  Body,
  Right,
  Content,
  View,
  Text,
  Card,
  CardItem,
} from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { BaseContainer, ButtonBack, MeusTrajetosCard } from '../../components';

import styles from './styles';

export function MeusTrajetosScreen() {
  const navigation = useNavigation();

  function handleButtonBack() {
    navigation.navigate('Home');
  }
  return (
    <BaseContainer>
      <Header translucent style={styles.header}>
        <Left>
          <ButtonBack color="#ffffff" onPress={handleButtonBack} />
        </Left>
        <Body style={styles.bodyheader}>
          <Text style={styles.title}>Meus Trajetos</Text>
        </Body>
        <Right />
      </Header>
      <Content style={styles.content}>
        <View style={styles.viewContent}>
          <MeusTrajetosCard />
        </View>
      </Content>
    </BaseContainer>
  );
}
