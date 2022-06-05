import { LocationDTO } from '@dto/LocationDTO';
import GetLocation from 'react-native-get-location';

export const getLocation = async (): Promise<LocationDTO | null> => {
  const location = await GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 15000,
  });

  if (location) {
    return {
      lat: location.latitude,
      lon: location.longitude,
    };
  }

  return null;
};
