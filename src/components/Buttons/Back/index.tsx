import React from 'react';
import { Button, Icon } from 'native-base';

import styles from './styles';

interface ButtonBackProps {
  color: string;
  onPress: () => void;
}

export function ButtonBack({ color, onPress }: ButtonBackProps) {
  return (
    <Button transparent onPress={onPress} style={styles.button}>
      <Icon name="md-arrow-back" style={{ color }} />
    </Button>
  );
}
