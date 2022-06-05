import styled from 'styled-components/native';

import size from '@utils/size';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  height: ${size(80)}px;
  width: ${size(80)}px;

  background-color: ${({ theme }) => theme.background};
  border-radius: 8px;
  box-shadow: 4px 10px 10px rgba(0, 0, 0, 0.6);
  elevation: 10;
`;
