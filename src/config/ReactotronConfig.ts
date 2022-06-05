/* eslint-disable import/no-extraneous-dependencies */
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
import { NativeModules } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Android may need configure({host: 'local ip'}) and adb reverse tcp:9090 tcp:9090

declare global {
  interface Console {
    tron: any;
  }
}

if (__DEV__) {
  let scriptHostname;
  const scriptURL = NativeModules.SourceCode.scriptURL;
  scriptHostname = scriptURL.split('://')[1].split(':')[0];

  const tron = Reactotron.configure({ host: scriptHostname, port: 9090 })
    .setAsyncStorageHandler(AsyncStorage)
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  tron.clear();

  console.tron = tron;
}
