import React from 'react';
import { ViewStyle } from 'react-native';
import LottieView from 'lottie-react-native';

import whiteLoading from '@assets/lottie/loading-white.json';

import Typography from '../Typography';

import { Container } from './loading.styles';

interface LoadingProps {
  style?: ViewStyle;
}

const Loading = ({ style }: LoadingProps) => {
  return (
    <Container style={style} testID="loading">
      <LottieView
        style={{ height: 60, width: 60 }}
        source={whiteLoading}
        autoPlay
        loop
      />
      <Typography variant="smallRegular">Loading...</Typography>
    </Container>
  );
};

export default Loading;
