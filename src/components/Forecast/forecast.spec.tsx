import React from 'react';
import { render } from '@testing-library/react-native';

import Forecast from '.';

describe('Forecast', () => {
  it('should be able to render', () => {
    const { getByTestId } = render(<Forecast />);

    expect(getByTestId('forecast')).toBeTruthy();
  });

  it('should be able to render all props', () => {
    const { getByTestId } = render(
      <Forecast
        data={{
          weekDay: 'Segunda',
          weather: 'Sol',
          maxTemperature: 30,
          minTemperature: 20,
        }}
      />
    );

    expect(getByTestId('forecast')).toBeTruthy();
  });
});
