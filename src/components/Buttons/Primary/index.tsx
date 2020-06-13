import React from 'react';
import {Button, Text, Icon} from 'native-base';

import styles from './styles';

interface ButtonPrimaryProps {
  name: string;
  icon: any;
}

export function ButtonPrimary({name, icon}: ButtonPrimaryProps) {
  return (
    <Button style={styles.button}>
      <Text style={styles.text}>{name}</Text>
      <Icon name={icon} />
    </Button>
  );
}
