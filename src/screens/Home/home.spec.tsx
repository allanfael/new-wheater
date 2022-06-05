import React from 'react';
import { cleanup, render, act, waitFor } from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import * as ReactRedux from 'react-redux';

import { weatherMock } from '@mock/weather';

import { weatherRefresh, weatherRequest } from '@store/ducks/weather';

import Home from './Home';

const initialState = {
  weather: weatherMock,
  loading: true,
  message: '',
};

const mockStore = configureStore([]);

const store = mockStore(initialState);

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

const useDispatchMock = ReactRedux.useDispatch as jest.Mock;

// afterEach(() => {
//   cleanup();
// });

describe('Home', () => {
  const dispatchResultRecorder = {} as any;
  const fakeDispatch = action => {
    let payload = action.payload;
    if (payload === undefined) {
      payload = 'void';
    }
    dispatchResultRecorder[action.type] = payload;
  };

  useDispatchMock.mockImplementation(() => fakeDispatch);

  it('should be able to render', () => {
    // useDispatchMock.mockClear();

    // expect(useDispatchMock).toHaveBeenCalledTimes(1);

    const { getByTestId } = render(
      <ReactRedux.Provider store={store}>
        <Home />
      </ReactRedux.Provider>
    );

    expect(getByTestId('home')).toBeTruthy();
  });

  it('should be able to render components', () => {
    const { getByTestId } = render(
      <ReactRedux.Provider store={store}>
        <Home />
      </ReactRedux.Provider>
    );

    expect(getByTestId('header.component')).toBeTruthy();
    expect(getByTestId('weather.component')).toBeTruthy();
    expect(getByTestId('forecast.component')).toBeTruthy();
  });

  it('should should dispatch refresh weather', async () => {
    const { getByTestId } = render(
      <ReactRedux.Provider store={store}>
        <Home />
      </ReactRedux.Provider>
    );

    const refreshControl = getByTestId('home').props.refreshControl;

    await act(async () => {
      refreshControl.props.onRefresh();
    });

    expect(useDispatchMock).toHaveBeenCalled();
  });
});
