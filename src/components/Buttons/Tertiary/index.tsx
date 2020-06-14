import React from 'react';
import { Button, Text, Icon } from 'native-base';

import styles from './styles';

interface ButtonTertiaryProps {
  name: string;
  icon?: any;
  type?: any;
  onPress?: any;
}

export function ButtonTertiary({
  name,
  icon,
  type,
  onPress,
}: ButtonTertiaryProps) {
  return (
    <Button style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{name}</Text>
      {icon && <Icon name={icon} type={type} />}
    </Button>
  );
}
