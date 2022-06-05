import React from 'react';
import { render, waitFor, cleanup } from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import * as ReactRedux from 'react-redux';

import { weatherMock } from '@mock/weather';

import Forecast from '.';

const initialState = {
  weather: weatherMock,
  loading: false,
  message: '',
};

const mockStore = configureStore([]);

const store = mockStore(initialState);

afterEach(() => cleanup());

describe('ForecastComponent', () => {
  it('should be able to render', () => {
    const { getByTestId } = render(
      <ReactRedux.Provider store={store}>
        <Forecast />
      </ReactRedux.Provider>
    );

    expect(getByTestId('forecast.component').children.length).toEqual(3);
  });
});
