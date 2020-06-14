import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Left,
  Right,
  Body,
  Content,
  Header,
  Text,
  View,
  Thumbnail,
} from 'native-base';

import {
  BaseContainer,
  ButtonBack,
  ButtonPrimary,
  ButtonTertiary,
} from '../../../components';

import styles from './styles';

export function CadastrarFotoScreen() {
  const navigation = useNavigation();

  function handleButtonBack() {
    navigation.navigate('Cadastro Dados');
  }

  function handleSubmit() {
    navigation.navigate('Home');
  }
  return (
    <BaseContainer>
      <Header style={styles.header}>
        <Left>
          <ButtonBack color="#ffffff" onPress={handleButtonBack} />
        </Left>
        <Body style={styles.bodyheader}>
          <Text style={styles.title}>Cadastro</Text>
        </Body>
        <Right />
      </Header>
      <Content style={styles.content}>
        <View style={styles.View}>
          <Thumbnail
            source={{
              uri:
                'http://pluspng.com/img-png/user-png-icon-male-user-icon-512.png',
            }}
            style={styles.thumbnail}
          />
        </View>
        <View style={styles.bottomView}>
          <View>
            <ButtonTertiary name="Enviar Foto" />
          </View>
          <View style={styles.viewConfirmar}>
            <ButtonPrimary name="Confirmar" onPress={handleSubmit} />
          </View>
        </View>
      </Content>
    </BaseContainer>
  );
}
