import React from 'react';

import background from '@assets/images/background.jpeg';

import { Container } from './background.styles';

interface BackgroundProps {
  children: React.ReactNode;
}

const Background = ({ children }: BackgroundProps) => {
  return (
    <Container testID="background" source={background}>
      {children}
    </Container>
  );
};

export default Background;
