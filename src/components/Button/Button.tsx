import React from 'react';
import { ViewStyle } from 'react-native';

import Typography from '../Typography';

import { Container } from './button.styles';

interface ButtonProps {
  onPress: () => void;
  text: string;
  style?: ViewStyle;
}

const Button = ({ onPress, text, style }: ButtonProps) => {
  return (
    <Container testID="button" onPress={onPress} style={style}>
      <Typography variant="normalRegular">{text}</Typography>
    </Container>
  );
};

export default Button;
