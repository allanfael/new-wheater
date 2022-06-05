import { ForecastDTO } from '@dto/ForecastDTO';
import { WeatherDTO } from '@dto/WeatherDTO';

export const forecast: ForecastDTO[] = [
  {
    weekDay: 'Today',
    weather: 'Clouds',
    maxTemperature: 15,
    minTemperature: 10,
  },
  {
    weekDay: 'Tomorrow',
    weather: 'Clouds',
    maxTemperature: 20,
    minTemperature: 14,
  },
  {
    weekDay: 'friday',
    weather: 'Clouds',
    maxTemperature: 25,
    minTemperature: 18,
  },
];

const weather: WeatherDTO = {
  date: '3 de junho de 2020',
  city: 'São Paulo',
  country: 'BR',
  temperature: 10,
  maxTemperature: 15,
  minTemperature: 5,
  feelsLike: 10,
  humidity: 50,
};

export const weatherMock = {
  weather,
  forecast,
};
