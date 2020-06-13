import React, {ReactNode} from 'react';
import {Container} from 'native-base';

export function BaseContainer({children}: {children: ReactNode}) {
  return <Container>{children}</Container>;
}
