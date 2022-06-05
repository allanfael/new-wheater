import React from 'react';
import { render } from '@testing-library/react-native';

import Typography from '.';

describe('Typography', () => {
  it('should be able to render all props', () => {
    const { getByTestId } = render(
      <Typography variant="normalRegular" color="card" />
    );

    expect(getByTestId('typography')).toBeTruthy();
  });

  it('should be able to render a text', () => {
    const { getByTestId, getByText } = render(
      <Typography variant="normalRegular" color="card">
        Hello
      </Typography>
    );

    expect(getByTestId('typography')).toBeTruthy();
    expect(getByText('Hello')).toBeTruthy();
  });
});
