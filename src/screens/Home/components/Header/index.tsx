import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@store/ducks/rootReducer';

import { Typography } from '@components';

import { Container } from './styles';

const Header = () => {
  const { weather } = useSelector((state: RootState) => state.weather);

  return (
    <Container testID="header.component">
      <Typography variant="normalRegular">{weather?.date}</Typography>
      <Typography variant="mediumRegular">
        {weather?.city}, {weather?.country}
      </Typography>
    </Container>
  );
};

export default Header;
