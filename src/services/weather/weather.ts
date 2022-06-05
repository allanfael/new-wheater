import baseApi from './api';
import { LocationDTO } from '@dto/LocationDTO';

import env from '@config/env';

export const getWeather = async (location: LocationDTO) =>
  baseApi({
    endpoint: `data/2.5/weather?appid=${env.KEY}`,
    method: 'GET',
    params: {
      lat: location.lat,
      lon: location.lon,
      units: 'metric',
    },
  });

export const getForecast = async (location: LocationDTO) =>
  baseApi({
    endpoint: `data/2.5/onecall?appid=${env.KEY}`,
    method: 'GET',
    params: {
      lat: location.lat,
      lon: location.lon,
      units: 'metric',
      exclude: 'minutely,hourly, alerts',
    },
  });
