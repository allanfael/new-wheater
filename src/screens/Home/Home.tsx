import React, { useEffect } from 'react';
import { RefreshControl } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { weatherRequest, weatherRefresh } from '@store/ducks/weather';
import { RootState } from '@store/ducks/rootReducer';

import { Background, Loading } from '@components';

import Header from './components/Header';
import Weather from './components/Weather';
import Forecast from './components/Forecast';

import colors from '@themes/colors';

import { Container } from './home.styles';

function Home() {
  const { loading, refreshing } = useSelector(
    (state: RootState) => state.weather
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(weatherRequest());
  }, []);

  return (
    <Background>
      <Container
        testID="home"
        refreshControl={
          <RefreshControl
            testID="refresh-control"
            colors={[colors.text]}
            tintColor={colors.primary}
            refreshing={refreshing}
            onRefresh={() => {
              dispatch(weatherRefresh());
            }}
          />
        }>
        {loading ? (
          <Loading
            style={{
              alignSelf: 'center',
              marginTop: '50%',
            }}
          />
        ) : (
          <>
            <Header />
            <Weather />
            <Forecast />
          </>
        )}
      </Container>
    </Background>
  );
}

export default Home;
