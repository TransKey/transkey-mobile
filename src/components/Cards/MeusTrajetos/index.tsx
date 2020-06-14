import React from 'react';
import { View, Card, CardItem, Text, Body, Button } from 'native-base';
import { TouchableHighlight } from 'react-native-gesture-handler';

import styles from './styles';

export function MeusTrajetosCard() {
  return (
    <TouchableHighlight
      activeOpacity={1}
      underlayColor="rgba(201, 201, 201, 0.5)"
      onPress={() => console.warn('teste')}>
      <Card style={styles.card}>
        <CardItem header bordered style={styles.cardItem}>
          <Text style={styles.cardTitle}>20km de distancia percorrida</Text>
        </CardItem>
        <CardItem cardBody style={styles.cardItem}>
          <Body style={styles.cardBody}>
            <Text style={styles.cardText}>Dia: Domingo</Text>
            <Text style={styles.cardText}>Tempo de trajeto: 36 Horas</Text>
          </Body>
        </CardItem>
        <CardItem footer style={styles.cardFooter}>
          <Text style={styles.foooterText}>Click para mais detalhes</Text>
        </CardItem>
      </Card>
    </TouchableHighlight>
  );
}
