import styled from 'styled-components/native';

import size from '@utils/size';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  margin-top: ${size(20)}px;
`;

export const ComponentsContainer = styled.View`
  flex-direction: row;
  opacity: 0.8;
`;
