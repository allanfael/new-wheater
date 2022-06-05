import React from 'react';

import Typography from '../Typography';

import { ForecastDTO } from '@dto/ForecastDTO';

import { Container, ComponentsContainer } from './forecast.styles';

interface ForecastProps {
  data: ForecastDTO;
}

const Forecast = ({ data }: ForecastProps) => {
  return (
    <Container testID="forecast">
      <ComponentsContainer>
        <Typography variant="normalRegular" color="card">
          {data?.weekDay}
        </Typography>
        <Typography variant="normalRegular" color="card">
          {' '}
          -{' '}
        </Typography>
        <Typography variant="normalRegular" color="card">
          {data?.weather}
        </Typography>
      </ComponentsContainer>

      <ComponentsContainer>
        <Typography variant="normalRegular" color="card">
          {Math.round(data?.maxTemperature)}°
        </Typography>
        <Typography variant="normalRegular" color="card">
          {' '}
          /{' '}
        </Typography>
        <Typography variant="normalRegular" color="card">
          {Math.round(data?.minTemperature)}°
        </Typography>
      </ComponentsContainer>
    </Container>
  );
};

export default Forecast;
