import React from 'react';
import { ViewStyle } from 'react-native';

import { Container, YellowLine, ColumnContainer } from './card.styles';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const Card = ({ children, style }: CardProps) => {
  return (
    <Container style={style} testID="card">
      <YellowLine />
      <ColumnContainer>{children}</ColumnContainer>
    </Container>
  );
};

export default Card;
