import React from 'react';
import { Text } from 'react-native';
import { render } from '@testing-library/react-native';

import Card from '.';

describe('Card', () => {
  it('should be able to render', () => {
    const { getByTestId } = render(<Card />);

    expect(getByTestId('card')).toBeTruthy();
  });

  it('should be able to render children', () => {
    const { getByTestId } = render(
      <Card>
        <Text>Hello</Text>
      </Card>
    );

    expect(getByTestId('card')).toBeTruthy();
  });
});
