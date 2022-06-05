import React from 'react';
import { render } from '@testing-library/react-native';

import CardWeather from '.';

describe('CardWeather', () => {
  it('should be able to render', () => {
    const { getByTestId } = render(<CardWeather />);

    expect(getByTestId('card')).toBeTruthy();
  });

  it('should be able to render humidity props', () => {
    const { getByTestId, getByText } = render(
      <CardWeather title="Umidade" value={50} />
    );

    expect(getByText('Umidade')).toBeTruthy();
    expect(getByText('50%')).toBeTruthy();

    expect(getByTestId('card')).toBeTruthy();
  });

  it('should be able to render temperature props', () => {
    const { getByTestId, getByText } = render(
      <CardWeather title="Max" value={50} />
    );

    expect(getByText('Max')).toBeTruthy();
    expect(getByText('50°')).toBeTruthy();

    expect(getByTestId('card')).toBeTruthy();
  });

  it('should be able to render empty props', () => {
    const { getByTestId, getByText } = render(
      <CardWeather title="" value={0} />
    );

    expect(getByText('')).toBeTruthy();
    expect(getByText('0°')).toBeTruthy();

    expect(getByTestId('card')).toBeTruthy();
  });
});
