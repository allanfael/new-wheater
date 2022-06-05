import { put, takeLatest, all } from 'redux-saga/effects';

import { getWeather, getForecast } from '@services/weather/weather';
import { getLocation } from '@services/location/LocationServices';

import { weatherSuccess, weatherFailure } from '.';

import { WeatherDTO } from '@dto/WeatherDTO';
import { ForecastDTO } from '@dto/ForecastDTO';

import { currentDate, weekDay } from '@utils/date';

function* weatherRequest() {
  try {
    const location = yield getLocation();
    const weatherResponse = yield getWeather(location);
    const forecastResponse = yield getForecast(location);

    const weather: WeatherDTO = {
      date: currentDate(),
      city: weatherResponse?.data?.name,
      country: weatherResponse?.data?.sys.country,
      temperature: weatherResponse?.data?.main.temp,
      maxTemperature: weatherResponse?.data?.main.temp_max,
      minTemperature: weatherResponse?.data?.main.temp_min,
      feelsLike: weatherResponse?.data?.main.feels_like,
      humidity: weatherResponse?.data?.main.humidity,
    };

    const forecast: ForecastDTO[] = forecastResponse.data.daily.map(day => ({
      weekDay: weekDay(day.dt),
      weather: day.weather[0].main,
      maxTemperature: day.temp.max,
      minTemperature: day.temp.min,
    }));

    yield put(weatherSuccess({ weather, forecast }));
  } catch ({ response }) {
    yield put(
      weatherFailure({
        message: response?.data?.message,
      })
    );
  }
}

export default all([
  takeLatest('weather/weatherRequest', weatherRequest),
  takeLatest('weather/weatherRefresh', weatherRequest),
]);
