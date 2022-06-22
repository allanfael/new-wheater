import { configureStore } from '@reduxjs/toolkit';

export default (reducer, middlewares) => {
  return configureStore({
    reducer,
    middleware: [...middlewares],
  });
};
