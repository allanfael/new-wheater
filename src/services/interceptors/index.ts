import { Alert } from 'react-native';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';

import { store } from '@store';
import { weatherFailure } from '@store/ducks/weather';

export const checkNetwork = async (request: AxiosRequestConfig) => {
  const isConnected = await NetInfo.fetch().then(
    state => state.isInternetReachable
  );

  if (!isConnected) {
    Alert.alert(
      'Ops',
      'Verifique sua conexão com a internet e tente novamente'
    );
    throw new axios.Cancel('User disconnected from internet');
  } else return request;
};

export const handleApiErros = (error: AxiosError) => {
  switch (error.message) {
    case 'Network Error':
      store.dispatch(weatherFailure({ message: 'Sem conexão com a internet' }));
      break;
    case 'timeout of 30000ms exceeded':
      store.dispatch(
        weatherFailure({
          message: 'Instabilidade na rede',
        })
      );
      break;
    default:
      break;
  }
};
