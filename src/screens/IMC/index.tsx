import React, { useState } from 'react';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
import { Header, Left, Body, Right, Content, View, Text } from 'native-base';

import {
  BaseContainer,
  ButtonBack,
  DefaultInput,
  ButtonPrimary,
} from '../../components';

import styles from './styles';

export function CalculadoraScreen() {
  const navigation = useNavigation();
  const [state, setState] = useState({ peso: 0, altura: '1.20', imc: 0 });

  function handleButtonBack() {
    navigation.navigate('Home');
  }

  function calcular() {
    const imc = state.peso / Math.pow(Number(state.altura), 2);
    console.warn(imc);
  }
  return (
    <BaseContainer>
      <Header style={styles.header}>
        <Left>
          <ButtonBack color="#ffffff" onPress={handleButtonBack} />
        </Left>
        <Body style={styles.bodyheader}>
          <Text style={styles.title}>Calculadora IMC</Text>
        </Body>
        <Right />
      </Header>
      <Content style={styles.content}>
        <View style={styles.view}>
          <Text style={styles.textPeso}>Peso</Text>
          <Slider
            step={0.5}
            value={state.peso}
            onValueChange={(peso) =>
              setState({ ...state, peso: Number(peso.toFixed(2)) })
            }
            minimumValue={40}
            maximumValue={200}
            minimumTrackTintColor="#4e73df"
            maximumTrackTintColor="#000000"
            style={styles.slider}
          />
          <Text style={styles.valuePeso}>{state.peso.toFixed(1)}Kg</Text>

          <DefaultInput
            disabled
            name="Altura"
            type="decimal-pad"
            value={state.altura}
            onChange={(altura: any) => setState({ ...state, altura })}
          />

          <ButtonPrimary name="Calcular" onPress={calcular} />
        </View>
      </Content>
    </BaseContainer>
  );
}
