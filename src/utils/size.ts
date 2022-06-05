import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';
import {
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';

const { height } = Dimensions.get('window');

const size = size => {
  const proportion = height < 768 ? 680 : 760;

  return RFValue(size, proportion);
};

export const marginTop = (size: number) => RFValue(size) + getStatusBarHeight();

export const marginBottom = (size: number) => RFValue(size) + getBottomSpace();

export default size;
