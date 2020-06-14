import React from 'react';
import { Item, Label, Input } from 'native-base';

import styles from './styles';

interface DefaultInputProps {
  name: string;
  value: string;
  type?: any;
  disabled?: boolean;
  onChange?: any;
}

export function DefaultInput({
  name,
  value,
  type,
  disabled,
  onChange,
}: DefaultInputProps) {
  return (
    <Item floatingLabel style={styles.item}>
      <Label style={styles.label}>{name}</Label>
      <Input
        disabled={!disabled}
        keyboardType={type}
        value={value}
        onChangeText={onChange}
        style={styles.input}
      />
    </Item>
  );
}
