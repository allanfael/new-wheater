import React from 'react';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import colors from '@themes/colors';

// Screens
import Home from '@screens/Home/Home';

function RootNavigator() {
  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      background: colors.background,
    },
  };

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer theme={CustomDefaultTheme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export { RootNavigator };
