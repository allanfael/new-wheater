import GetLocation from 'react-native-get-location';

import { getLocationPermission } from '@store/ducks/weather';

import { LocationDTO } from '@dto/LocationDTO';
import { store } from '@store';

export const getLocation = async (): Promise<LocationDTO | null> => {
  try {
    const location = await GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    });

    store.dispatch(getLocationPermission(true));

    return {
      lat: location.latitude,
      lon: location.longitude,
    };
  } catch (error) {
    store.dispatch(getLocationPermission(false));

    return null;
  }
};
