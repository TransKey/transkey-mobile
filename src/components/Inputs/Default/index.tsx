import React from 'react';
import { Item, Label, Input } from 'native-base';

import styles from './styles';

interface DefaultInputProps {
  name: string;
  value: string;
}

export function DefaultInput({ name, value }: DefaultInputProps) {
  return (
    <Item floatingLabel style={styles.item}>
      <Label style={styles.label}>{name}</Label>
      <Input disabled value={value} style={styles.input} />
    </Item>
  );
}
