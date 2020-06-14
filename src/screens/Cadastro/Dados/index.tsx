import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Body, Content, Header, Text, View } from 'native-base';

import {
  BaseContainer,
  DefaultInput,
  ButtonPrimary,
} from '../../../components';

import styles from './styles';

export function CadastrarDadosScreen() {
  const navigation = useNavigation();

  function handleSubmit() {
    navigation.navigate('Cadastro Foto');
  }

  return (
    <BaseContainer>
      <Header style={styles.header}>
        <Body style={styles.bodyheader}>
          <Text style={styles.title}>Cadastro</Text>
        </Body>
      </Header>
      <Content style={styles.content}>
        <View style={styles.View}>
          <DefaultInput name="Nome" value="Carlos Alberto" />
          <DefaultInput name="Email" value="email@email.com" />
          <DefaultInput name="CPF" value="000.000.000-00" />
          <DefaultInput name="Celular" value="(71) 9999-9999" />
          <View style={styles.viewBottom}>
            <ButtonPrimary name="Continuar" onPress={handleSubmit} />
          </View>
        </View>
      </Content>
    </BaseContainer>
  );
}
