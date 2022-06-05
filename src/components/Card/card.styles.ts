import styled from 'styled-components/native';

import size from '@utils/size';

export const Container = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.background};
  border-radius: 8px;
  height: ${size(80)}px;
  width: ${size(80)}px;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.2);
  elevation: 10;
`;

export const ColumnContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const YellowLine = styled.View`
  background-color: ${({ theme }) => theme.secondary};
  height: 100%;
  width: ${size(4)}px;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
`;
