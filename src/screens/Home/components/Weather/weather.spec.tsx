import '@testing-library/jest-native/extend-expect';
import React from 'react';
import { render, cleanup } from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import * as ReactRedux from 'react-redux';

import { weatherMock } from '@mock/weather';

import Weather from '.';

const initialState = {
  weather: weatherMock,
  loading: false,
  message: '',
};

const mockStore = configureStore([]);

const store = mockStore(initialState);

afterEach(() => cleanup());

describe('WeatherComponent', () => {
  it('should be able to render correctly', () => {
    const { getByTestId } = render(
      <ReactRedux.Provider store={store}>
        <Weather />
      </ReactRedux.Provider>
    );

    expect(getByTestId('weather.component').children.length).toEqual(3);
  });
});
