import styled from 'styled-components/native';

import size from '@utils/size';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  align-items: center;
  justify-content: center;
  height: ${size(46)}px;
  padding: 0 ${size(16)}px;

  background-color: ${({ theme }) => theme.background};
  border-radius: ${size(4)}px;
`;
