import styled from 'styled-components/native';
import { Dimensions, ImageBackground } from 'react-native';
import size, { marginTop, marginBottom } from '@utils/size';

const { height } = Dimensions.get('window');

export const Container = styled(ImageBackground)`
  flex: 1;
  height: ${height}px;

  padding-right: ${size(16)}px;
  padding-left: ${size(16)}px;
`;
