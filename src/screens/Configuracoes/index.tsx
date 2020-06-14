import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Header, Left, Right, Body, Text, Content, View } from 'native-base';

import {
  BaseContainer,
  ButtonBack,
  ButtonSecondary,
  ButtonTertiary,
} from '../../components';

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
      <Content style={styles.content}>
        <View style={styles.view}>
          <ButtonTertiary
            name="Notificacoes"
            icon="notification"
            type="Entypo"
          />
          <ButtonTertiary name="Suporte" icon="chat" type="Entypo" />
          <View style={styles.viewbottom}>
            <ButtonSecondary
              name="Excluir Conta"
              icon="delete"
              type="AntDesign"
            />
          </View>
        </View>
      </Content>
    </BaseContainer>
  );
}
