import styled from 'styled-components/native';

import size from '@utils/size';

export const Container = styled.View`
  width: 100%;
  margin-top: ${size(50)}px;

  align-items: center;
`;

export const ComponentsContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin: ${size(20)}px 0;
  padding: 0 ${size(86)}px;
`;
