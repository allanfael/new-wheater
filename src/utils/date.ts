import moment from 'moment';

export const currentDate = () => {
  return moment().format('LL');
};

export const weekDay = (timestamp: number) => {
  return moment(timestamp * 1000).format('dddd');
};
