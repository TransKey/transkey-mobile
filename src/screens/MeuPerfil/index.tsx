import React from 'react';
import {
  Header,
  Content,
  Text,
  Thumbnail,
  Body,
  Right,
  Left,
  View,
} from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { BaseContainer, ButtonBack } from '../../components';

import styles from './styles';

export function MeuPerfilScreen() {
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
        <Body>
          <Text style={styles.title}>Meu Perfil</Text>
        </Body>
        <Right />
      </Header>
      <Content style={styles.content}>
        <View style={styles.viewContent}>
          <Thumbnail
            source={{
              uri:
                'http://pluspng.com/img-png/user-png-icon-male-user-icon-512.png',
            }}
            style={styles.thumbnail}
          />

          <View style={styles.viewData}>
            <View style={styles.viewText}>
              <Text style={styles.text}>Nome: Carlos Alberto</Text>
              <Text style={styles.text}>Email: email@email.com</Text>
              <Text style={styles.text}>CPF: 000.000.000-00</Text>
              <Text style={styles.text}>Celular: (71) 9999-9999</Text>
            </View>
          </View>
        </View>
      </Content>
    </BaseContainer>
  );
}
