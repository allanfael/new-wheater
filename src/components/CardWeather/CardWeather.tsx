import React from 'react';
import { ViewStyle } from 'react-native';

import Card from '../Card';
import Typography from '../Typography';

interface CardProps {
  title: string;
  value: number;
  style?: ViewStyle;
}

const CardWeather = ({ title, value, style }: CardProps) => {
  const symbol = title !== 'Umidade' ? '°' : '%';
  const fullValue = `${Math.round(value)}${symbol}`;

  return (
    <Card style={style}>
      <Typography variant="normalMedium">{title}</Typography>
      <Typography variant="mediumRegular">{fullValue}</Typography>
    </Card>
  );
};

export default CardWeather;
