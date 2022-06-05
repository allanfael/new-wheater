import React from 'react';
import { render } from '@testing-library/react-native';

import Background from '.';

describe('Background', () => {
  it('should be able to render', () => {
    const { getByTestId } = render(<Background />);

    expect(getByTestId('background')).toBeTruthy();
  });
});
