import React from 'react';
import { Button, Text, Icon } from 'native-base';

import styles from './styles';

interface ButtonSecondaryProps {
  name: string;
  icon: any;
  onPress?: any;
}
export function ButtonSecondary({ name, icon, onPress }: ButtonSecondaryProps) {
  return (
    <Button style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{name}</Text>
      <Icon name={icon} />
    </Button>
  );
}
