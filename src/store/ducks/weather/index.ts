import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { WeatherDTO } from '@dto/WeatherDTO';
import { ForecastDTO } from '@dto/ForecastDTO';

interface WeatherState {
  weather: WeatherDTO;
  forecast: ForecastDTO[];
  loading: boolean;
  refreshing: boolean;
  message?: string;
  locationPermission: boolean;
}

interface WeatherPayload {
  weather: WeatherDTO;
  forecast: ForecastDTO[];
  locationPermission: boolean;
}

interface WeatherErroPayload {
  message: string;
}

const weather = createSlice({
  name: 'weather',
  initialState: {
    weather: {} as WeatherDTO,
    forecast: [],
    loading: false,
    refreshing: false,
    message: '',
    locationPermission: true,
  } as WeatherState,
  reducers: {
    weatherRequest: state => {
      state.loading = true;
    },
    weatherRefresh: state => {
      state.refreshing = true;
    },
    weatherSuccess: (state, action: PayloadAction<WeatherPayload>) => {
      state.weather = action.payload.weather;
      state.forecast = action.payload.forecast;
      state.loading = false;
      state.refreshing = false;
      state.message = '';
    },
    weatherFailure: (state, action: PayloadAction<WeatherErroPayload>) => {
      state.loading = false;
      state.refreshing = false;
      state.message = action.payload.message;
      state.weather = {} as WeatherDTO;
      state.forecast = [];
    },
    getLocationPermission: (state, action: PayloadAction<boolean>) => {
      state.locationPermission = action.payload;
    },
  },
});

export const {
  weatherRequest,
  weatherSuccess,
  weatherFailure,
  weatherRefresh,
  getLocationPermission,
} = weather.actions;
export default weather.reducer;
