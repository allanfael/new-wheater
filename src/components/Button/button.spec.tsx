import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';

import colors from '@themes/colors';

import Button from '.';

const Provider: React.FC = ({ children }) => (
  <ThemeProvider theme={colors}>{children}</ThemeProvider>
);

describe('Button', () => {
  it('should be able to render correctly', () => {
    const { getByTestId } = render(
      <Button text="Conceder permissão" onPress={() => {}} />
    );

    expect(getByTestId('button')).toBeTruthy();
  });

  it('should be able to render with theme', () => {
    const { getByTestId } = render(
      <Button text="Conceder permissão" onPress={() => {}} />,
      {
        wrapper: Provider,
      }
    );

    expect(getByTestId('button').props.style.backgroundColor).toBe(
      colors.background
    );
  });
});
