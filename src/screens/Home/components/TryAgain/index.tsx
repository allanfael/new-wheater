import React from 'react';
import { useDispatch } from 'react-redux';
import { weatherRequest } from '@store/ducks/weather';

import { Typography, Button } from '@components';

import size from '@utils/size';

import { Container } from './styles';

const TryAgain = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Typography variant="normalRegular" color="background">
        É necessário conceder permissão à localização
      </Typography>
      <Button
        style={{
          marginTop: size(20),
        }}
        text="Tentar novamente"
        onPress={() => dispatch(weatherRequest())}
      />
    </Container>
  );
};

export default TryAgain;
