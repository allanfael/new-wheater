import React from 'react';
import { render } from '@testing-library/react-native';

import Loading from '.';

describe('Loading', () => {
  it('should be able to render correctly', () => {
    const { getByTestId } = render(<Loading />);

    expect(getByTestId('loading')).toBeTruthy();
  });

  it('should be able to render render text', () => {
    const { getByText } = render(<Loading />);

    expect(getByText('Loading...')).toBeTruthy();
  });
});
