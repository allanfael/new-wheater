import GetLocation, { Location } from 'react-native-get-location';

import { getLocationPermission } from '@store/ducks/weather';

import { LocationDTO } from '@dto/LocationDTO';
import { store } from '@store';

export const getLocation = async (): Promise<LocationDTO | null> => {
  const location = await GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 15000,
  })
    .then((location: Location) => {
      store.dispatch(getLocationPermission(true));
      return {
        latitude: location.latitude,
        longitude: location.longitude,
      };
    })
    .catch(error => {
      store.dispatch(getLocationPermission(false));
    });

  if (location) {
    return {
      lat: location.latitude,
      lon: location.longitude,
    };
  }

  return null;
};
