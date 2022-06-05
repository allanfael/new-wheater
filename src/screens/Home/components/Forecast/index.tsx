import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@store/ducks/rootReducer';

import { Forecast } from '@components';

import { Container } from './styles';

const Header = () => {
  const { forecast } = useSelector((state: RootState) => state.weather);

  return (
    <Container testID="forecast.component">
      {forecast?.map((item, index) => (
        <Forecast key={index} data={item} />
      ))}
    </Container>
  );
};

export default Header;
