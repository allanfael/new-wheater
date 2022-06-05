import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@store/ducks/rootReducer';

import { Typography, CardWeather } from '@components';

import { ComponentsContainer, Container } from './styles';

const Weather = () => {
  const { weather } = useSelector((state: RootState) => state.weather);

  return (
    <Container testID="weather.component">
      <Typography variant="bigBold" style={{ marginBottom: 20 }}>
        {Math.round(weather?.temperature || 0)}°
      </Typography>

      <ComponentsContainer testID="cardContainer">
        <CardWeather title="Max" value={weather?.maxTemperature || 0} />
        <CardWeather title="Min" value={weather?.minTemperature || 0} />
      </ComponentsContainer>

      <ComponentsContainer>
        <CardWeather title="Fells Like" value={weather?.feelsLike || 0} />
        <CardWeather title="Humidity" value={weather?.humidity || 0} />
      </ComponentsContainer>
    </Container>
  );
};

export default Weather;
