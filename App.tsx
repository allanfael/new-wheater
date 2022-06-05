import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';

import '@config/ReactotronConfig';
import 'moment/locale/en-ca';

import { persistor, store } from '@store';

import colors from '@themes/colors';

import { RootNavigator } from '@navigator';

function App() {
  React.useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <ThemeProvider theme={colors}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={colors.statusBar}
          />
          <RootNavigator />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
